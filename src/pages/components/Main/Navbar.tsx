/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import BackIcon from "@/styles/assets/back";
import { useEffect, useContext, useCallback } from "react";
import { useSession } from '@supabase/auth-helpers-react'
import Avatar from "../Avatar";
import { UserContext } from "@/pages/Context/UserContext";

const Navbar = () => {
    const { getAvatarUrl } = useContext(UserContext)
    const router = useRouter();
    const { pathname } = router;
    const session = useSession()

    const goBack = useCallback(() => {
        router.back();
        }, [router]);

    useEffect(() => {
        getAvatarUrl()
      }, [getAvatarUrl, session])

    return (
        <>
        <nav>
            <div className="navcont">
            <span>
                {
                    pathname === "/" ? <h1> Serphp </h1> : <button onClick={goBack}> <BackIcon/> </button>
                }
            </span>

            <span>
                {session ? (
                <Link href='/profile'>
                <Avatar size={35} uid={session.user.id} />
                </Link>
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