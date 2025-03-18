import axios from "axios";
import { API_URL, handleRequest } from "./baseService";
import { Member, IMember, updateMember } from "../models/member";

export const fetchMembers = async () => {
    return await handleRequest<IMember[]>(axios.get(`${API_URL}/members`))
}

export const fetchMember = async (id:number) => {
    return await handleRequest<IMember>(axios.get(`${API_URL}/members/${id}`))
}

export const createMember = async(payload: Member) => {
    return await handleRequest<Member>(axios.post(`${API_URL}/members`, payload))
}

export const updateAttendMember = async (id: number, payload:updateMember) => {
    return await handleRequest<IMember>(axios.patch(`${API_URL}/members/${id}`, payload))
}

export const deleteMember = async (id:number) => {
    return await handleRequest(axios.delete(`${API_URL}/members/${id}`))
}