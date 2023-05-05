import Link from "next/link";
import { useRouter } from "next/router";
import BackIcon from "@/styles/assets/back";
import { useEffect, useState, useContext } from "react";
import { useUser, useSession } from '@supabase/auth-helpers-react'
import { supabase } from "@/pages/Superbase";
import Avatar from "../Avatar";
import { UserContext } from "@/pages/Context/UserContext";



const Navbar = () => {
    const { getAvatarUrl, avatarUrl, setAvatarUrl } = useContext(UserContext)
    //const currentUser = supabase.auth.user()
    const user = useUser()
    const router = useRouter();
    const { pathname } = router;
    const session = useSession()
    //const [avatarUrl, setAvatarUrl] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAvatarUrl()
      }, [session])


      console.log(avatarUrl)
      const BaseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;
      const avatar = `${BaseUrl}/${avatarUrl}`;

    return (
        <>
        <nav>
            <div className="navcont">
            <span>
                {
                    pathname === "/" ? <h1> Serphp </h1> : <Link href="/"> <BackIcon/> </Link>
                }
            </span>

            <span>
            {session ? (
                <Avatar url={avatarUrl} size={30}  />
      ) : (
        <p>No</p>
      )}
           
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