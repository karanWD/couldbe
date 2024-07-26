export const truncate = (text: string, separator: string, length: number): string => {
  const splittedText = text.trim().split(separator)
  const slicedText = splittedText.slice(0, length)
  const finalText = slicedText.join(' ')
  const result = splittedText.length > length ? finalText + '...' : finalText
  return result
}
