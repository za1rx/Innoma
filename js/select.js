const select = document.querySelector('.select')
let ul = select.querySelector('ul')
const input = document.querySelector('.input')

select.addEventListener('click', (event) => {
    ul.style.maxHeight = ul.scrollHeight + 'px';
    
    if(event.target.dataset.item){
        ul.style.maxHeight = 0         
        input.value = `${+event.target.dataset.item}`
        input.focus()
    }
})