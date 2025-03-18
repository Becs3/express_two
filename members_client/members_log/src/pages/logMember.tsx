import { useEffect } from "react";
import { useMember } from "../hooks/useMember";

export const LogMember = () => {

    const {members, updateMemberHandler, fetchMembersHandler} = useMember();

    useEffect (() => {
        fetchMembersHandler();
    }, [])
    
    return(
        <>
        <div>
            {members.map((m) => (
                <div key={m.id}>
                    <p>{m.name}</p>
                    <button onClick={() => updateMemberHandler(m.id, {attend: true})}>Attended</button>
                </div>
            ))}
        </div>
        </>
    )
}