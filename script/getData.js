const getData = () => {

    const list = document.querySelector('.cross-sell__list');
    const addItemBtn = document.querySelector('.button.cross-sell__add');
  
    let stack = 4;
    count = 1;

    const render = (data) => {
        list.innerHTML = '';

        data.forEach(item => {
            // console.log(item);
            list.insertAdjacentHTML('beforeend', `
                <li>
                    <article class="cross-sell__item">
                        <img class="cross-sell__image" src="${item.photo}" alt="${item.id}">
                        <h3 class="cross-sell__title">${item.name}</h3>
                        <p class="cross-sell__price">${item.price}₽</p>
                        <button type="button" class="button button_buy cross-sell__button">Купить</button>
                    </article>
                </li>
            `)
        })
    }

    const sliceArray = (data, index) => {
        return data.slice(0,index)
    }

    const changeData = (data) => {
        const newStack = stack * count;

        render(sliceArray(data, newStack))

        if (data.length > newStack) {
            count++
        } else {
            //remove btn
            addItemBtn.style.display = 'none';
        }
    }
 
    const getGoods = () => {
        fetch("/cross-sell-dbase/dbase.json")
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Erros message')
                }

            })
            .then((data) => {
            changeData(data)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    addItemBtn.addEventListener('click', getGoods)

    getGoods()


}

getData();