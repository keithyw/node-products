import { Request } from "express";

export interface Product {
    id: number,
    name: string,
    description: string,
    created: number,
    modified: number,
};

export interface GetProductRequest extends Request<{ id: Product['id' ]}> {}
export interface CreateProductRequest extends Request{}
export interface UpdateProductRequest extends Request<{ id: Product['id']}, any, Product> {}
export interface DeleteProductRequest extends Request<{ id: Product['id'] }> {}