'use client'
import ProductPage from "@/app/products/_page/ProductPage";
import { Suspense } from "react";

const Products = () => {
    return <Suspense>
        <ProductPage />
    </Suspense>
}

export default Products;