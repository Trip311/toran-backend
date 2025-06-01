import { IRequest } from "../interfaces/request.interface";
import { RequestRepo } from "../repository/request.repository";
import { Request } from "../entity/requests.entity";
import { RequestStatus } from "../interfaces/request.interface";



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

    if ('toUser' in data) request.toUser = data.toUser;
    if ('toDate' in data) request.toDate = data.toDate;

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




export const fetchRequestsByStatus = async (status: string): Promise<Request[]> => {
    return await RequestRepo.find({ where: { status: status as RequestStatus } });
};

export const fetchRequestsByUsername = async (username: string): Promise<Request[]> => {
    return await RequestRepo.find({ where: { fromUser: username } });
};

export const fetchRequestsByUsernameAndStatus = async (username: string, status: string): Promise<Request[]> => {
    return await RequestRepo.find({ where: { fromUser: username, status: status as RequestStatus } });
};

export const updateRequestStatus = async (id: number, status: RequestStatus): Promise<Request | null> => {
    const request = await RequestRepo.findOneBy({ id });
    if (!request) return null;
    request.status = status;
    return await RequestRepo.save(request);
};