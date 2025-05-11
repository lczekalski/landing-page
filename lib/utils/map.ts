export function ensureMap<T>(input: unknown): Map<string, T> {
  if (input instanceof Map) return input
  if (typeof input === "object" && input !== null) {
    return new Map(Object.entries(input as Record<string, T>))
  }
  return new Map() // fallback empty map
}
