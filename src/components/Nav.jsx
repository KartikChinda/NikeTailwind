import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"
import { hamburger } from "../assets/icons"


const Nav = () => {
    return (
        <header>
            <nav href="/" className="padding-x py-8 z-10 max-container w-100% flex justify-between items-center">
                <a>
                    <img src={headerLogo} alt="" width={120} height={29} />
                </a>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="font-bold to-gray-800">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    <img src={hamburger} alt="" className="hidden max-lg:block" height={25} width={25} />
                </div>
            </nav>
        </header>
    )
}

export default Nav