
function countQuantity() {
    
    const items = document.querySelectorAll('.item');
    const quantity = items.length;
    console.log(`У списку ${quantity} категорій`);
    let i = 0;
    
    while (i < quantity) {
        
        let item = items[i];
        const elems = item.querySelectorAll('ul li');
        const headings = document.querySelectorAll('h2');
        let heading = headings[i].textContent;
        
        console.log(`категорія : ${heading}`);
        
        console.log(`кількість елементів : ${elems.length}`);
        i++;
    }
}

countQuantity();