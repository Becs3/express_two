import { useState } from "react";
import { useMember } from "../hooks/useMember"
import { Member } from "../models/member";
import { useNavigate } from "react-router";

export const AddMember = () => {

    const {createMemberHandler} = useMember();
    const nav = useNavigate();

    const [member, setMember] = useState<Member>({
        id: Math.random(),
        name: "",
        attend: false,
        classes_attended: 0
    });

    const createMember = () => {
        if(member.name){
        createMemberHandler(new Member(member.name))
        }

        nav("/members")
    }

    return(
        <>
        <form onSubmit={(e) => {e.preventDefault(); createMember(); }}>
            <input type="text"
            value={member?.name}
            onChange={(e) => setMember({...member, name: e.target.value})} />
            <button type="submit">Create member</button>
        </form>
        </>
    )
}