import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#12122D] backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto h-20 px-5 sm:px-8 flex items-center justify-between">

                <a href="#home" className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#A8E63D] flex items-center justify-center font-bold text-xl text-[#17153A]">
                        VP
                    </div>

                    <h1 className="text-white font-bold text-xl sm:text-2xl">
                        Vraj Patel
                    </h1>
                </a>


                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-400 hover:text-[#A8E63D] duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>


                <a
                    href="/Vraj_Patel_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:block bg-[#A8E63D] text-[#17153A] font-semibold px-7 py-3 rounded-full hover:scale-105 transition duration-300"
                >
                    Resume
                </a>

                
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden text-white text-3xl"
                >
                    {open ? <HiX /> : <HiOutlineMenuAlt3 />}
                </button>
            </div>

           
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[500px]" : "max-h-0"
                    }`}
            >
                <div className="bg-[#17153A] border-t border-white/10">
                    <nav className="flex flex-col items-center py-8 gap-7">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="text-lg text-gray-300 hover:text-[#A8E63D] transition duration-300"
                            >
                                {item.name}
                            </a>
                        ))}

                        <a
                            href="/Vraj_Patel_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-[85%] sm:w-72 bg-[#A8E63D] text-[#17153A] text-center font-semibold py-3 rounded-full hover:scale-105 transition duration-300"
                        >
                            Resume
                        </a>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default Navbar;