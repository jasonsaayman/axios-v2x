export type ResponseHeaders = Record<string, string> & {
  'set-cookie'?: string[]
}
