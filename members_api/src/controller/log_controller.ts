import { Request, Response } from "express"
import {db} from "../config/db"
import {logError} from "../utilities/logError"

export const getMembers = async (req: Request, res:Response) => {
    try {
    const sql = `SELECT * FROM members`
    const [members] = await db.query(sql)
    res.json(members) 
}
    catch (error)
    {
        console.log(error)
        res.status(500).json({error: logError(error)})
    }
}

export const getMemberById = async( req: Request, res: Response) => {

    try{
        const sql = `
        SELECT * from members
        where id = ?
        `
        const [member] = await db.query(sql, [req.params.id])
        res.json(member)
    } catch (error) {
        res.status(500).json({error: logError})
    }
}

export const createMember = async(req: Request, res: Response) => {
    const [name] = req.body;

    if(name === undefined) {
        res.status(500).json({message: "Required fields are missing", required_fields: ["name"]})
        return;
    }

    try {
        const sql = `
        INSERT INTO members (name)
        VALUES(?)
        `
        const result = await db.query(sql, [name])
        res.json(result)
    } catch (error) {
        res.status(500).json({error: logError})
    }
}

export const attendMember = async ( req: Request, res: Response) => {

    const {attend} = req.body
    const {id} = req.params;

    if(attend === undefined) {
        res.status(500).json({message: "content is required"})
    }

    try {
    const sql = `
    UPDATE members
    SET attend = ?
    WHERE id = ? 
    `
    const result = await db.query(sql, [attend, id])
    res.json(result)
    } catch {
        res.status(500).json({error: logError})
    }
}

export const deleteMember = async(req: Request, res: Response) => {

const {id} = req.params

try {
    const sql = `
    DELETE from members
    WHERE id = ?
    `
    const result = await db.query(sql, [id])
    res.json(result)

} catch {
    res.status(500).json({error: logError})
}
}