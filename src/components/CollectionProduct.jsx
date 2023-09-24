import { useState } from 'react';

const CollectionProduct = ({ id, name, price, isOnSale, isRecommendation }) => {
    const [image, setImage] = useState("/image.jpg");
    return (
        <div>
            <a href={`/producto/${id}`}>
                <div className="relative">
                    <div
                        className="absolute top-0 right-0 pr-3 pt-3"

                    >
                    </div>
                    {
                        isOnSale ? (
                            <span className="absolute top-0 right-2 md:right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-rose-500 text-white">
                                -25%
                            </span>
                        ) : (
                            ""
                        )
                    }
                </div>
                <img
                    src={image}
                    className={`transition duration-200 ease-linear ${isRecommendation ? "h-[200px] md:h-[400px] " : ""
                        })`}
                    alt=""
                    onMouseOver={() => setImage("/image2.jpg")}
                    onMouseLeave={() => setImage("/image.jpg")}
                />
            </a>
            <div className={`py-2 mt-2 ${isRecommendation ? "w-28 md:w-full" : ""} `}>
                <a href={`/producto/${id}`} className="hover:underline">
                    <p
                        className={`font-extrabold ${isRecommendation ? "font-sm " : "font-lg "
                            }`}
                    >
                        {name}
                    </p>
                </a>
                <p
                    className={`py-1 ${isRecommendation ? "font-sm " : "font-lg "
                        } text-gray-600`}
                >
                    {price}
                </p>
            </div >
        </div>
    )
}

export default CollectionProduct;