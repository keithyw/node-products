import { execute } from './db';
import { Queries } from './queries';
import { Category, Product } from './models';
import moment from 'moment';
const knexdb = require('../config/knex.config')

export const getCategories = async () => {
    return await knexdb('categories').orderBy('id', 'desc');
}

export const getCategoryById = async (id: Category['id']) => {
    return await knexdb('categories').where({id: id}).first();
}

export const insertCategory = async (category: Category) => {
    return await knexdb('categories').insert({
        name: category.name,
        created: moment().unix(),
        modified: moment().unix(),
    });
}

export const deleteCategory = async (id: Category['id']) => {
    return await knexdb('categories').where({id: id}).del();
}

export const updateCategory = async (category: Category) => {
    return await knexdb('categories').where({id: category.id}).update({
        name: category.name,
        modified: moment().unix(),
    });
}

export const getProducts = async () => {
    return execute<Product[]>(Queries.GetProducts, []);
}

export const getProductById = async (id: Product['id']) => {
    return execute<Product>(Queries.GetById, [id]);
}

export const insertProduct = async (product: Product) => {
    const result = await execute<{ affectedRows: number }>(Queries.CreateProduct, [
        product.category_id,
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
        product.category_id,
        product.name,
        product.description,
        product.id
    ]);
    return result.affectedRows > 0;
}