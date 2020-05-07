import { DB_NAME, TABLE_NAME } from './config.ts'
import { setup } from './setup.ts'

const client = await setup()

const password = 'password'
const insertResult = await client.execute(`
  INSERT INTO ${DB_NAME}.${TABLE_NAME} (name, email, password)
  VALUES ("kanziw", "kanziwoong@gmail.com", ?);`,
  [ password ],
)

const { rows } = await client.execute(`
  SELECT * from ${DB_NAME}.${TABLE_NAME} WHERE id = ?;`,
  [ insertResult.lastInsertId ],
)

console.log(JSON.stringify(
  {
    insertResult,
    selectResult: { rows },
  },
  null,
  2,
))
