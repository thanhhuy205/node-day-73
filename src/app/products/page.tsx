'use client'
import { useSearchParams } from "next/navigation";

const Products = () => {
    const page = useSearchParams();
    const products = [
        { id: 1, name: "Sản phẩm 1", price: "100.000đ" },
        { id: 2, name: "Sản phẩm 2", price: "200.000đ" },
        { id: 3, name: "Sản phẩm 3", price: "150.000đ" },
        { id: 4, name: "Sản phẩm 4", price: "180.000đ" },
    ];

    return (
        <>
            <h1>Sản Phẩm</h1>
            <p>Trang {page.get("page") ?? 1}</p>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Products;