import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/players">All Players</Link>
            <Link to="/newPlayer">Add Player</Link>
        </nav>
    )
}