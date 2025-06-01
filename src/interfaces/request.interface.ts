


export type RequestStatus = 'pending' | 'waitingforuser' | 'waitingforadmin';


export interface IRequest {
  id?: number;
  fromUser: string;
  fromDate: string;
  toUser?: string;
  toDate?: string;
  shiftType: 'jira' | 'kitchen';
  reason: string;
  status: RequestStatus;
}