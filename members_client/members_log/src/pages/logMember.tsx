import { ChangeEvent, useEffect, useState } from "react";
import { useMember } from "../hooks/useMember";
import { updateMember } from "../models/member";

export const LogMember = () => {

    const {members, isLoading, error, updateMemberHandler, fetchMembersHandler} = useMember();
    const [attendance, setAttendance] = useState<{ [key: number]: boolean }>({});

    useEffect (() => {
        fetchMembersHandler();
    }, [])
    

    const handleChange = (e: ChangeEvent<HTMLInputElement>, id:number) => {

        const isChecked = e.target.checked;

        setAttendance((prevState) => ({
            ...prevState,
            [id]: isChecked,
        }));

        const updated : updateMember = {
            attend: isChecked,
            attend_classes: isChecked? 1 : 0 
        }
        
        console.log(updated)
        updateMemberHandler(id, updated)

    };

    const handleSubmit = () => {
        console.log("saved")
    }

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
            {members.map((m) => (
                <div key={m.id}>
                    <p>{m.name}</p>
                    <input type="checkbox"
                    checked={attendance[m.id] || false}
                    onChange={(e) => handleChange(e, m.id)}
                     /> Attended
                </div>
            ))}
            <button type="submit">Save</button>
            </form>
        </div>
        </>
    )
}