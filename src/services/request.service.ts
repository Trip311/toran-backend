import { IRequest } from "../interfaces/request.interface";
import { RequestRepo } from "../repository/request.repository";
import { Request } from "../entity/requests.entity";



export const createRequest = async (data: IRequest): Promise<Request> => {
    const newRequest = RequestRepo.create(data);
    return await RequestRepo.save(newRequest);
}


export const getRequests = async (): Promise<Request[]> => {
    return await RequestRepo.find();
}


export const deleteRequest = async (id:number) => {
    return await RequestRepo.delete(id);
}
