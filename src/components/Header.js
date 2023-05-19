import '../App.css';

function Header() {
    return (
        <section id="header">
            {/* <nav class="flex items-center justify-between flex-wrap bg-[#37306B] p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <span class="font-semibold text-xl tracking-tight"> <a href="/"> Christopher Cousillas </a></span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <a href="/about" class=" float-right block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            About
                        </a>
                        <a href="/projects" class="float-right block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Projects
                        </a>
                        <a href="/conact" class="float-right block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>
            </nav> */}
            <nav className="nav-header">
                <div className="header-content">
                    <ul className="links">
                        <li><i className="float-left my-1 mr-1 fa-solid fa-house"></i> </li>
                        <li><a className="font-semibold float-left mx-1" href="/">Christopher</a> </li>
                        <li><a className="float-right mx-3 hover:text-black" href="/contact">Contact</a></li>
                        <li><a className="float-right mx-3 hover:text-black" href="/projects">Projects</a></li>
                        <li><a className="float-right mx-3 hover:text-black" href="/about">About</a></li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}

export default Header;
