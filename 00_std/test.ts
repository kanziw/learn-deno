import { assertEquals, assertNotEquals, fail, unreachable } from '../deps.ts'

Deno.test('basic', () => {
  assertEquals('hello', 'hello', 'hello is hello')
  assertNotEquals('hello', 'world', 'hello is not world')
})

Deno.test('scope scenario', () => {
  try {
    fail('Should throw error')
    unreachable()
  } catch (e) {
    assertEquals(e.message, 'Failed assertion: Should throw error')
  }
})
