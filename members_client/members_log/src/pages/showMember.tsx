import { useEffect } from "react";
import { useMember } from "../hooks/useMember";

export const ShowMember = () => {

    const {members, isLoading, error, fetchMembersHandler, deleteMemberHandler} = useMember();

    useEffect (() => {
        fetchMembersHandler();
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return(
        <>
        <div>
            {members.map((m) => (
                <div key={m.id}>
                    <p>{m.name}</p>
                    <p>{m.classes_attended}</p>
                    <button onClick={() => deleteMemberHandler(m.id)}>Delete member</button>
                </div>
            ))}
        </div>
        </>
    )
}