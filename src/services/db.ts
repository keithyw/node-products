import { createPool, Pool } from 'mysql';
import { DATA_SOURCES } from '../config/db.config';

const dataSource = DATA_SOURCES.dataSource;

let pool: Pool;

export const init = () => {
    try {
        pool = createPool({
            connectionLimit: 1,
            host: dataSource.HOST,
            user: dataSource.USER,
            password: dataSource.PASS,
            database: dataSource.DB,
        });
    } catch (error) {
        console.error('[mysql.connector][init][Error: ', error);
        throw new Error('failed to initialize pool');
    }
}

export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
    try {
        if (!pool) throw new Error('Pool was not created.')
        return new Promise<T>((res, rej) => {
            pool.query(query, params, (error, results) => {
                if (error) rej(error);
                else res(results);
            });
        });
    } catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed to execute MySQL query');
    }
}