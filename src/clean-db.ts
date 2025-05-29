import { dbConnection } from "./config/db.config";
import { User } from "./entity/users.entity";
import { Event } from "./entity/events.entity";
import { Request } from './entity/requests.entity';

const cleandb = async () => {

    try {

        const datasource = await dbConnection.initialize();

        await datasource.getRepository(Event).clear();
        await datasource.getRepository(User).clear();
        const checking = await datasource.getRepository(Request);
        console.log(await checking.find());

        await datasource.getRepository(Request).clear();

        const userCount = await datasource.getRepository(User).count();
        const eventCount = await datasource.getRepository(Event).count();
        const requestCount = await datasource.getRepository(Request).count();

        console.log(`Cleaned db: ${userCount} users, ${eventCount} events, and ${requestCount} requests remaining`);

        await datasource.destroy();

    } catch (error) {
        console.error('error cleaning db: ', error)
        process.exit(1);
    }
}

cleandb();