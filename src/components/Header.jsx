import "./Header.css"
import Logo from "./Logo.jsx"
import { navlinks } from "../assets/navlinks.js"

export default function Header() {
    return (
        <section className="bg-white">
        <header className="d-flex container justify-space-between">
            <Logo/>
            <ul className="d-flex">
                {navlinks.map((curLink) => {
                    const linkClass = curLink.active === true ? "nav-link active" : "nav-link";
                
                return <li key={curLink.id}><a href={curLink.path} className={linkClass}>{curLink.title}</a></li>})}
                

            </ul>
        </header>
        </section>
    )
}