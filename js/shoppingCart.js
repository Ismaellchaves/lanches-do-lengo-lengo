// Getting from HTML
const showItems = document.querySelector('#showItems')
const showAllItemsValue = document.querySelector('#showAllItemsValue')
const showDelivery = document.querySelector('#showDelivery')
const showDiscount = document.querySelector('#showDiscount')
const showTotal = document.querySelector('#showTotal')
const inputPromotionCode = document.querySelector('#promotionCode')
const btnAddPromotionCode = document.querySelector('#addPromotionCode')
const btnWantDelivery = document.querySelector('#wantDelivery')
const btnDontWantDelivery = document.querySelector('#dontWantDelivery')
const btnGenerateOrder = document.querySelector('#generateOrder')

// WhatsApp number
const WHATSAPP_NUMBER = '5588994907920'

// Helper function to get correct image path
const getImagePath = (imgPath) => {
    if (imgPath.startsWith('http') || imgPath.startsWith('https')) {
        return imgPath;
    }
    
    const currentPath = window.location.pathname;
    if (currentPath.includes('/pages/') || currentPath.includes('/html/') || currentPath.includes('/cart.html')) {
        return '../' + imgPath;
    }
    
    return imgPath;
}

// Get
const getCart = () => JSON.parse(localStorage.getItem('cart')) || []

// Set
const setCart = cartData => localStorage.setItem('cart', JSON.stringify(cartData))

// Items
let cart
let itemsToShow
let allItemsValue
let deliveryValue = 0
let discountValue = 0
const promotionCode = 'lengolengo5%'

// Functions
const generateCart = () => {
    const cartItems = getCart()
    cart = []
    allItemsValue = 0

    cartItems.forEach(prod => {
        const item = products.find(element => element.id === prod.id)
        if (item) {
            item.qtd = prod.qtd
            allItemsValue += item.price * item.qtd
            cart.push(item)
        }
    })
    return cart
}

const addItemToItemsToShow = prod => {
    const price = (prod.price * prod.qtd).toFixed(2).toString().replace('.', ',')
    const imagePath = getImagePath(prod.img);
    
    itemsToShow += `
    <div class="item">
        <img src="${imagePath}" alt="Imagem de um(a) ${prod.name}" onerror="this.src='https://via.placeholder.com/120x120?text=${prod.name.charAt(0)}'">
        <div>
            <p class="title">${prod.name}</p>
            <p>${prod.description}</p>
            <div class="bottom">
                <div class="counter">
                    <button onclick="remItem(${prod.id})">-</button>
                    <input type="text" value="${prod.qtd}" disabled>
                    <button onclick="addItem(${prod.id})">+</button>
                </div>
                <p class="price">R$ <span>${price}</span></p>
            </div>
        </div>
    </div>
    <hr>`
}

const addItem = id => {
    const cartItems = getCart()
    const newCartItems = []

    cartItems.forEach(item => {
        if (item.id === id)
            newCartItems.push({ id: item.id, qtd: item.qtd + 1 })
        else
            newCartItems.push({ id: item.id, qtd: item.qtd })
    })

    setCart(newCartItems)
    init()
}

const remItem = id => {
    const cartItems = getCart()
    const newCartItems = []

    cartItems.forEach(item => {
        if (item.id === id && item.qtd > 1)
            newCartItems.push({ id: item.id, qtd: item.qtd - 1 })
        else if (item.id === id && item.qtd <= 1) {
            itemRemovedNotification.showToast()
        } else
            newCartItems.push({ id: item.id, qtd: item.qtd })
    })

    setCart(newCartItems)
    init()
}

const chooseDelivery = option => {
    if (option) {
        btnWantDelivery.classList.add('active')
        btnDontWantDelivery.classList.remove('active')
        deliveryValue = 0
    } else {
        btnWantDelivery.classList.remove('active')
        btnDontWantDelivery.classList.add('active')
        deliveryValue = 0
    }
    init()
}

const addDiscount = () => {
    const code = inputPromotionCode.value.trim().toLowerCase()
    if (code === promotionCode) {
        discountValue = 5
        appliedCode.showToast()
        init()
    } else codeNotFound.showToast()
}

const init = () => {
    const generatedCart = generateCart()
    generatedCart.length > 0 && generatedCart.sort((a, b) => a.type < b.type ? -1 : a.type > b.type ? 1 : 0)

    itemsToShow = ''
    showItems.innerHTML = ''

    if (generatedCart.length > 0)
        generatedCart.forEach(data => addItemToItemsToShow(data));
    else
        itemsToShow = '<p>Você ainda não adicionou itens no carrinho.</p>'

    showOnPage()
}

const showOnPage = () => {
    showItems.innerHTML = itemsToShow

    const totalValue = allItemsValue + deliveryValue
    const discountAmount = (totalValue * discountValue) / 100
    const finalTotal = totalValue - discountAmount
    
    showAllItemsValue.innerHTML = 'R$ ' + allItemsValue.toFixed(2).toString().replace('.', ',')
    showDelivery.innerHTML = '+ R$ ' + deliveryValue.toFixed(2).toString().replace('.', ',')
    showDiscount.innerHTML = '- R$ ' + discountAmount.toFixed(2).toString().replace('.', ',')
    showTotal.innerHTML = 'R$ ' + finalTotal.toFixed(2).toString().replace('.', ',')
}

// Função para coletar dados do cliente
const collectCustomerData = () => {
    return new Promise((resolve) => {
        const isDelivery = btnWantDelivery.classList.contains('active')
        
        const modal = document.createElement('div')
        modal.id = 'customerModal'
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `
        
        const modalContent = document.createElement('div')
        modalContent.style.cssText = `
            background: white;
            border-radius: 20px;
            padding: 30px;
            max-width: 500px;
            width: 90%;
            max-height: 85vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            position: relative;
        `
        
        const style = document.createElement('style')
        style.textContent = `
            .modal-input, .modal-select {
                width: 100%;
                padding: 12px 15px;
                margin: 8px 0 20px 0;
                border: 2px solid #e0e0e0;
                border-radius: 10px;
                font-size: 16px;
                font-family: 'Montserrat', sans-serif;
                box-sizing: border-box;
            }
            .modal-input:focus, .modal-select:focus {
                outline: none;
                border-color: #FF7F0A;
            }
            .modal-label {
                font-weight: 600;
                color: #333;
                margin-top: 10px;
                display: block;
                font-size: 14px;
            }
            .modal-title {
                font-size: 24px;
                font-weight: 800;
                color: #A90E0E;
                text-align: center;
                margin-bottom: 20px;
            }
            .modal-buttons {
                display: flex;
                gap: 15px;
                margin-top: 25px;
            }
            .modal-btn {
                flex: 1;
                padding: 12px;
                border: none;
                border-radius: 10px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
                font-family: 'Montserrat', sans-serif;
            }
            .modal-btn-primary {
                background: #FF7F0A;
                color: white;
            }
            .modal-btn-primary:hover {
                background: #e66f00;
            }
            .modal-btn-secondary {
                background: #e0e0e0;
                color: #666;
            }
            .modal-btn-secondary:hover {
                background: #d0d0d0;
            }
            .payment-options {
                display: flex;
                gap: 10px;
                margin: 15px 0;
                flex-wrap: wrap;
            }
            .payment-option {
                flex: 1;
                padding: 10px;
                border: 2px solid #e0e0e0;
                border-radius: 10px;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s;
                background: white;
                font-size: 14px;
            }
            .payment-option.selected {
                border-color: #FF7F0A;
                background: #FFF5E8;
                color: #FF7F0A;
                font-weight: 600;
            }
            .required {
                color: red;
            }
            .error-message {
                color: red;
                font-size: 12px;
                margin-top: -15px;
                margin-bottom: 10px;
                display: none;
            }
            .delivery-info {
                background: #f5f5f5;
                padding: 15px;
                border-radius: 10px;
                margin: 15px 0;
                text-align: center;
            }
            .delivery-price {
                font-size: 18px;
                font-weight: bold;
                color: #FF7F0A;
            }
        `
        document.head.appendChild(style)
        
        modalContent.innerHTML = `
            <div class="modal-title">📋 DADOS DO CLIENTE</div>
            
            <label class="modal-label">Nome completo <span class="required">*</span></label>
            <input type="text" id="customerName" class="modal-input" placeholder="Digite seu nome completo">
            <div id="nameError" class="error-message">Por favor, informe seu nome</div>
            
            ${isDelivery ? `
                <label class="modal-label">Você mora no Conjunto Dom Fragoso? <span class="required">*</span></label>
                <select id="neighborhood" class="modal-select">
                    <option value="">Selecione uma opção</option>
                    <option value="dom_fragoso">Sim, moro no Conjunto Dom Fragoso</option>
                    <option value="other">Não, moro em outro bairro</option>
                </select>
                <div id="neighborhoodError" class="error-message">Por favor, selecione uma opção</div>
                
                <div id="deliveryPriceInfo" class="delivery-info" style="display: none;">
                    <div class="delivery-price">
                        Taxa de entrega: <span id="deliveryPriceValue">R$ 0,00</span>
                    </div>
                </div>
                
                <label class="modal-label">Endereço completo <span class="required">*</span></label>
                <input type="text" id="customerAddress" class="modal-input" placeholder="Rua, número, bairro">
                <div id="addressError" class="error-message">Por favor, informe seu endereço</div>
                
                <label class="modal-label">Complemento</label>
                <input type="text" id="customerComplement" class="modal-input" placeholder="Apartamento, bloco, referência (opcional)">
            ` : ''}
            
            <label class="modal-label">Forma de pagamento <span class="required">*</span></label>
            <div class="payment-options">
                <div class="payment-option" data-payment="Dinheiro">💰 Dinheiro</div>
                <div class="payment-option" data-payment="Pix">📱 Pix</div>
                <div class="payment-option" data-payment="Cartão Débito">💳 Débito</div>
                <div class="payment-option" data-payment="Cartão Crédito">💳 Crédito</div>
            </div>
            <div id="paymentError" class="error-message">Por favor, selecione uma forma de pagamento</div>
            
            ${!isDelivery ? `
                <label class="modal-label">Troco para quanto?</label>
                <input type="text" id="customerChange" class="modal-input" placeholder="Ex: R$ 50,00 (se for em dinheiro)">
            ` : ''}
            
            <div class="modal-buttons">
                <button class="modal-btn modal-btn-secondary" id="cancelOrder">Cancelar</button>
                <button class="modal-btn modal-btn-primary" id="confirmOrder">Confirmar Pedido</button>
            </div>
        `
        
        modal.appendChild(modalContent)
        document.body.appendChild(modal)
        
        let currentDeliveryPrice = 0
        
        if (isDelivery) {
            const neighborhoodSelect = modalContent.querySelector('#neighborhood')
            const deliveryPriceInfo = modalContent.querySelector('#deliveryPriceInfo')
            const deliveryPriceValue = modalContent.querySelector('#deliveryPriceValue')
            
            neighborhoodSelect.addEventListener('change', () => {
                const value = neighborhoodSelect.value
                if (value === 'dom_fragoso') {
                    currentDeliveryPrice = 2
                    deliveryPriceValue.textContent = 'R$ 2,00'
                    deliveryPriceInfo.style.display = 'block'
                } else if (value === 'other') {
                    currentDeliveryPrice = 5
                    deliveryPriceValue.textContent = 'R$ 5,00'
                    deliveryPriceInfo.style.display = 'block'
                } else {
                    currentDeliveryPrice = 0
                    deliveryPriceInfo.style.display = 'none'
                }
            })
        }
        
        let selectedPayment = null
        const paymentOptions = modalContent.querySelectorAll('.payment-option')
        paymentOptions.forEach(option => {
            option.addEventListener('click', () => {
                paymentOptions.forEach(opt => opt.classList.remove('selected'))
                option.classList.add('selected')
                selectedPayment = option.getAttribute('data-payment')
                const paymentError = document.getElementById('paymentError')
                if (paymentError) paymentError.style.display = 'none'
            })
        })
        
        const validateForm = () => {
            let isValid = true
            const name = document.getElementById('customerName')?.value.trim()
            
            if (!name) {
                const nameError = document.getElementById('nameError')
                if (nameError) nameError.style.display = 'block'
                isValid = false
            } else {
                const nameError = document.getElementById('nameError')
                if (nameError) nameError.style.display = 'none'
            }
            
            if (isDelivery) {
                const neighborhood = modalContent.querySelector('#neighborhood')?.value
                if (!neighborhood) {
                    const neighborhoodError = document.getElementById('neighborhoodError')
                    if (neighborhoodError) neighborhoodError.style.display = 'block'
                    isValid = false
                } else {
                    const neighborhoodError = document.getElementById('neighborhoodError')
                    if (neighborhoodError) neighborhoodError.style.display = 'none'
                }
                
                const address = document.getElementById('customerAddress')?.value.trim()
                if (!address) {
                    const addressError = document.getElementById('addressError')
                    if (addressError) addressError.style.display = 'block'
                    isValid = false
                } else {
                    const addressError = document.getElementById('addressError')
                    if (addressError) addressError.style.display = 'none'
                }
            }
            
            if (!selectedPayment) {
                const paymentError = document.getElementById('paymentError')
                if (paymentError) paymentError.style.display = 'block'
                isValid = false
            } else {
                const paymentError = document.getElementById('paymentError')
                if (paymentError) paymentError.style.display = 'none'
            }
            
            return isValid
        }
        
        const confirmButton = modalContent.querySelector('#confirmOrder')
        const cancelButton = modalContent.querySelector('#cancelOrder')
        
        confirmButton.addEventListener('click', () => {
            if (validateForm()) {
                if (isDelivery) {
                    deliveryValue = currentDeliveryPrice
                }
                
                const customerData = {
                    name: document.getElementById('customerName').value.trim(),
                    neighborhood: isDelivery ? (modalContent.querySelector('#neighborhood').value === 'dom_fragoso' ? 'Conjunto Dom Fragoso' : 'Outro bairro') : null,
                    address: isDelivery ? document.getElementById('customerAddress').value.trim() : null,
                    complement: isDelivery ? document.getElementById('customerComplement').value.trim() : null,
                    payment: selectedPayment,
                    change: !isDelivery ? document.getElementById('customerChange').value.trim() : null,
                    deliveryPrice: isDelivery ? currentDeliveryPrice : 0
                }
                modal.remove()
                resolve(customerData)
            }
        })
        
        cancelButton.addEventListener('click', () => {
            modal.remove()
            resolve(null)
        })
    })
}

const generateOrder = async () => {
    console.log('Gerando pedido...');
    
    const generatedCart = generateCart()

    if (generatedCart.length === 0) {
        noItemsInCart.showToast()
        return
    }

    const customerData = await collectCustomerData()
    
    if (!customerData) {
        console.log('Pedido cancelado pelo usuário');
        return
    }

    showOnPage()
    
    const finalTotal = allItemsValue + deliveryValue - ((allItemsValue + deliveryValue) * discountValue / 100)
    
    let message = '*🍔 LANCHES DO LENGO LENGO - NOVO PEDIDO 🍔*\n\n'
    message += '*ITENS DO PEDIDO:*\n'
    message += '─'.repeat(30) + '\n\n'

    generatedCart.forEach(item => {
        const subtotal = item.price * item.qtd
        message += `*${item.qtd}x* ${item.name}\n`
        message += `  R$ ${subtotal.toFixed(2)} (R$ ${item.price.toFixed(2)} cada)\n\n`
    })

    message += '─'.repeat(30) + '\n\n'
    message += `*SUBTOTAL:* R$ ${allItemsValue.toFixed(2)}\n`
    
    if (deliveryValue > 0) {
        message += `*TAXA DE ENTREGA:* + R$ ${deliveryValue.toFixed(2)}\n`
        message += `*Bairro:* ${customerData.neighborhood}\n`
    }
    
    if (discountValue > 0) {
        const discountAmount = ((allItemsValue + deliveryValue) * discountValue) / 100
        message += `*DESCONTO (${discountValue}%):* - R$ ${discountAmount.toFixed(2)}\n`
    }
    
    message += `\n*TOTAL DO PEDIDO:* R$ ${finalTotal.toFixed(2)}\n\n`
    
    message += '─'.repeat(30) + '\n\n'
    message += '*DADOS DO CLIENTE:*\n'
    message += `*Nome:* ${customerData.name}\n`
    message += `*Entrega:* ${deliveryValue > 0 ? '📦 Delivery' : '🏪 Retirada no local'}\n`
    
    if (deliveryValue > 0) {
        message += `*Endereço:* ${customerData.address}\n`
        if (customerData.complement) {
            message += `*Complemento:* ${customerData.complement}\n`
        }
    }
    
    message += `*Pagamento:* ${customerData.payment}\n`
    
    if (!deliveryValue && customerData.change) {
        message += `*Troco para:* ${customerData.change}\n`
    }
    
    message += '\n─'.repeat(30) + '\n\n'
    message += '*Aguardando confirmação do pedido!* 🚀\n'
    message += '*Obrigado por pedir no Lengo Lengo!* 🔥'

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    
    console.log('Abrindo WhatsApp...');
    window.open(whatsappUrl, '_blank')
    
    // Opcional: Limpar carrinho após enviar pedido
    // localStorage.removeItem('cart')
    // init()
}

// Notifications
const itemRemovedNotification = Toastify({
    text: "Produto removido do carrinho de compras.",
    duration: 5000,
    close: true,
    gravity: "bottom",
    position: "right",
    style: { background: "#FF7F0A" }
})

const appliedCode = Toastify({
    text: "Cupom aplicado com sucesso!",
    duration: 5000,
    close: true,
    gravity: "bottom",
    position: "right",
    style: { background: "#FF7F0A" }
})

const codeNotFound = Toastify({
    text: "Cupom não encontrado!",
    duration: 5000,
    close: true,
    gravity: "bottom",
    position: "right",
    style: { background: "#FF7F0A" }
})

const noItemsInCart = Toastify({
    text: "Não é possível gerar pedido sem ter item no carrinho.",
    duration: 5000,
    close: true,
    gravity: "bottom",
    position: "right",
    style: { background: "#FF7F0A" }
})

// Event Listeners
if (btnAddPromotionCode) btnAddPromotionCode.addEventListener('click', addDiscount)
if (btnWantDelivery) btnWantDelivery.addEventListener('click', () => chooseDelivery(true))
if (btnDontWantDelivery) btnDontWantDelivery.addEventListener('click', () => chooseDelivery(false))
if (btnGenerateOrder) btnGenerateOrder.addEventListener('click', generateOrder)

// Initialize
init()

console.log('✅ Carrinho carregado com sucesso!')
console.log('📞 WhatsApp configurado para: (88) 9 9490-7920')
console.log('🛒 Botão Gerar Pedido:', btnGenerateOrder)
