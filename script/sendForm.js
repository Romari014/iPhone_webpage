const sendForm = () => {

    const openFormBtn = document.querySelector('.button.card-details__button_delivery');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.modal__close');
    const modalTitle = modal.querySelector('.modal__title');
    const mainTitle = document.querySelector('.card-details__title');
    const modalForm = modal.querySelector('form');
    const modalLabel = modal.querySelectorAll('.modal__label');

    openFormBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalTitle.textContent = mainTitle.textContent  
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        
    })

    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let sendMessage = {}

        modalLabel.forEach((item) => {
            const span = item.querySelector('span');
            const input = item.querySelector('input');

            // console.log(span.textContent);
            // console.log(input.value);

            sendMessage[span.textContent] =  input.value;
        })
    
    const closeModal = () => {
        setTimeout(function() {
        modal.style.display = 'none';
        },2000)
    }

    const clearForm = () => {
        modalLabel.forEach(label => {
            const input = label.querySelectorAll('input');
                input[0].value = '';
        })
    }
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => {
                clearForm();
                closeModal();
            })
            

    })


}

sendForm()