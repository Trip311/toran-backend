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

export const updateRequest = async (id: number, data: Partial<Pick<IRequest, 'toUser' | 'toDate'>>): Promise<Request | null> => {
    const request = await RequestRepo.findOneBy({ id });
    if (!request) return null;

    request.toUser = data.toUser ?? request.toUser;
    request.toDate = data.toDate ?? request.toDate;

    return await RequestRepo.save(request);
};

// ...existing code...

export const fetchEmptyRequests = async (): Promise<Request[]> => {
    return await RequestRepo.find({
        where: {
            toUser: null,
            toDate: null,
        },
    });
};