const accordion = () => {
    const charItem = document.querySelectorAll('.characteristics__item');

    charItem.forEach((item) => {
        const charBtn = item.querySelector('.characteristics__title');
        const charDsc = item.querySelector('.characteristics__description');

        charBtn.classList.remove('active');

        charBtn.addEventListener('click', () => {
            const heightContent = charDsc.style.height;

            if (charDsc.classList.contains('open')) {
                charDsc.style.height = '';
            } else {
                charDsc.style.height = charDsc.scrollHeight + 'px';
            }
            charBtn.classList.toggle('active');
            charDsc.classList.toggle('open');

        })
    })


}

accordion()