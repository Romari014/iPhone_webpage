const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change')
    const title = document.querySelector('.card-details__title');
    const price = document.querySelector('.card-details__price');
    const image = document.querySelector('.card__image_item');
    const mainTitle = document.querySelector('title');


    const tabsOptions = [
        {
            name: 'Graphite',
            memory: '128',
            price: 95000,
            image: "img/iPhone-graphite.webp"
        },
        {
            name: 'Silver',
            memory: '256',
            price: 110000,
            image: "img/iPhone-silver.webp"
        },
        {
            name: 'Sierra blue',
            memory: '512',
            price: 130000,
            image: "img/iPhone-sierra_blue.webp"
        }
    ]

    const changeContent = (index) => {
        // console.log(tabsOptions[index].name);
        title.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
        price.textContent = `${tabsOptions[index].price}₽`;
        mainTitle.textContent = `iPhone13 Pro ${tabsOptions[index].name}`
        // image.textContent = `<img class="card__image_item" src=${tabsOptions[index].image} alt="iPhone12">`;
        image.setAttribute('src', tabsOptions[index].image)

    }

    const changeActive = (indexTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active')
            if (index === indexTab) {
                tab.classList.add('active')
            }
        })

        changeContent(indexTab)
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            changeActive(index)
            // tab.classList.toggle('active')
        })
    })

    changeContent(0)
}

tabsFunc();