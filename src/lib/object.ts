export const toNonNull = <T extends object>(self: T) => {
  const result = {} as Record<string, any>;

  for (const [key, value] of Object.entries(self))
    if (value) result[key] = value;

  return result as T;
};
