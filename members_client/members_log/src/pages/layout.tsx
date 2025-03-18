import { Link, Outlet } from "react-router"

export const Layout = () => {

    return(
        <>
        <header>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/members">members</Link></li>
            <li><Link to="/addMember">Add Member</Link></li>
            <li><Link to="/logMember">Log Members</Link></li>
            </ul>
        </header>
        <main><Outlet /></main>
        <footer></footer>
        </>
    )
}