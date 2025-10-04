import type { Product } from "../types/Products";

export default function ProductCard({ product }: { product: Product }) {
    return (
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
                        {product.tags.map((tag: string, index: number) => {
                            return (
                                <div key={index} className="badge badge-outline">
                                    {tag}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
