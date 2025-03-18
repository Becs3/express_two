import { RowDataPacket } from "mysql2"

export interface IMember extends RowDataPacket {
    id:number,
    name: string,
    attend: boolean,
    classes_attended: number
}

export class Member {
    public id: number = Math.random();
    public attend: boolean = false;
    public classes_attended: number = 0;

    constructor (
        public name: string
    ) {}
}

export type updateMember = Pick<IMember, "attend">