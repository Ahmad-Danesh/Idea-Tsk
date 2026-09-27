// import { NavLink } from "react-router-dom";

// export default function Navigation() {
//     return(
//         <nav>
//             <ul>
//                 <li><NavLink to="/">Home</NavLink></li>
//                 <li><NavLink to="/contact">Contact</NavLink></li>
//             </ul>
//         </nav>
//     );
// }
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="nav-logo">
                <div className="logo-box">R</div>
                <span>ReactSpace</span>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}