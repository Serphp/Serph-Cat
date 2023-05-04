import Link from "next/link";



const Navbar = () => {

if (typeof document !== 'undefined') {
    const navbarfixed = document.querySelector('.navcont');
    const navbarOffsetTop = navbarfixed.offsetTop;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY >= navbarOffsetTop) {
        navbarfixed.classList.add('.fixed');
        } else {
        navbarfixed.classList.remove('.fixed');
        }
        });
    }


    return (
        <>
        <nav >
   
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