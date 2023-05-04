import Link from "next/link";

const Navbar = () => {
    return (
        <>
        <nav>
            <div className="navcont">

                <h1> Serphp </h1>

            <div className="navbar-brand">

                <Link className="nav-item" href="/">Proyect Cat</Link>
                <Link className="nav-item" href="/Profile">Profile</Link>
        </div>
        </div>
        </nav>


        </>
    )
};

export default Navbar;