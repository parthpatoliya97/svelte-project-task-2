export async function load() {
    const data = await import('$lib/content/industries.json');
    return data.default; 
}



