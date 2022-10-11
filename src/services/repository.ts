import { execute } from './db';
import { Queries } from './queries';
import { Product } from './models';

export const getProducts = async () => {
    return execute<Product[]>(Queries.GetProducts, []);
}

export const getProductById = async (id: Product['id']) => {
    return execute<Product>(Queries.GetById, [id]);
}

export const insertProduct = async (product: Product) => {
    const result = await execute<{ affectedRows: number }>(Queries.CreateProduct, [
        product.name,
        product.description
    ]);
    return result.affectedRows > 0;
}

export const deleteProduct = async (id: Product['id'])  => {
    const result = await execute<{ affectedRows: number }>(Queries.DeleteProduct, [
        id
    ]);
    return result.affectedRows > 0;
}

export const updateProduct = async (product: Product) => {
    const result = await execute<{ affectedRows: number }>(Queries.UpdateProduct, [
        product.name,
        product.description,
        product.id
    ]);
    return result.affectedRows > 0;
}