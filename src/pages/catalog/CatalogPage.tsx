//fetch!!!!!!

import { useEffect, useState } from "react";

import { getProducts } from "../services/ProductService";
import ProductCard from "../../Components/ProductCard";
import type { Product } from "../../types/Products";

//funcioon para mostrar la informacion del catalogo
function CatalogProducts() {
    const [productAll, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts(); //siempre va el await
            setProducts(data);
        };
        fetchData();
    }, []); //arregllo vacio para que solamente se obtenga la info cuando el componente se actualice en la pagina

    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {productAll.map((product: Product) => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
}

export default CatalogProducts;
