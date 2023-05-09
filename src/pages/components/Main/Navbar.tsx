/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import BackIcon from "@/styles/assets/back";
import { useEffect, useContext } from "react";
import { useSession } from '@supabase/auth-helpers-react'
import Avatar from "../Avatar";
import { UserContext } from "@/pages/Context/UserContext";


const Navbar = () => {
    const { getAvatarUrl, avatarUrl } = useContext(UserContext)
    //const currentUser = supabase.auth.user()
    //const user = useUser()
    const router = useRouter();
    const { pathname } = router;
    const session = useSession()

    useEffect(() => {
        getAvatarUrl()
      }, [getAvatarUrl, session])

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
                <Avatar url={avatarUrl} size={30} uid={""}  />
      ) : (
        <img src="https://i.imgur.com/30fKpzf.png" className="cat" alt="cat" width={30} height={30} />
      )}
           
            </span>
            </div>
        </nav>


        </>
    )
};

export default Navbar;