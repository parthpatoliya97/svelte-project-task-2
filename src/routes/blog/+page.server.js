export async function load() {
    const data = await import('$lib/content/blog.json');
    return data.default;  
}

