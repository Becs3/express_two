import { RowDataPacket } from "mysql2"

export interface IMember extends RowDataPacket {
    id:number,
    name: string,
    attend: boolean,
    attend_classes: number
}

export class Member {
    public id: number = Math.random();
    public attend: boolean = false;
    public attend_classes: number = 0;

    constructor (
        public name: string
    ) {}
}

export type updateMember = Pick<IMember, "attend" | "attend_classes">