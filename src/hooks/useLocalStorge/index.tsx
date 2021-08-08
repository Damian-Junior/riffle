import { useEffect, useState } from "react";

function getValue(key: string, initialValue: string |null): string | null {
let savedValue: string |null = JSON.parse(localStorage.getItem(key) as string);
  if (savedValue) return savedValue;
  return initialValue;
}
const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState<string|null>( getValue(key, initialValue));
  

  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [value]);
  return [value, setValue];
};
export default useLocalStorage;
