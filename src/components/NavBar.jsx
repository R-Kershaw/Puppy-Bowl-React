import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/players">All Players</Link>
            <Link to="/newPlayer">Add Player</Link>
        </nav>
    )
}