export const backURL = process.env.REACT_APP_BACK_URL;

export async function queryFetch(dataQuery) {
  const response = await fetch(backURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: dataQuery })
    });
  const data = await response.json();
  console.log("query data:");
  console.log(data.data);
  return data;
}