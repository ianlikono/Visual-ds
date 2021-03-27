export const keyBy = <T extends object, K extends keyof T>(
  items: T[],
  attr: K
): Record<string, T> => {
  return items.reduce((obj, item) => {
    //TODO: //look at this
    // @ts-ignore
    obj[item[attr as string]] = item
    return obj
  }, {} as Record<string, T>)
}
