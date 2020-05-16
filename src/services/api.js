export async function getCategories() {
  // implement here
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();

  return data;
}

export async function getCategory(categoryId) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getQuery(query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
  const id = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(id);
  const data = await response.json();

  return data;
}
