import { dbConnection } from "../config/db.config";
import { Event } from "../entity/events.entity";

export const EventRepo = dbConnection.getRepository(Event);