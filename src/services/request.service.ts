import { IRequest } from "../interfaces/request.interface";
import { RequestRepo } from "../repository/request.repository";



export const createRequest = async (data: IRequest) => {
    const newRequest = RequestRepo.create(data);
    return await RequestRepo.save(newRequest);
}


export const getRequests = async () => {
    return await RequestRepo.find();
}

