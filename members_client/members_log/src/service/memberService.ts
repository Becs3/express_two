import axios from "axios";
import { API_URL, handleRequest } from "./baseService";
import { Member, IMember, updateMember } from "../models/member";

export const fetchMembers = async () => {
    return await handleRequest<Member[]>(axios.get(`${API_URL}/members`))
}

export const fetchMember = async (id:number) => {
    return await handleRequest<Member>(axios.get(`${API_URL}/members/${id}`))
}

export const createMember = async(payload: Member) => {
    return await handleRequest<Member>(axios.post(`${API_URL}/members`))
}

export const updateAttendMember = async (id: number, payload:updateMember) => {
    return await handleRequest<Member>(axios.patch(`${API_URL}/members/${id}`))
}

export const deleteMember = async (id:number) => {
    return await handleRequest(axios.delete(`${API_URL}/members/${id}`))
}