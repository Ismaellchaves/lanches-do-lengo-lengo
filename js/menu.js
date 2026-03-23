// Getting from HTML
const menu = document.querySelector('#showMenu')
const promotions = document.querySelector('#showPromotions')

// Buttons show menu
const showAll = document.querySelector('#showAll')
const showSnacks = document.querySelector('#showSnacks')
const showPortions = document.querySelector('#showPortions') // Batatas Fritas (type 3)
const showPasteis = document.querySelector('#showPasteis') // Pastéis (type 5)
const showDrinks = document.querySelector('#showDrinks')

// Items
let items

// Functions
const clearItems = type => {
    items = ''

    if (type === 'normal')
        menu.innerHTML = ''
    else
        promotions.innerHTML = ''
}

const removeClasses = () => {
    showAll.classList.remove('active')
    showSnacks.classList.remove('active')
    showPortions.classList.remove('active')
    if (showPasteis) showPasteis.classList.remove('active')
    showDrinks.classList.remove('active')
}

const checkIfHaveItem = items => {
    if (items === '')
        menu.innerHTML = '<p>Nenhum produto encontrado!</p>'
    else
        menu.innerHTML = items
}

const addItemToArray = prod => {
    let price = prod.price.toFixed(2).toString().replace('.', ',')

    items +=
        `<div class="card">
            <div>
                <div class="cardImg">
                    <img src="${prod.img}" alt="Imagem de um(a) ${prod.name}">
                </div>
                <h4>${prod.name}</h4>
                <p>${prod.description}</p>
            </div>
            <div>
                <p class="price">R$ <span>${price}</span></p>
                <button class="btn" onclick="addToCart(${prod.id})">
                    <span class="iconify-inline" data-icon="mdi:cart-plus"></span> Adicionar
                </button>
            </div>
        </div>`
}

const showProducts = type => {
    clearItems('normal')

    if (type === 0) {
        // Mostrar todos os produtos
        products.forEach(prod => {
            if (prod.lastPrice === 0)
                addItemToArray(prod)
        })
    } else {
        // Filtrar por tipo
        products.forEach(prod => {
            if (prod.type === type && prod.lastPrice === 0)
                addItemToArray(prod)
        })
    }

    checkIfHaveItem(items)
    removeClasses()

    if (type === 0)
        showAll.classList.add('active')
    else if (type === 1)
        showSnacks.classList.add('active')
    else if (type === 3)
        showPortions.classList.add('active')
    else if (type === 5)
        showPasteis.classList.add('active')
    else if (type === 4)
        showDrinks.classList.add('active')
}

const allPromotions = () => {
    clearItems('promotions')

    products.forEach(prod => {
        if (prod.lastPrice && prod.lastPrice != 0) {
            let price = prod.price.toFixed(2).toString().replace('.', ',')
            let lastPrice = prod.lastPrice.toFixed(2).toString().replace('.', ',')

            items +=
            `<div class="card">
                <div>
                    <div class="cardImg">
                        <img src="${prod.img}" alt="Imagem de um(a) ${prod.name}">
                    </div>
                    <h4>${prod.name}</h4>
                    <p>${prod.description}</p>
                </div>
                <div>
                    <p class="lastPrice">R$ <span>${lastPrice}</span></p>
                    <p class="price">R$ <span>${price}</span></p>
                    <button class="btn" onclick="addToCart(${prod.id})">
                        <span class="iconify-inline" data-icon="mdi:cart-plus"></span> Adicionar
                    </button>
                </div>
            </div>`
        }
    })

    if (items === '')
        promotions.innerHTML = '<p>Nenhuma promoção hoje, tente novamente amanhã! =(</p>'
    else
        promotions.innerHTML = items
}

// Capturing button clicks
if (showAll) showAll.addEventListener('click', function () { showProducts(0) })
if (showSnacks) showSnacks.addEventListener('click', function () { showProducts(1) })
if (showPortions) showPortions.addEventListener('click', function () { showProducts(3) }) // Batatas Fritas
if (showPasteis) showPasteis.addEventListener('click', function () { showProducts(5) }) // Pastéis
if (showDrinks) showDrinks.addEventListener('click', function () { showProducts(4) })

// Verificar no console se os botões foram encontrados
console.log('Botões encontrados:')
console.log('showPortions:', showPortions)
console.log('showPasteis:', showPasteis)

// Inicializar
showProducts(0)
allPromotions()