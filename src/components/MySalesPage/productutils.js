export const transformProductForAPI = (product) => {
    return {
        productName: product.product_name,
        categoryName: product.category_name,
        productPrice: product.product_price,
        stockOption: product.stock_option.map(option => ({
            stockQuantity: option.stock_quantity,
            stockSize: option.stock_size,
            stockColor: option.stock_color
        })),
        imageFileList: product.product_image.map((image, index) => ({
            imageId: index + 1, 
            productId: product.product_id,
            productImage: image,
            productImageOriginName: image.split('/').pop(),
            productImageSave: image
        }))
    };
};