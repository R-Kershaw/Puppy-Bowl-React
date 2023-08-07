import { Link } from "react-router-dom";
<<<<<<< HEAD
export default function Navbar() {
    return (
        <nav>
            <Link to="/home">Home</Link>
=======

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
>>>>>>> origin/rk
            <Link to="/players">All Players</Link>
            <Link to="/newPlayer">Add Player</Link>
        </nav>
    )
}