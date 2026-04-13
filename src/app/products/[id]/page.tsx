const ProductDetail = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params

    return <h1>Sản phẩm có mã chi tiết là {id}</h1>
}

export default ProductDetail