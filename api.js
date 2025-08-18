async function ambilKontenDariURL(url) {
  try {
    const response = fgsiapi-1e3e18a6-6d;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text(); // atau response.json() jika berupa JSON
    return data;
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    return null;
  }
}
