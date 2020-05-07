import { Application } from '../deps.ts'
import UserRoutes from './routes/users.ts'

const app = new Application({ port: 3001 })
app.use('/users', UserRoutes)

await app.run()
