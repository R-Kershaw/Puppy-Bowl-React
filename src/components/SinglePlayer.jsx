import { useParams } from "react-router-dom";

export default function SinglePlayer() {
    const { id } = useParams();

    return (
        <div>
            <h1>Single Player</h1>
            {console.log(id)}
        </div>
    )
}