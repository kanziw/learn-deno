import { Client } from '../deps.ts'
import { DB_NAME, TABLE_NAME } from './config.ts'

export const setup = async () => {
  const client = await new Client().connect({
    hostname: '127.0.0.1',
    username: 'root',
    db: DB_NAME,
    password: 'root',
  })

  await client.execute(`DROP DATABASE IF EXISTS ${DB_NAME}`)
  await client.execute(`
    CREATE DATABASE ${DB_NAME}
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`)
  await client.execute(`USE ${DB_NAME}`)

  await client.execute(`DROP TABLE IF EXISTS ${TABLE_NAME}`)
  await client.execute(`
    CREATE TABLE ${DB_NAME}.${TABLE_NAME} (
      id BIGINT NOT NULL AUTO_INCREMENT,
      name VARCHAR(16) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(32) NOT NULL,
      created_at TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
      updated_at TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
      PRIMARY KEY (id),
      UNIQUE INDEX email_UNIQUE (email ASC)
    );
`)

  return client
}
