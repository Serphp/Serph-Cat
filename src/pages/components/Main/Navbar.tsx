/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import BackIcon from "@/styles/assets/back";
import { useEffect, useContext, useCallback } from "react";
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Avatar from "../Avatar";
import { UserContext } from "@/pages/Context/UserContext";

const Navbar = (): JSX.Element => {

    const supabase = useSupabaseClient();
    //console.log(supabase)
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
                    <div className="search-container">
                    <div className="">
                        {
                            pathname === "/" ? <>
                            <svg className="back" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.756 3.403a1.528 1.528 0 0 0-1.593.375l-1.585 1.584a10.453 10.453 0 0 0-11.156 0L4.838 3.778a1.528 1.528 0 0 0-1.594-.375 1.49 1.49 0 0 0-.994 1.406v7.94c0 4.604 3.76 8.4 8.588 8.935a.377.377 0 0 0 .412-.375v-3l-1.256-1.256a.778.778 0 0 1-.038-1.069.76.76 0 0 1 1.078-.019l.966.975.966-.975a.76.76 0 0 1 1.078.02.778.778 0 0 1-.038 1.068l-1.256 1.256v3a.373.373 0 0 0 .412.375c4.829-.534 8.588-4.331 8.588-8.934V4.81a1.49 1.49 0 0 0-.994-1.407ZM7.875 14.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.875-6a.75.75 0 0 1-1.5 0V6.469a.75.75 0 0 1 1.5 0v1.78Zm3 0a.75.75 0 1 1-1.5 0V6a.75.75 0 1 1 1.5 0v2.25Zm1.5 0V6.469a.75.75 0 1 1 1.5 0v1.78a.75.75 0 1 1-1.5 0Zm1.875 6a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Z"></path>
                            </svg>
                            </> : <span className="back" onClick={goBack}> <BackIcon/> </span>
                        }
                    </div>
                    {/* <input type="text" placeholder="Buscar..." /> */}
                
                    {session ? (
                        <div className="search-user">
                        <Link className="signout" href='/Profile'>
                            <svg className="back" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m13.414 10.586.48.486.465.485.46.492c3.457 3.764 5.471 7.218 4.606 8.083-.4.4-1.356.184-2.64-.507a9.006 9.006 0 0 1-10.403-.592l2.98-2.98a2 2 0 1 0-1.45-1.57l.035.156-2.979 2.98a9.007 9.007 0 0 1-.592-10.405c-.692-1.283-.908-2.238-.508-2.64.977-.975 5.25 1.716 9.546 6.01v.002Zm6.364-6.364a2 2 0 0 1-.164 2.976 9.016 9.016 0 0 1 .607 8.47c-1.189-1.954-3.07-4.174-5.393-6.496l-.537-.532c-2.128-2.08-4.156-3.764-5.958-4.86a9.015 9.015 0 0 1 8.471.607 2 2 0 0 1 2.974-.165Z"></path>
                            </svg>
                        </Link>
                        <Avatar size={50} uid={session.user.id} />
                        <span className="signout" onClick={() => supabase.auth.signOut()}>
                        <svg className="back" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.284 12.534-3.937 3.938a.778.778 0 0 1-.534.215.75.75 0 0 1-.75-.75V12.75H2.25a.75.75 0 1 1 0-1.5h5.813V8.062a.75.75 0 0 1 .9-.733.769.769 0 0 1 .384.2l3.937 3.937a.76.76 0 0 1 0 1.068ZM18 3h-5.25a.75.75 0 1 0 0 1.5H18v15h-5.25a.75.75 0 1 0 0 1.5H18a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 18 3Z"></path>
                        </svg>
                        </span>
                        </div>
                    ) : (
                        null
                    )}
                    
                </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
