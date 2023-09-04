import { pages } from '../assets/pages.json';
import { shopifyPublicStorefrontRequest } from './shopifyRequest';

export async function fetchCollection(ip, graphql_query, slug) {
    let collection = "";
    let page_title = "";
    pages.map((page) => {
        if (page.slug == slug) {
            collection = page.collection
            page_title = page.title
        }
    })

    try {

        const query = await shopifyPublicStorefrontRequest(
            ip,
            graphql_query,
            {
                handle: collection,
                first: 20,
            }
        );
        const { data } = await query.json();
        return { "title": page_title, "products": data.collection.products.edges };
    } catch (error) {
        return { "error": error };
    }
}

export async function fetchProduct(ip, graphql_query, product_id) {
    try {
        const query = await shopifyPublicStorefrontRequest(
            ip,
            graphql_query,
            {
                id: `gid://shopify/Product/${product_id}`
            }
        );
        const { data } = await query.json();
        return data.product;
    } catch (error) {
        return { "error": error };
    }
}

export async function fetchRecommendations(ip, graphql_query, product_id) {
    try {
        const query = await shopifyPublicStorefrontRequest(
            ip,
            graphql_query,
            {
                id: `gid://shopify/Product/${product_id}`,
                intent: "RELATED"
            }
        );
        const { data } = await query.json();
        return data.productRecommendations;
    } catch (error) {
        return { "error": error };
    }
}