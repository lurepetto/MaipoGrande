export function getObject(key) {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);
    return value && JSON.parse(atob(value));
  } else {
    return {};
  }
}

export function setObject(key, value) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, btoa(JSON.stringify(value)));
  }
}
