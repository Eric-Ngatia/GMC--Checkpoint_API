
function fecthAllProductData(products) {
    return{
        type:'fetch-all-product',
        payload:products
    }
}


export default fecthAllProductData;


export function getSingleProduct(product) {
    return{
        type: 'get-single-product',
        payload: product
    }
}