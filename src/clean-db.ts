import { dbConnection } from "./config/db.config";
import { User } from "./entity/users.entity";
import { Event } from "./entity/events.entity";

const cleandb = async () => {

    try {

        const datasource = await dbConnection.initialize();

        await datasource.getRepository(Event).clear();
        await datasource.getRepository(User).clear();

        const userCount = await datasource.getRepository(User).count();
        const eventCount = await datasource.getRepository(Event).count();

        console.log(`Cleaned db: ${userCount} users, ${eventCount} events remaining`);

        await datasource.destroy();

    } catch (error) {
        console.error('error cleaning db: ', error)
        process.exit(1);
    }
}