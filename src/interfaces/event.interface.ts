export interface IEvent {
    id?:number;
    type: 'jira' | 'kitchen';
    username: string;
    startDate: Date;
    endDate: Date;
    note: string;
    repeatGroupId?: string;
}