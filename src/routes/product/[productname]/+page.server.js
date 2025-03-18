export async function load({ params }) {
    const data = await import(`$lib/content/${params.productname}.json`);
    return { data: data.default };
}


