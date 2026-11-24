import { Link } from "react-router";

function Navbar() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">Chi siamo</Link> |{" "}
                <Link to="/prodotti">Prodotti</Link>
            </nav>
        </header>
    );
}

export default Navbar;