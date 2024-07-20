import { Hono } from 'hono'
import { renderer } from './renderer'
import { env, getRuntimeKey } from 'hono/adapter'

const app = new Hono()

app.use(renderer)

type Env = {
  MESSAGE: string;
}

app.get('/', (c) => {
  const { MESSAGE } = env<Env>(c)
  console.log(`MESSAGE: ${MESSAGE}`)
  console.log(`debug MESSAGE: ${c.env.MESSAGE}`)
  console.log(getRuntimeKey())
  return c.json({ message: MESSAGE })
})

export default app
