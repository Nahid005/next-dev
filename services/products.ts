export async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
}

export async function getSearchProducts(searchParams: string) {
  let params = "";
  if (searchParams) {
    params += `/search?q=${searchParams}`;
  }

  const response = await fetch(
    `https://dummyjson.com/products${params ? params : ""}`,
  );

  if (!response.ok) throw new Error("Failed to fetch product search");
  return response.json();
}

export async function getUsers() {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
}

export async function getOrders() {
  const response = await fetch("https://dummyjson.com/recipes");

  if (!response.ok) throw new Error("Faled to fetch orders");
  return response.json();
}

export async function getComments() {
  const response = await fetch("https://dummyjson.com/comments");

  if (!response.ok) throw new Error("Failed to fetch comments");
  return response.json();
}
