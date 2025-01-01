export interface simplifiedProduct {
    images: any
    _id: string,
    name: string,
    price: number,
    slug: string,
    category: string,
    imageUrl: string
}

export interface fullProduct {
    _id: string,
    images: string[],
    name: string,
    description: string,
    slug: string,
    category: string
    price: number,
    product_id: string
}