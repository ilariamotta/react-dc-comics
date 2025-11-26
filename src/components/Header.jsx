import "./Header.css"
import Logo from "./Logo.jsx"

export default function Header() {
    return (
        <section className="bg-white">
        <header className="d-flex container justify-space-between">
            <Logo/>
            <ul className="nav-link">
                <li><a href="" className="active">characters</a></li>

            </ul>
        </header>
        </section>
    )
}