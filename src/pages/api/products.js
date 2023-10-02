import { config } from '../../utils/config'
import axios from "axios";
import { parseLink } from "../../utils/misc";

export async function GET({ request }) {
    const params = new URL(request.url).searchParams;
    console.log(params.get("collection_id"))

    const { data, headers } = await axios.get(`https://${config.shopifyShop}/admin/api/${config.apiVersion}/products.json`, {
        params: {
            collection_id: params.get("collection_id"),
            limit: params.get("limit")

        },
        headers: {
            "X-Shopify-Access-Token": config.shopifyAccessCode,
            "Content-Type": "application/json"
        }
    })

    return new Response(
        JSON.stringify({
            products: data.products,
            link: parseLink(headers.link).next
        })
    )
}