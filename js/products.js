// Types:
// 1 = Lanches
// 2 = Combos (não usado)
// 3 = Porções (Batatas Fritas)
// 4 = Bebidas
// 5 = Pastéis

const products = [
    // ========== LANCHES (Type 1) ==========
    {
        id: 1,
        type: 1,
        name: 'PrensaDinho do Herberth',
        description: 'Carne bem assada, batata palha e pão prensado na chapa. Sem ketchup e sem maionese.',
        price: 5.00,
        lastPrice: 0,
        img: './img/lanches/presadinho.png'
    },
    {
        id: 2,
        type: 1,
        name: 'Misto Malabarista',
        description: 'Queijo, presunto e salada (alface, tomate).',
        price: 6.00,
        lastPrice: 0,
        img: './img/lanches/misto__hambvurgue.png'
    },
    {
        id: 3,
        type: 1,
        name: 'Hambúrguer Domador',
        description: 'Carne e salada (alface, tomate).',
        price: 7.00,
        lastPrice: 0,
        img: './img/lanches/misto__hambvurgue.png'
    },
    {
        id: 4,
        type: 1,
        name: 'X-Palhaço',
        description: 'Carne, queijo e salada (alface, tomate).',
        price: 8.00,
        lastPrice: 0,
        img: './img/lanches/x-burguer.png'
    },
    {
        id: 5,
        type: 1,
        name: 'Trapézio de Presunto',
        description: 'Carne, queijo, presunto e salada (alface, tomate).',
        price: 9.00,
        lastPrice: 0,
        img: './img/lanches/x-presunto.png'
    },
    {
        id: 6,
        type: 1,
        name: 'Show da Salsicha',
        description: 'Carne, queijo, salsicha e salada (alface, tomate).',
        price: 9.00,
        lastPrice: 0,
        img: './img/lanches/x-salsicha.png'
    },
    {
        id: 7,
        type: 1,
        name: 'Equilibrista',
        description: 'Frango, queijo, presunto e salada (alface, tomate).',
        price: 12.00,
        lastPrice: 0,
        img: './img/lanches/x-frango.png'
    },
    {
        id: 8,
        type: 1,
        name: 'Bailarina Circense',
        description: 'Frango, catupiry, queijo e salada (alface, tomate).',
        price: 14.00,
        lastPrice: 0,
        img: './img/lanches/X-Frango_Especial.png'
    },
    {
        id: 9,
        type: 1,
        name: 'Bauru do Picadeiro',
        description: 'Carne, queijo, presunto, ovo e salada (alface, tomate).',
        price: 14.00,
        lastPrice: 0,
        img: './img/lanches/bauru.png'
    },
    {
        id: 10,
        type: 1,
        name: 'Bacon Explosivo',
        description: 'Carne, queijo, bacon crocante e salada (alface, tomate).',
        price: 14.00,
        lastPrice: 0,
        img: './img/lanches/x-bacon.png'
    },
    {
        id: 11,
        type: 1,
        name: 'Calabreso do Circo',
        description: 'Carne, queijo, calabresa e salada (alface, tomate).',
        price: 14.00,
        lastPrice: 0,
        img: './img/lanches/x-calabresa.png'
    },
    {
        id:12,
        type: 1,
        name: 'Spirru do Palhaço',
        description: '3 carnes, 3 queijos, ovo, bacon crocante, molho barbecue e salada (alface, tomate).',
        price: 25.00,
        lastPrice: 0,
        img: './img/lanches/spirru.png'
    },
    {
        id: 13,
        type: 1,
        name: 'CaraMelada (X-TUDO)',
        description: 'Carne, queijo, bacon, ovo, presunto, salsicha, frango, calabresa e salada (alface, tomate).',
        price: 20.00,
        lastPrice: 0,
        img: './img/lanches/x-tudo.png'
    },
    {
        id: 14,
        type: 1,
        name: 'Espetáculo de Sempre',
        description: '2 carnes, 2 queijos, ovo e salada (alface, tomate).',
        price: 19.00,
        lastPrice: 0,
        img: './img/lanches/desempre.png'
    },
    {
        id: 15,
        type: 1,
        name: 'ARRI ÉGUA DO LENGO',
        description: 'Dois pães árabes (um embaixo, outro por cima), 2 carnes, 2 queijos, 2 ovos, frango com catupiry, presunto, salsicha, bacon, molho barbecue, cebola caramelizada e salada. Servido no prato.',
        price: 40.00,
        lastPrice: 0,
        img: './img/lanches/arriegua.png'
    },

    // ========== PORÇÕES (Batatas Fritas - Type 3) ==========
    {
        id: 20,
        type: 3,
        name: 'Batata Frita Pequena',
        description: 'Batata frita crocante.',
        price: 14.00,
        lastPrice: 0,
        img: './img/porcoes/batap.png'
    },
    {
        id: 21,
        type: 3,
        name: 'Batata Frita Grande',
        description: 'Batata frita crocante.',
        price: 18.00,
        lastPrice: 0,
        img: './img/porcoes/batatag.png'
    },

    // ========== PASTÉIS (Type 5) ==========
    {
        id: 30,
        type: 5,
        name: 'Pastel de Carne',
        description: 'Carne, milho e orégano.',
        price: 8.00,
        lastPrice: 0,
        img: './img/pasteis/pasteis4.png'
    },
    {
        id: 31,
        type: 5,
        name: 'Pastel de Frango',
        description: 'Frango, milho e orégano.',
        price: 8.00,
        lastPrice: 0,
        img: './img/pasteis/pasteis5.png'
    },
    {
        id: 32,
        type: 5,
        name: 'Pastel de Queijo',
        description: 'Queijo, milho e orégano.',
        price: 8.00,
        lastPrice: 0,
        img: './img/pasteis/pasteis2.png'
    },
    {
        id: 33,
        type: 5,
        name: 'Pastel Sabor Pizza',
        description: 'Presunto, queijo, tomate, milho e orégano.',
        price: 9.00,
        lastPrice: 0,
        img: './img/pasteis/pasteis3.png'
    },
    {
        id: 34,
        type: 5,
        name: 'É D++ (30cm)',
        description: 'Presunto, queijo, carne, frango, catupiry, calabresa, milho e orégano.',
        price: 25.00,
        lastPrice: 0,
        img: './img/pasteis/pasteis.png'
    },

    // ========== BEBIDAS (Type 4) ==========
    // Sucos
    {
        id: 40,
        type: 4,
        name: 'Suco de Manga',
        description: 'Suco natural de manga.',
        price: 8.00,
        lastPrice: 0,
        img: './img/bebida/sucomanga.png'
    },
    {
        id: 41,
        type: 4,
        name: 'Suco de Acerola',
        description: 'Suco natural de acerola.',
        price: 8.00,
        lastPrice: 0,
        img: './img/bebida/acerola.png'
    },
    {
        id: 42,
        type: 4,
        name: 'Suco de Goiaba',
        description: 'Suco natural de goiaba.',
        price: 8.00,
        lastPrice: 0,
        img: './img/bebida/goibaba.png'
    },
    {
        id: 43,
        type: 4,
        name: 'Suco de Caju',
        description: 'Suco natural de caju.',
        price: 8.00,
        lastPrice: 0,
        img: './img/bebida/caju.png'
    },
    // Água
    {
        id: 44,
        type: 4,
        name: 'Água Mineral 500ml',
        description: 'Água mineral sem gás.',
        price: 2.00,
        lastPrice: 0,
        img: './img/bebida/agua.png'
    },
    // Refrigerantes
    {
        id: 45,
        type: 4,
        name: 'Refri Indaiá (mini)',
        description: 'Refrigerante mini (sabores variados).',
        price: 3.00,
        lastPrice: 0,
        img: './img/bebida/idaia.png'
    },
    {
        id: 46,
        type: 4,
        name: 'Refrigerante Mini (350ml)',
        description: 'Guaraná, Fanta, Pepsi ou similar.',
        price: 3.50,
        lastPrice: 0,
        img: './img/bebida/guarana.png'
    },
    {
        id: 47,
        type: 4,
        name: 'Coca-Cola (mini)',
        description: 'Coca-Cola mini 350ml.',
        price: 3.50,
        lastPrice: 0,
        img: './img/bebida/coca1l.png'
    },
    {
        id: 48,
        type: 4,
        name: 'Refrigerante Mini Lata',
        description: 'Lata 269ml (sabores variados).',
        price: 4.00,
        lastPrice: 0,
        img: './img/bebida/coca1l.png'
    },
    {
        id: 49,
        type: 4,
        name: 'Refrigerante Lata 350ml',
        description: 'Guaraná, Fanta, Pepsi.',
        price: 5.00,
        lastPrice: 0,
        img: './img/bebida/coca1l.png'
    },
    {
        id: 50,
        type: 4,
        name: 'Coca-Cola Lata 350ml',
        description: 'Coca-Cola tradicional.',
        price: 6.00,
        lastPrice: 0,
        img: './img/bebida/coca1l.png'
    },
    {
        id: 51,
        type: 4,
        name: 'Refrigerante 600ml',
        description: 'Coca-Cola, Cajuíche ou Guaraná.',
        price: 8.00,
        lastPrice: 0,
        img: './img/bebida/guarana.png'
    },
    {
        id: 52,
        type: 4,
        name: 'Refrigerante 1 Litro',
        description: 'Coca-Cola, Cajuíche, Guaraná ou Pepsi.',
        price: 12.00,
        lastPrice: 0,
        img: './img/bebida/pespsi.png'
    },
    {
        id: 53,
        type: 4,
        name: 'Refrigerante 2 Litros',
        description: 'Coca-Cola, Cajuíche, Pepsi, Guaraná ou Fanta.',
        price: 15.00,
        lastPrice: 0,
        img: './img/bebida/coca1l.png'
    },
    // Cervejas
    {
        id: 54,
        type: 4,
        name: 'Cerveja Skol 300ml',
        description: 'Cerveja Skol long neck.',
        price: 5.00,
        lastPrice: 0,
        img: './img/bebida/skol.png'
    },
    {
        id: 55,
        type: 4,
        name: 'Cerveja Brahma 300ml',
        description: 'Cerveja Brahma long neck.',
        price: 5.00,
        lastPrice: 0,
        img: './img/bebida/brahma.png'
    }
];