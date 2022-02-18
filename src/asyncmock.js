const products = [
    { id: 1, name: 'Colombia', price: 1900, img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/colombia-genoba-web1-c70dcbb2b21fe11d0f16399318985620-320-0.jpg'},
    { id: 2, name: 'Guatemala', price: 1900, img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/guatemala-amarillo-web1-c7dc234181c005d97816427114370512-320-0.jpg'},
    { id: 3, name: 'Perú', price: 1900, img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/peru-verde-web1-c9df34aacfedf718d816361060003347-320-0.jpg'},
]

export const getProducts = () => { //Simula llamada a una API
    return new Promise((resolve) => { // Retorna una promesa y recibe como parámetro resolve
        setTimeout(() => {
            resolve(products) // Devuelve los productos
        }, 2000) // En 2 segundos
    })
}
export const getProduct = () => { //Simula llamada a una API
    return new Promise((resolve) => { // Retorna una promesa y recibe como parámetro resolve
        setTimeout(() => {
            resolve(products[0]) // Devuelve los productos
        }, 2000) // En 2 segundos
    })
}