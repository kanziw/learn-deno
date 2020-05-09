import { ClientError, Router } from '../../deps.ts'

type User = {
  id: number
  name: string
}

const users: User[] = [
  { id: 1, name: 'kanziw' },
  { id: 2, name: 'reese' },
]

const router = new Router()

router.get('/', async () => {
  return users
})

router.get('/:userId', (ctx) => {
  const { userId } = ctx.req.params
  const user = users.find(({ id }) => id === userId)
  if (!user) {
    throw new ClientError(404, 'Not found user')
  }
  return user
})

export default router
