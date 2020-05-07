import { Dex } from '../deps.ts'
import { DB_NAME, TABLE_NAME } from './config.ts'
import { setup } from './setup.ts'

const dex = Dex({ client: 'mysql' })
const client = await setup()

const password = 'password'
const insertQuery = dex.queryBuilder()
  .insert({ name: 'kanziw', email: 'kanziwoong@gmail.com', password })
  .into(`${DB_NAME}.${TABLE_NAME}`)
const insertResult = await client.execute(insertQuery.toString())

const selectQuery = dex.queryBuilder()
  .select()
  .from(`${DB_NAME}.${TABLE_NAME}`)
  .where({ id: insertResult.lastInsertId })
const { rows } = await client.execute(selectQuery.toString())

console.log(JSON.stringify(
  {
    insertResult,
    selectResult: { rows },
  },
  null,
  2,
))
