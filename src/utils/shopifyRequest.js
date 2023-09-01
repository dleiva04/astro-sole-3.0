import { config } from './config'

export async function shopifyPublicStorefrontRequest(buyerIP, query, variables) {
    return fetch(`https://${config.shopifyShop}/api/${config.apiVersion}/graphql.json`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": config.publicShopifyAccessToken
            },
            body: JSON.stringify({ query, variables }),
        });
}
export async function shopifyPrivateStorefrontRequest(buyerIP, query, variables) {
    return fetch(`https://${config.shopifyShop}/api/${config.apiVersion}/graphql.json`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Shopify-Storefront-Private-Token": config.privateShopifyAccessToken,
                "Shopify-Storefront-Buyer-IP": buyerIP,
            },
            body: JSON.stringify({ query, variables }),
        });
}