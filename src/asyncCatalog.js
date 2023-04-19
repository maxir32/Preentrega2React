const products = [
    {
        id: '1',
        name: 'Diplomaturas',
        price: 15500,
        category: 'diplomaturas',
        img: '/images/diplomaturas/1.webp',
        stock: 15,
        description: 'INICIOS DE ARTETERAPIA'
    },
    {
        id: '2',
        name: 'Diplomaturas',
        price: 16900,
        category: 'diplomaturas',
        img: '/images/diplomaturas/2.webp',
        stock: 30,
        description: 'TRABAJO CON EL NIÑO INTERIOR'
    },    
    {
        id: '3',
        name: 'Grupos',
        price: 2990,
        category: 'grupos',
        img: '/images/grupos/1.webp',
        stock: 35,
        description: 'TRANSTORNOS EN LA ALIMENTACIÓN'
    },    
    {
        id: '4',
        name: 'Talleres',
        price: 3000,
        category: 'talleres',
        img: '/images/talleres/1.webp',
        stock: 40,
        description: 'QUE HACER EN UNA SITUCION DE BULLYING'
    },
    {
        id: '5',
        name: 'Talleres',
        price: 2500,
        category: 'talleres',
        img: '/images/talleres/2.webp',
        stock: 20,
        description: 'EL VALOR DE LA AMISTAD'
    },
    {
        id: '6',
        name: 'Talleres',
        price: 3100,
        category: 'talleres',
        img: '/images/talleres/3.webp',
        stock: 15,
        description: 'TALLER DE ORIENTACIÓN VOCACIONAL'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },300)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },400)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },400)
    })
}