import { useEffect, useState } from "react";

import type { Product } from "../../types/Products";

function CatalogProducts() {
    const [productAll, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/dmi/data/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {productAll.map((product) => (
                    <div key={product.id} className="card bg-base-100 w-80 shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
                        <div className="card bg-base-100 w-96 shadow-sm rounded-xl overflow-hidden">
                            <img src={product.image} className="object-cover w-full h-48 hover:scale-105 transition-transform duration-300" />
                            <div className="card-body">
                                <h2 className="card-title text-lg font-bold flex flex-wrap gap-2">
                                    {product.name}
                                    <div className="badge badge-secondary">{product.category}</div>
                                </h2>
                                <p className="text-sm font-semibold text-gray-600">${product.price}</p>
                                <p className="text-sm">{product.description}</p>
                                <div className="card-actions flex flex-wrap gap-1 mt-2">
                                    <div className="badge badge-outline">{product.tags[0]}</div>
                                    <div className="badge badge-outline">{product.tags[1]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CatalogProducts;
