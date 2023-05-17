/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import BackIcon from "@/styles/assets/back";
import { useEffect, useContext, useCallback } from "react";
import { useSession } from '@supabase/auth-helpers-react';
import Avatar from "../Avatar";
import { UserContext } from "@/pages/Context/UserContext";

const Navbar = (): JSX.Element => {
    const { getAvatarUrl } = useContext(UserContext);
    const router = useRouter();
    const { pathname } = router;
    const session = useSession();

    const goBack = useCallback(() => {
        router.back();
    }, [router]);

    useEffect(() => {
        getAvatarUrl();
    }, [getAvatarUrl, session]);


    return (
        <>
            <nav>
                <div className="navcont">
                    <span>
                        {
                            pathname === "/" ? <h2> Stickers</h2> : <span className="back" onClick={goBack}> <BackIcon/> </span>
                        }
                    </span>

                    <span>

                        {session ? (
                            <Link href='/profile'>
                                <Avatar size={35} uid={session.user.id} />
                            </Link>
                        ) : (
                            null
                        )}
                    </span>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
