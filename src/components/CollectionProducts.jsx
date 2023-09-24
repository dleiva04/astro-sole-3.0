import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import request, { gql } from 'graphql-request'
import { CollectionProductsQuery } from '../utils/queries.js'
import { config } from '../utils/config.js'
import CollectionProduct from './CollectionProduct.jsx'
import Filters from './Filters.jsx'
import { useState } from 'react';

const queryClient = new QueryClient()
const URL = `https://${config.shopifyShop}/api/${config.apiVersion}/graphql.json`

const CollectionProducts = ({ collection }) => {

    return (
        <QueryClientProvider client={queryClient}>
            <FetchProducts collection={collection} />
        </QueryClientProvider>
    )
}

function FetchProducts({ collection }) {
    const [tallaFilters, setTallaFilters] = useState([]);

    const handleFilters = event => {
        const filterValue = event.target.value;
        console.log(filterValue)
        if (tallaFilters.includes(filterValue)) {
            setTallaFilters(tallaFilters.filter((talla) => talla !== filterValue));
        } else {
            setTallaFilters([...tallaFilters, filterValue]);

        }
    };

    const { status, data, error, isFetching } = useQuery({
        queryKey: [`fetch_${collection}`],
        queryFn: async () => {
            const data = await request(URL, gql`${CollectionProductsQuery}`, {
                handle: collection,
                first: 12,
                last: null,
            }, {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": config.publicShopifyAccessToken
            })
            console.log(data.collection.products.edges)
            return data.collection.products.edges;
        }
    })




    return (
        <div>
            {status === 'loading' ? (
                <div className='flex items-center justify-center my-12'>
                    <span className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-black rounded-full" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                    </span>
                </div>
            )
                : status === 'error' ? (
                    <div>Error: {error.message}</div>
                ) : (
                    <div className="flex justify-center px-4 md:px-8 pb-16">
                        <div className="hidden md:flex w-1/5">
                            <div className="w-full">
                                <div className="sticky top-24 z-50 pl-4 pr-10">
                                    <h2 className="text-xl font-bold">Filtros</h2>
                                    <Filters filters={[{ "type": "list", "label": "Talla", "children": ["S", "M", "L", "XL"] }]} handleFilters={handleFilters} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/5 z-0">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {data.filter((product) => {
                                    // talla filters
                                    return (
                                        // if there are no filters, return all products
                                        tallaFilters.length === 0 ||
                                        // if there are filters, return products that match the filter multiple filters can apply to the same product
                                        tallaFilters.every((filter) => {
                                            return product.node.variants.nodes.some((variant) => {
                                                return variant.title.includes(filter);
                                            });
                                        })

                                    );
                                }).map((product, index) => (
                                    <CollectionProduct key={index} id={product.node.id.split('/').pop()} name={product.node.title} price={product.node.variants.nodes[0].price.amount} />
                                ))}
                            </div>
                            <div>
                                Pagination
                            </div>
                        </div>

                    </div>
                )}

        </div>

    )
}
export default CollectionProducts;