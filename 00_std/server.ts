import { serve } from '../deps.ts'

const s = serve({ port: 8000 })
console.log('http://localhost:8000/')

for await (const req of s) {
  const { method, url, proto, headers } = req
  req.respond({
    body: JSON.stringify({
      method,
      url,
      proto,
      headers,
    }),
  })
}
