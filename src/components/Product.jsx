import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import request, { gql } from 'graphql-request'
import { ProductById } from '../utils/queries.js'
import { config } from '../utils/config.js'

const queryClient = new QueryClient()
const URL = `https://${config.shopifyShop}/api/${config.apiVersion}/graphql.json`

const Product = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <FetchProduct />
        </QueryClientProvider>
    );
}

function FetchProduct() {

    const { status, data, error, isFetching } = useQuery({
        queryKey: [`fetch_${collection}`],
        queryFn: async () => {
            const data = await request(URL, gql`${ProductById}`, {
                handle: collection,
                first: 20,
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
        <div class="flex p-4 md:p-16 flex-col md:flex-row">
            <ol
                class="flex md:hidden items-center whitespace-nowrap min-w-0 my-4"
                aria-label="Breadcrumb"
            >
                <li class="text-sm text-gray-600 dark:text-gray-400">
                    <a class="flex items-center hover:text-blue-600" href="#">
                        Inicio
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 13L10 3"
                                stroke="currentColor"
                                stroke-linecap="round"></path>
                        </svg>
                    </a>
                </li>

                <li class="text-sm text-gray-600 dark:text-gray-400">
                    <a class="flex items-center hover:text-blue-600" href="#">
                        Collección
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 13L10 3"
                                stroke="currentColor"
                                stroke-linecap="round"></path>
                        </svg>
                    </a>
                </li>

                <li
                    class="text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
                    aria-current="page"
                >
                </li>
            </ol>
            <div
                class="flex flex-col md:flex-row md:w-3/6 items-center justify-center md:items-start md:justify-start"
            >
                <div
                    class="w-full md:w-1/6 flex flex-row md:flex-col gap-2 md:gap-4 order-last md:order-none my-2 md:my-0 items-center justify-center md:items-start md:justify-start"
                >
                    <img
                        src="/image.jpg"
                        alt=""
                        class="h-24 w-24 md:h-32 md:w-32 object-cover p-2 border border-gray-200 hover:border-black"
                    />
                    <img
                        src="/image2.jpg"
                        alt=""
                        class="h-24 w-24 md:h-32 md:w-32 object-cover p-2 border border-transparent hover:border-black"
                    />
                    <img
                        src="/image.jpg"
                        alt=""
                        class="h-24 w-24 md:h-32 md:w-32 object-cover p-2 border border-transparent hover:border-black"
                    />
                    <img
                        src="/image.jpg"
                        alt=""
                        class="h-24 w-24 md:h-32 md:w-32 object-cover p-2 border border-transparent hover:border-black"
                    />
                </div>
                <div class="w-5/6 flex justify-center max-h-[750px]">
                    <img src="/image.jpg" alt="" class="w-full object-contain" />
                </div>
            </div>
            <div class="w-full md:w-3/6 px-6">
                <div
                    class="w-full md:w-4/5 flex flex-col justify-center md:justify-start items-center md:items-start"
                >
                    <ol
                        class="hidden md:flex items-center whitespace-nowrap min-w-0"
                        aria-label="Breadcrumb"
                    >
                        <li class="text-sm text-gray-600 dark:text-gray-400">
                            <a
                                class="flex items-center hover:text-blue-600"
                                href="#"
                            >
                                Inicio
                                <svg
                                    class="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M6 13L10 3"
                                        stroke="currentColor"
                                        stroke-linecap="round"></path>
                                </svg>
                            </a>
                        </li>

                        <li class="text-sm text-gray-600 dark:text-gray-400">
                            <a
                                class="flex items-center hover:text-blue-600"
                                href="#"
                            >
                                Collección
                                <svg
                                    class="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M6 13L10 3"
                                        stroke="currentColor"
                                        stroke-linecap="round"></path>
                                </svg>
                            </a>
                        </li>

                        <li
                            class="text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
                            aria-current="page"
                        >
                            Item
                        </li>
                    </ol>
                    <h1
                        class="font-extrabold text-4xl tracking-wider my-6 text-center md:text-left"
                    >
                        {product.title}
                    </h1>
                    <div class="flex gap-4">
                        <span class="text-lg line-through text-gray-400"
                        >₡15.000</span
                        >
                        <span class="text-lg">₡12.000</span>
                        <span
                            class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800"
                        >-15%</span
                        >
                    </div>
                    <div class="my-4 md:mt-12 md:mb-4 text-justify">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Reprehenderit vitae modi voluptate, eveniet natus ex
                            quaerat nobis. Quia, hic sapiente?
                        </p>
                    </div>
                    <div>
                        <span>Talla</span>
                        <ul class="flex gap-4 my-2">
                            <li
                                class="border rounded py-2 px-4 hover:border-black border-black"
                            >
                                <span>XS</span>
                            </li>
                            <li
                                class="border rounded py-2 px-4 relative cursor-not-allowed"
                            >
                                <div
                                    class="border-t"
                                    style="top:0;  
                            left:0;
                            position:absolute;
                            width:3.5rem;
                            transform: rotate(45deg);
                            transform-origin: 0% 0%;"
                                >
                                </div>
                                <span>S</span>
                            </li>
                            <li class="border rounded py-2 px-4 hover:border-black">
                                <span>M</span>
                            </li>
                            <li class="border rounded py-2 px-4 hover:border-black">
                                <span>L</span>
                            </li>
                            <li class="border rounded py-2 px-4 hover:border-black">
                                <span>XL</span>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full flex flex-col gap-y-4 my-2">
                        <button
                            type="button"
                            class="w-full md:w-1/2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        >

                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;