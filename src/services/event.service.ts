
import { IEvent } from "../interfaces/event.interface";
import { EventRepo } from "../repository/event.repository";

export const createEvent = async (data: IEvent) => {
    const newEvent = EventRepo.create(data);
    return await EventRepo.save(newEvent);
}

export const getEventsByUsername = async () => {
    return await EventRepo.find();
}

export const updateEvent = async (id: number, data: Partial<IEvent>) => {
    await EventRepo.update(id, data);
    return await EventRepo.findOneBy({ id });
}

export const deleteEvent = async (id:number) => {
    return await EventRepo.delete(id);
}




export const deleteEventsByGroup = async (groupId: string) => {
    return await EventRepo.delete({ repeatGroupId: groupId });
}

export const updateEventsByGroup = async (groupId: string, data: Partial<IEvent>) => {
    await EventRepo.update({ repeatGroupId: groupId }, data);
    return await EventRepo.find({ where: { repeatGroupId: groupId } });
}


