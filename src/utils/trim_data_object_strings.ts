export default function trimDataObjectStrings<T extends Record<string, any>>(data: T): T  {
  const trimmedData: T = { ...data };
  for (const key in trimmedData) {
    if (typeof trimmedData[key] === "string") {
      trimmedData[key] = (trimmedData[key] as string).trim() as T[typeof key]; // More precise type assertion
    }
  }
  return trimmedData;
};