import { dbConnection } from "../config/db.config";
import { Request } from "../entity/requests.entity";

export const RequestRepo = dbConnection.getRepository(Request);