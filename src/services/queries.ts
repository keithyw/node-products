export const Queries = {
    GetProducts: `
      SELECT *
      FROM 
        products
      ORDER BY 
        created
    `,
    GetById: `
      SELECT *
      FROM 
        products
      WHERE
        id = ?
    `,
    CreateProduct: `
      INSERT INTO products (id, category_id, name, description, created, modified)
      VALUES (NULL, ?, ?, ?, UNIX_TIMESTAMP(NOW()), UNIX_TIMESTAMP(NOW()))
    `,
    DeleteProduct: `
      DELETE FROM products
      WHERE id = ?
    `,
    UpdateProduct: `
      UPDATE products SET category_id = ?, name = ?, description = ?, modified = UNIX_TIMESTAMP(NOW())
      WHERE id = ?
    `,

}