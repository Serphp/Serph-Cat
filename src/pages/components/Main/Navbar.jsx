import Link from "next/link";
import { useRouter } from "next/router";
import BackIcon from "@/styles/assets/back";



const Navbar = () => {

    const router = useRouter();
    const { pathname } = router;

    return (
        <>
        <nav>
            <div className="navcont">
            <span>
                {
                    pathname === "/" ? null : <Link href="/"> <BackIcon/> </Link>
                }
            </span>

            <span>
                <img src="https://i.imgur.com/pimVkwe.png" width={30} height={30}/>
            </span>
            </div>
            {/* <div className="navcont">
                <img src="https://i.imgur.com/30fKpzf.png" className="cat" alt="cat" />

                <h1> Serphp </h1>

            <div className="navbar-brand">

                <Link className="nav-item" href="/">Proyect Cat</Link>
                <Link className="nav-item" href="/Profile">Profile</Link>
            </div>

            </div> */}
    
        </nav>


        </>
    )
};

export default Navbar;