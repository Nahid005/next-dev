export interface Dimensions {
    width: number,
    height: number,
    depth: number,
}

export interface Review {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

export interface Meta {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string,
}

export interface Product {
    readonly id: number,
    title: string,
    description?: string,
    category?: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand?: string,
    readonly sku: string,
    weight: number,
    dimensions: Dimensions,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: Review[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: Meta,
}

export interface Gram {
    name: string,
    age: number,
}

export interface Locations {
    union: string,
    para: string,
    gram: Gram,
}

export interface Address {
    city: string,
    country: string,
    locations: Locations
}

export type isActive = number | boolean;