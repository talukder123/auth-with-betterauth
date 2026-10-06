'use client';


import { useEffect, useState } from "react";
import { Link, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import baseURL from "@/services/baseURL";


const NavbarSection = ({categories}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [category, setCategories] = useState([]);


    const router = useRouter();

    const { data: session } = authClient.useSession();

    const handleSignOut = async () => {

        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/sign-in");
                },
            },
        });
    }
    console.log(session);

    // useEffect(()=>{
    //     fetch(`${baseURL}/api/categories`)
    //     .then(res => res.json())
    //     .then(data => setCategories(data))
    //     .catch(err => console.log(err))
    // }, [])

    console.log(categories);


    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="flex items-center gap-3">

                        <p className="font-bold">ACME</p>
                    </div>
                </div>
                <ul className="hidden items-center gap-4 md:flex">
                    <li>
                        <Link href="#">Features</Link>
                    </li>
                    <li>
                        <Link href="#" className="font-medium text-accent" aria-current="page">
                            Dashboard
                        </Link>
                    </li>
                    {
                        session?.user && <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                    }
                </ul>
                <div className="hidden items-center gap-4 md:flex">
                    {session?.user ? (
                        <>
                            <Button onClick={handleSignOut}>Log-out</Button>
                        </>
                    ) : (
                        <>
                            <Link href="/sign-in" className="block py-2">
                                Login
                            </Link>

                            <Link href="/sign-up">
                                <Button>Sign Up</Button>
                            </Link>
                        </>
                    )}
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        <li>
                            <Link href="#" className="block py-2">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 font-medium text-accent">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile" className="block py-2">
                                Profile
                            </Link>
                        </li>
                        <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                            {
                                session?.user ? <>
                                    <Button onClick={handleSignOut}>Log-out</Button>
                                </> : <><Link href="/sign-in" className="block py-2">
                                    Login
                                </Link>
                                    <Link href="/sign-up">
                                        <Button>Sign Up</Button>
                                </Link></>
                            }
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavbarSection;