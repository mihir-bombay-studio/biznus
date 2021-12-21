
const btns = document.querySelectorAll('.cat-btn');
const storeProducts = document.querySelectorAll('.item-list');

for ( i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        // console.log(filter)
        storeProducts.forEach((product) => {
            if (filter == "Shoes") {
                product.style.display = "block"
            } else {
                if (product.classList.contains(filter)) {
                    product.style.display = "block"

                } else {
                    product.style.display = "none"
                }
            }

        
        })
})
}
