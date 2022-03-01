export const products = [
    { id: 1, name: 'Café Colombia', price: 1900, category: 'cafe' , stock: 20 ,  description: 'Se caracteriza por su sabor dulce, mantecado y su cuerpo vigoroso. Permite disfrutar una sutil nota a quinoto que limpia el paladar. Recuerda a especias dulces como la vainilla.' , img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/colombia-genoba-web1-c70dcbb2b21fe11d0f16399318985620-320-0.jpg'},
    { id: 2, name: 'Café Guatemala', price: 1900, category: 'cafe' , stock: 20 , description: 'Contiene un dulzor característico de las frutas del bosque. Aroma delicado y levemente floral.' , img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/guatemala-amarillo-web1-c7dc234181c005d97816427114370512-320-0.jpg'},
    { id: 3, name: 'Café Perú', price: 1900, category: 'cafe' , stock: 20 , description: 'Se distingue por su excepcional aroma especiado acompañado por una sutil cáscara de lima.' , img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/peru-verde-web1-c9df34aacfedf718d816361060003347-320-0.jpg'},
    { id: 4, name: 'Cápsulas dolce gusto', price: 1300, category: 'capsulas' , stock: 20 , description: 'Cápsulas reutilizables compatibles con el sistema de Dolce Gusto para ser utilizadas con café molido, soluble, té o yerba mate.' , img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/cerrado-mineiro-minas-gerais-311-3264652c1a7d9b8cec16215590387260-640-0.png'},
    { id: 5, name: 'Cápsulas nespresso', price: 1510, category: 'capsulas' , stock: 20 , description: 'Cápsulas reutilizables compatibles con el sistema de Nespresso para ser utilizadas con café molido, soluble, té o yerba mate.' , img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/cerrado-mineiro-minas-gerais-81-319ac8aca6721ed6c816215580124871-640-0.png'},
]

const categories = [
    {id: 'cafe', description: 'Cafe'},
    {id: 'capsulas', description: 'Capsulas'},    
]

export const getProducts = (idCategory) => {
    return new Promise ((resolve) => {
        const productsToResolve = idCategory ? products.filter(item => item.category === idCategory) : products
        setTimeout(() => {
            resolve(productsToResolve);
        },500);
    });
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 500)
    })
}

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

/*export const getProducts = () => { //Simula llamada a una API
    return new Promise((resolve) => { // Retorna una promesa y recibe como parámetro resolve
        setTimeout(() => {
            resolve(products) // Devuelve los productos
        }, 1000) // En 2 segundos
    })
}
export const getProduct = () => { //Simula llamada a una API
    return new Promise((resolve) => { // Retorna una promesa y recibe como parámetro resolve
        setTimeout(() => {
            resolve(products[0]) // Devuelve los productos
        }, 1000) // En 2 segundos
    })
}*/