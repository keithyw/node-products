import { Request } from "express";

export interface Category {
    id: number,
    name: string,
    created: number,
    modified: number,
}

export interface Product {
    id: number,
    category_id: number,
    name: string,
    description: string,
    created: number,
    modified: number,
};

export interface GetCategoryRequest extends Request<{ id: Category['id']}> {}
export interface CreateCategoryRequest extends Request{}
export interface UpdateCategoryRequest extends Request<{ id: Category['id']}, any, Category> {}
export interface DeleteCategoryRequest extends Request<{ id: Category['id']}> {}

export interface GetProductRequest extends Request<{ id: Product['id']}> {}
export interface CreateProductRequest extends Request{}
export interface UpdateProductRequest extends Request<{ id: Product['id']}, any, Product> {}
export interface DeleteProductRequest extends Request<{ id: Product['id'] }> {}