export let Products =
  localStorage.length > 0 ? JSON.parse(localStorage.getItem("products")) : [];
export function getProductsFromStorage() {
  return (Products =
    localStorage.length > 0
      ? JSON.parse(localStorage.getItem("products"))
      : []);
}
