import { useState } from "react"
import { Member, updateMember } from "../models/member"
import { createMember, deleteMember, fetchMember, fetchMembers, updateAttendMember } from "../service/memberService";

export const useMember = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetchMembersHandler = async() => {
        setIsLoading(true)

        try {
            const data = await fetchMembers();
            setMembers(data);
        }catch (error) {
            setError("Problem fetching members")
        } finally {
            setIsLoading(false)
        }
    }

    const fetchMemberHandler = async(id:number) => {
        setIsLoading(true)

        try {
            return await fetchMember(id)
        }catch (error) {
            setError("Problem fetching member")
        } finally {
            setIsLoading(false)
        }
    }

    const createMemberHandler = async(payload: Member) => {
        setIsLoading(true)

        try {
            return await createMember(payload)

        }catch (error) {
            setError("Problem creating member")
        } finally {
            setIsLoading(false)
        }
    }

    const updateMemberHandler = async(id:number, payload:updateMember) => {
        setIsLoading(true)

        try {
            return await updateAttendMember(id, payload)

        }catch (error) {
            setError("Problem fetching member")
        } finally {
            setIsLoading(false)
        }
    }

    const deleteMemberHandler = async(id:number) => {
        setIsLoading(true)

        try {
            await deleteMember(id);
            const newMembers = members.filter(m => m.id !== id);
            setMembers(newMembers)
        }catch (error) {
            setError("Problem fetching")
        } finally {
            setIsLoading(false)
        }
    }

    return {
        members,
        isLoading,
        error,
        fetchMembersHandler,
        fetchMemberHandler,
        createMemberHandler,
        updateMemberHandler,
        deleteMemberHandler
    }
}