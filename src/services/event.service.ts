
import { IEvent } from "../interfaces/event.interface";
import { EventRepo } from "../repository/event.repository";
import { Event } from "../entity/events.entity";

export const createEvent = async (data: IEvent): Promise<Event> => {
    const newEvent = EventRepo.create(data);
    return await EventRepo.save(newEvent);
}

export const getEventsByUsername = async (): Promise<Event[]>  => {
    return await EventRepo.find();
}

export const updateEvent = async (id: number, data: Partial<IEvent>): Promise<Event> => {
    await EventRepo.update(id, data);
    return await EventRepo.findOneBy({ id });
}

export const deleteEvent = async (id:number) => {
    return await EventRepo.delete(id);
}




export const deleteEventsByGroup = async (groupId: string) => {
    return await EventRepo.delete({ repeatGroupId: groupId });
}

export const updateEventsByGroup = async (groupId: string, data: Partial<IEvent>): Promise<Event[]> => {
    await EventRepo.update({ repeatGroupId: groupId }, data);
    return await EventRepo.find({ where: { repeatGroupId: groupId } });
}


