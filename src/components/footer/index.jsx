import ss from "./style.module.css"
import github from "../../assets/links/github.svg"
import insta from "../../assets/links/instagram.svg"
import codewars from "../../assets/links/codewars.svg"
import { useSelector } from "react-redux"
import { dark, light } from "../themer"

export const Footer = () => {
    const { theme } = useSelector(state => state.theme)
    const socialLinks = [
        { icon: github, href: "https://github.com/marc1k3y" },
        { icon: insta, href: "https://www.instagram.com/marc1k3y/" },
        { icon: codewars, href: "https://www.codewars.com/users/marcikey" },
    ]
    return (
        <div className={ss.wrapper}
        style={{backgroundColor: theme === "light" ? light.footerBack : dark.footerBack}}>
            {socialLinks.map(link =>
                <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    <img src={link.icon} alt={link.href} />
                </a>)}
        </div>
    )
}