// Types:
// 1 = Snack (Lanches)
// 2 = Combos (não usado)
// 3 = Portions (Batatas Fritas)
// 4 = Drinks (Bebidas)
// 5 = Pastéis

const products = [
    // ========== LANCHES (Snacks - Type 1) ==========
    {
        id: 1,
        type: 1,
        name: 'PrensaDinho do Herberth',
        description: 'Carne bem assada, batata palha e pão prensado na chapa.',
        price: 4.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 2,
        type: 1,
        name: 'Misto',
        description: 'Queijo, presunto, alface, tomate, milho e cebola.',
        price: 5.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 3,
        type: 1,
        name: 'Hambúrguer',
        description: 'Carne, alface, tomate, milho e cebola.',
        price: 6.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 4,
        type: 1,
        name: 'X-Burguer',
        description: 'Carne, queijo, alface, tomate, milho e cebola.',
        price: 7.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 5,
        type: 1,
        name: 'X-Presunto',
        description: 'Carne, queijo, presunto, alface, tomate e milho.',
        price: 8.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 6,
        type: 1,
        name: 'X-Salsicha',
        description: 'Carne, queijo, salsicha, alface, tomate e milho.',
        price: 8.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 7,
        type: 1,
        name: 'X-Fango',
        description: 'Frango, queijo, alface, tomate, milho e cebola.',
        price: 10.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 8,
        type: 1,
        name: 'X-Fango Especial',
        description: 'Frango, catupiry, queijo, alface, tomate, milho e cebola.',
        price: 12.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 9,
        type: 1,
        name: 'Bauru',
        description: 'Carne, queijo, ovo, alface, tomate, milho e cebola.',
        price: 12.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 10,
        type: 1,
        name: 'X-Bacon',
        description: 'Carne, queijo, bacon, alface, tomate, milho e cebola.',
        price: 12.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 11,
        type: 1,
        name: 'X-Calabresa',
        description: 'Carne, queijo, calabresa, alface, tomate, milho e cebola.',
        price: 12.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 12,
        type: 1,
        name: 'De Sempre',
        description: '2 carnes, 2 queijos, ovo, alface, tomate, milho e cebola.',
        price: 15.00,
        lastPrice: 0,
        img: './img/burger.png'
    },
    {
        id: 13,
        type: 1,
        name: 'X-Tudo',
        description: 'Carne, queijo, ovo, presunto, salsicha, frango, calabresa, alface, tomate, milho e cebola.',
        price: 17.00,
        lastPrice: 0,
        img: './img/xtudo.png'
    },
    {
        id: 14,
        type: 1,
        name: 'Arri Égua',
        description: 'Dois pães árabes com 2 carnes, 2 queijos, 2 ovos, frango c/ catupiry, presunto, salsicha, bacon e verduras. Servido no prato.',
        price: 30.00,
        lastPrice: 0,
        img: './img/burger.png'
    },

    // ========== PORÇÕES (Batatas Fritas - Type 3) ==========
    {
        id: 20,
        type: 3,
        name: 'Batata Frita Pequena',
        description: 'Batata frita crocante.',
        price: 12.00,
        lastPrice: 0,
        img: './img/porcoes/batap.png'
    },
    {
        id: 21,
        type: 3,
        name: 'Batata Frita Grande',
        description: 'Batata frita crocante.',
        price: 16.00,
        lastPrice: 0,
        img: './img/porcoes/batatag.png'
    },

    // ========== PASTÉIS (Type 5) ==========
     {
        id: 15,
        type: 5,
        name: 'Pastel de Carne',
        description: 'Carne, milho e orégano.',
        price: 6.00,
        lastPrice: 0,
        img: './img/pasteis/pasteis4.png'
    },
    {
        id: 16,
        type: 5,
        name: 'Pastel de Frango',
        description: 'Frango, milho e orégano.',
        price: 6.00,
        lastPrice: 0,
        img: './img/pasteis/pasteis5.png'
    },
    {
        id: 17,
        type: 5,
        name: 'Pastel de Queijo',
        description: 'Queijo, milho e orégano.',
        price: 6.00,
        lastPrice: 0,
        img: './img/pasteis/pasteis2.png'
    },
    {
        id: 18,
        type: 5,
        name: 'Pastel Sabor Pizza',
        description: 'Presunto, queijo, tomate, milho e orégano.',
        price: 6.50,
        lastPrice: 0,
        img: './img/pasteis/pasteis3.png'
    },
    {
        id: 19,
        type: 5,
        name: 'ÉD++ (30cm)',
        description: 'Presunto, queijo, carne, frango, catupiry, calabresa, milho e orégano.',
        price: 20.00,
        lastPrice: 0,
        img: './img/pasteis/pasteis.png'
    },

    // ========== BEBIDAS (Drinks - Type 4) ==========
 {
    id: 22,
    type: 4,
    name: 'Suco de Manga',
    description: 'Suco natural de manga.',
    price: 6.00,
    lastPrice: 0,
    img: './img/bebida/sucomanga.png'
},
{
    id: 23,
    type: 4,
    name: 'Suco de Acerola',
    description: 'Suco natural de acerola.',
    price: 6.00,
    lastPrice: 0,
    img: './img/bebida/acerola.png'
},
{
    id: 24,
    type: 4,
    name: 'Suco de Goiaba',
    description: 'Suco natural de goiaba.',
    price: 6.00,
    lastPrice: 0,
    img: './img/bebida/goibaba.png'
},
{
    id: 25,
    type: 4,
    name: 'Suco de Caju',
    description: 'Suco natural de caju.',
    price: 6.00,
    lastPrice: 0,
    img: './img/bebida/caju.png'
},
{
    id: 26,
    type: 4,
    name: 'Água Mineral 500ml',
    description: 'Água mineral sem gás.',
    price: 2.00,
    lastPrice: 0,
    img: './img/bebida/agua.png'
},
{
    id: 27,
    type: 4,
    name: 'Refri Indaiá (mini)',
    description: 'Refrigerante mini.',
    price: 2.50,
    lastPrice: 0,
    img: './img/bebida/idaia.png'
},
{
    id: 28,
    type: 4,
    name: 'Guaraná/Fanta/Pepsi (mini)',
    description: 'Refrigerante mini (350ml).',
    price: 3.00,
    lastPrice: 0,
    img: './img/bebida/guarana.png'
},
{
    id: 29,
    type: 4,
    name: 'Coca-Cola (mini)',
    description: 'Coca-Cola mini.',
    price: 3.50,
    lastPrice: 0,
    img: './img/bebida/coca1l.png'
},
{
    id: 30,
    type: 4,
    name: 'Lata 350ml',
    description: 'Coca-Cola, Guaraná, Fanta ou Pepsi.',
    price: 5.00,
    lastPrice: 0,
    img: './img/bebida/coca1l.png'
},
{
    id: 31,
    type: 4,
    name: 'Refrigerante 600ml',
    description: 'Coca-Cola, Cajuíche ou Guaraná.',
    price: 8.00,
    lastPrice: 0,
    img: './img/bebida/guarana.png'
},
{
    id: 32,
    type: 4,
    name: 'Refrigerante 1 Litro',
    description: 'Coca-Cola, Cajuíche, Guaraná ou Pepsi.',
    price: 10.00,
    lastPrice: 0,
    img: './img/bebida/pespsi.png'
},
{
    id: 33,
    type: 4,
    name: 'Refrigerante 2 Litros',
    description: 'Coca-Cola, Cajuíche, Pepsi, Guaraná ou Fanta.',
    price: 15.00,
    lastPrice: 0,
    img: './img/bebida/coca1l.png'
},
{
    id: 34,
    type: 4,
    name: 'Cerveja Skol 300ml',
    description: 'Cerveja Skol long neck.',
    price: 5.00,
    lastPrice: 0,
    img: './img/bebida/skol.png'
},
{
    id: 35,
    type: 4,
    name: 'Cerveja Bohemia 300ml',
    description: 'Cerveja Bohemia long neck.',
    price: 5.00,
    lastPrice: 0,
    img: './img/bebida/bohemia.png'
},
{
    id: 36,
    type: 4,
    name: 'Cerveja Brahma 300ml',
    description: 'Cerveja Brahma long neck.',
    price: 5.00,
    lastPrice: 0,
    img: './img/bebida/brahma.png'
},
{
    id: 37,
    type: 4,
    name: 'Cerveja Itaipava 300ml',
    description: 'Cerveja Itaipava long neck.',
    price: 4.00,
    lastPrice: 0,
    img: './img/bebida/itaipava.png'
}
];