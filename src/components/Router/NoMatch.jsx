import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <div>
            <h1>Not a good page!</h1>
            <p>
                <Link to="/">Go back home</Link>
            </p>
        </div>
    );
}

export default NoMatch;