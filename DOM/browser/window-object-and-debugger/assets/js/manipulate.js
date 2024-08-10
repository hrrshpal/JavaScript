export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = "Harsh's Portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    document.body.children[0].children[0].innerText = "I am Harsh Pal"
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    let about = document.getElementById("about-me")
    about.children[1].innerText = "Hi, I'm Harsh Pal, a passionate and motivated Software Engineer at the beginning of my professional journey. With a strong foundation in coding and problem-solving, I'm eager to apply my skills to real-world challenges."
    about.children[2].innerText = "My focus is on developing efficient and scalable software solutions, and I enjoy exploring new technologies and improving my craft. As a fresher, I'm excited to contribute to innovative projects and grow alongside industry professionals."

}
