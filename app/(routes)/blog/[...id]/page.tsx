

async function Product({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params


    return (
        <div>page numba: {id[0]}</div>
    )
}

export default Product