import { normalizePort } from './index'

describe('Test utils', () => {
  describe('Normalize port', () => {
    test('It should return valid port number from string', () => {
      const port = normalizePort('3000')
      expect(port).toBe(3000)
    })
    test('It should return valid port number from valid number', () => {
      const port = normalizePort(3000)
      expect(port).toBe(3000)
    })
  })
})
