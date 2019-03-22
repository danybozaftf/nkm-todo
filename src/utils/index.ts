/**
 * Makes sure that port is always of type number
 * @param port
 */
export function normalizePort(port: any = 8080): number {
  const PORT = parseInt(port, 10)
  if (isNaN(PORT)) {
    return port
  }
  if (PORT >= 0) {
    return PORT
  }
  return PORT
}
