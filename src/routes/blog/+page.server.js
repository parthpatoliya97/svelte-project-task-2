import fs from 'fs'
export async function load() {
    const data=JSON.parse(fs.readFileSync('content/blog.json','utf-8'))
    return data
}

