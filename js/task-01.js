
    const itemsEl = document.querySelectorAll('.item');
    const quantity = itemsEl.length;
    console.log(`У списку ${quantity} категорій`);
    

    
    itemsEl.forEach(item => {
        const headings = item.querySelector('h2');
        const elems = item.querySelectorAll('.item li');
        console.log(`категорія : ${headings.textContent}`);
        console.log(`кількість елементів : ${elems.length}`);
    });