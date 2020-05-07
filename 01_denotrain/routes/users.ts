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

// v0.2.1 기준 `/\/:([a-z]+)/g` RegExp 만 가능합니다.
// https://github.com/Caesar2011/denotrain/blob/28626e1540e22640d60e273330a4dc0571428409/Router.ts#L195
router.get('/:userid', (ctx) => {
  const { userid } = ctx.req.param
  const user = users.find(({ id }) => id === userid)
  if (!user) {
    throw new ClientError(404, 'Not found user')
  }
  return user
})

export default router
