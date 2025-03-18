export async function load() {
    const data = await import('$lib/content/comparison.json');
    return data.default;  
}

