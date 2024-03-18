const hope = document.querySelector("#hope")
const item = document.querySelectorAll(".item")
console.log(item);

for (let i = 0; i < item.length; i++) {
    let btnPlus = item[i].children[5].children[0]
    let btnmoins = item[i].children[5].children[2]

    let quantity = item[i].children[5].children[1]
    console.log(quantity.innerHTML);

    let qty = parseInt(quantity.innerHTML)
    console.log(qty);
    btnPlus.addEventListener('click', () => {
        qty++;
        i = (i < 10) ? '0' + i : i;
        quantity.innerHTML = qty;
    })
    btnmoins.addEventListener('click', () => {

        if (qty > 0) {
            qty--;
            i = (i > 10) ? '0' + i : i;
            quantity.innerHTML = qty;
        }
    })
    let price = item[i].children[3]
    let unitaire = item[i].children[7]
    let PU = parseInt(price.innerHTML)
    console.log(PU);
    btnPlus.addEventListener('click', () => {
        unitaire.innerHTML = qty * PU;
    })
    btnmoins.addEventListener('click', () => {
        unitaire.innerHTML = qty * PU;
    })

    let btnlike = document.querySelector("#btnlike")
    btnlike = item[i].children[9].children[0]
    btnlike.addEventListener('click', function () {
        btnlike.classList.toggle("clicked");
    })

    let btndelete = document.querySelector('.btndelete')
    btndelete = item[i].children[9].children[1]
    btndelete.addEventListener('click',function() {
        item[i].remove();
    })

  

}
   
















