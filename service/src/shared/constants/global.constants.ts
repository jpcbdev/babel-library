import { DataSourceOptions } from "typeorm";

export const NODE_ENV = process.env.NODE_ENV ?? 'development';
export const SERVICE_NAME = process.env.SERVICE_NAME ?? '';
export const SERVICE_PORT = Number.parseInt(process.env.SERVICE_PORT) ?? 3000;
export const DB_CONNECTION = process.env.DB_CONNECTION ?? '';
export const HTTP_REQUEST_TIMEOUT = Number.parseInt(process.env.HTTP_REQUEST_TIMEOUT) ?? 5000;

export const DATABASE_TYPE = process.env.DATABASE_TYPE ?? 'mariadb' as any;
export const DATABASE_HOST = process.env.DATABASE_HOST ?? '';
export const DATABASE_USER = process.env.DATABASE_USER ?? '';
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD ?? '';
export const DATABASE_NAME = process.env.DATABASE_NAME ?? '';
export const DATABASE_PORT = Number.parseInt(process.env.DATABASE_PORT) ?? 3306;
export const DATABASE_CONNECTION_TIMEOUT = Number.parseInt(process.env.DATABASE_CONNECTION_TIMEOUT) ?? 15000;

export const DEFAULT_HTTP_RESPONSE = { message: 'Acción realizada con éxito', error: false }