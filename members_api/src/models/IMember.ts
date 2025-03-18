import { RowDataPacket } from "mysql2"

export interface IMember extends RowDataPacket {
    id:number,
    name: string,
    attend: boolean,
    classes_attended: number
}