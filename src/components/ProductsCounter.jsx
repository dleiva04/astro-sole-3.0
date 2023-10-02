import { useState, useEffect } from 'react';

const ProductsCounter = ({ collection_id }) => {
    const [count, setCount] = useState("...");

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/count?collection_id=${collection_id}`)
            .then((response) => response.json())
            .then((data) => {
                setCount(data.count);
                setIsLoading(false);
            })
            .catch((error) => console.error(error));
    }, [collection_id]);


    if (isLoading) {
        return <p></p>;
    }

    return <p>{count} productos</p>;
};

export default ProductsCounter;