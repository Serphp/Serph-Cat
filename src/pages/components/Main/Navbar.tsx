import Link from "next/link";

const Navbar = () => {
    return (
        <>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <Link href="/">Proyect Cat</Link>
        <Link href="/Profile" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Profile</Link>
        </nav>


        </>
    )
};

export default Navbar;