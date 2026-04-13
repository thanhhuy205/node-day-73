import { useSearchParams } from "next/navigation";

const ProductPage = () => {
    const page = useSearchParams();
    const pageNumber = Number(page.get('page'));
    const products = [
        { id: 1, name: "Sản phẩm 1", price: "100.000đ" },
        { id: 2, name: "Sản phẩm 2", price: "200.000đ" },
        { id: 3, name: "Sản phẩm 3", price: "150.000đ" },
        { id: 4, name: "Sản phẩm 4", price: "180.000đ" },
    ];

    return (
        <>
            <h1>Sản Phẩm</h1>
            <p>Trang {isNaN(pageNumber) ? 1 : pageNumber <= 0 && 1}</p>
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

export default ProductPage;