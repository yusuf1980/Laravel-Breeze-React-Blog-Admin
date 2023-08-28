import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    href={route("dashboard")}
                                    className="nav-link"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("login")}
                                    className="nav-link"
                                >
                                    Log in
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={route("register")}
                                    className="nav-link"
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
            </div>
        </>
    );
}
