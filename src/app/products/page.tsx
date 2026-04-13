import ProductPage from "@/app/products/_page/ProductPage";
import { Suspense } from "react";

const Products = ({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) => {
    return <Suspense fallback={<p>Đang tải...</p>}>
        <ProductPage searchParams={searchParams} />
    </Suspense>
}

export default Products;