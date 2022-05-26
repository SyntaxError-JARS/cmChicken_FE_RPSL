import { Link } from "react-router-dom";

/*
using <nav> to (property) JSX.intrinsicElemnets.nav

    Link to need "/"
    Route path doesn't need "/"

    Link is in line element, don't block its section , 
    can all be smack DAB next to another.

*/

export default function NavBar() {

    return (
        <nav>
            <Link to="/">Home</Link>
            <span>       </span>
            <Link to="/login">Login</Link>
            <span>       </span>
            <Link to="/register">Sign Up</Link>
            <span>       </span>
            <Link to="/update">Update profile</Link>
            <span>       </span>
            <Link to="/delete">Delete account</Link>
        </nav>
    )

}