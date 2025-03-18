export async function load() {
    const data = await import(`$lib/content/product.json`);
    return { data: data.default };
}

