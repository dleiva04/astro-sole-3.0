import { config } from '../../utils/config'
import axios from "axios";
import { parseLink } from "../../utils/misc";

export async function GET({ request }) {
    const params = new URL(request.url).searchParams;
    console.log(params.get("collection_id"))

    const { data } = await axios.get(`https://${config.shopifyShop}/admin/api/${config.apiVersion}/products/count.json`, {
        params: {
            collection_id: params.get("collection_id")

        },
        headers: {
            "X-Shopify-Access-Token": config.shopifyAccessCode,
            "Content-Type": "application/json"
        }
    })

    return new Response(
        JSON.stringify({
            count: data.count
        })
    )
}