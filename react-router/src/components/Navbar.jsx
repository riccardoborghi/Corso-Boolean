import { NavLink } from "react-router";

function Navbar() {
    const getLinkClass = ({ isActive }) =>
        isActive ? "nav-link active" : "nav-link";

    return (
        <header>
            <nav className="navbar">
                <NavLink to="/" className={getLinkClass}>
                    Home
                </NavLink>
                <NavLink to="/about" className={getLinkClass}>
                    Chi siamo
                </NavLink>
                <NavLink to="/prodotti" className={getLinkClass}>
                    Prodotti
                </NavLink>
            </nav>
        </header>
    );
}

export default Navbar;