/**
 * Copyright © Elogic. All rights reserved.
 * See https://elogic.co for license details.
 */

var config = {
    map: {
        "*": {
            compareList: "Magento_Catalog/js/list",
            relatedProducts: "Magento_Catalog/js/related-products",
            upsellProducts: "Magento_Catalog/js/upsell-products",
            productListToolbarForm: "Magento_Catalog/js/product/list/toolbar",
            catalogGallery: "Magento_Catalog/js/gallery",
            catalogAddToCart: "Magento_Catalog/js/catalog-add-to-cart",
            catalogueProductsListSlider:
                "Magento_Catalog/js/catalogue-products-slider",
        },
    },
    config: {
        mixins: {
            "Magento_Theme/js/view/breadcrumbs": {
                "Magento_Catalog/js/product/breadcrumbs": true,
            },
        },
    },
};
