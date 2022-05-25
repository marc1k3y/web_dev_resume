import React, {useState} from "react"
import ss from "./style.module.css"

export const Info = () => {
    const [page, setPage] = useState(0)

    const titles = [
        "About", "Experience", "Projects"
    ]

    const posts = [
        "Hello. My name is Mark. I'm Fullstack Web Developer. " +
        "It so happened that my hobby coincided with work. " +
        "I enjoy building web applications from start to finish.",
        "My development experience is over 3 years. " +
        "Experience in commercial development in a team of 1.5 years. " +
        "My main stack MERN.",
        "I used to work as a barista. Therefore, I wrote a " +
        "project that should unite all establishments that work on pre-order. " +
        "In Hurry Network, both a business and a client can independently register. " +
        "The purpose of the project is to relieve the burden on the staff taking orders by phone.",
    ]

    function nextPage() {
        const maxPage = titles.length - 1
        page === maxPage ? setPage(0) : setPage(page + 1)
    }

    function backPage() {
        const maxPage = titles.length - 1
        page === 0 ? setPage(maxPage) : setPage(page - 1)
    }
    return (
        <div className={ss.wrapper}>
            <div className={ss.header}>
                <button onClick={backPage}>back</button>
                <div className={ss.title}>
                    {titles[page]}
                </div>
                <button onClick={nextPage}>next</button>
            </div>

            <div className={ss.info}>
                {posts[page]}
            </div>
        </div>
    )
}