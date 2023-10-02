export const config = {
    shopifyShop: import.meta.env.PUBLIC_SHOPIFY_SHOP,
    publicShopifyAccessToken: import.meta.env
        .PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    privateShopifyAccessToken: import.meta.env.PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    shopifyAdminSecret: import.meta.env.SHOPIFY_ADMIN_SECRET,
    apiVersion: "2023-07",
    shopifySecretKey: import.meta.env.SHOPIFY_API_SECRET_KEY,
    shopifyAccessCode: import.meta.env.SHOPIFY_ACCESS_CODE,
};