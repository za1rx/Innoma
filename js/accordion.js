const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach(item => {
    const button = item.querySelector('.accordion__header .accordion__arrow-btn');
    const content = item.querySelector('.accordion__content');

    item.addEventListener('click', () => {
        // event.stopPropagation(); // Предотвращает всплытие клика

        // Закрываем все элементы
        document.querySelectorAll('.accordion__content').forEach(el => {
            el.style.maxHeight = null;
        });

        document.querySelectorAll('.accordion__arrow-btn').forEach(btn => {
            btn.classList.remove('accordion__arrow-btn--active');
        });

        // Открываем или закрываем текущий элемент
        if (!content.style.maxHeight) {
            content.style.maxHeight = content.scrollHeight + 'px';
            button.classList.add('accordion__arrow-btn--active');
        } else {
            content.style.maxHeight = null;
            button.classList.remove('accordion__arrow-btn--active');
        }
    });
});
