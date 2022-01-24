const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a');
    const linkCharacter = document.querySelector('.card-details__link-characteristics');

    const newArray = [...links, linkCharacter]

    seamless.polyfill();

    newArray.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const id = item.getAttribute('href').substring(1);
            const section = document.getElementById(id)

            if (section) {
                seamless.elementScrollIntoView(section, { //seamless.elementScrollIntoView -> seamless-scroll-polyfill
                    behavior: "smooth",
                    block: 'start'
                })
            } else {
                seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }

        })
    })


}

scrollFunc()

