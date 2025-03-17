import fs from 'fs'
export async function load() {
    const data=JSON.parse(fs.readFileSync('content/industries.json','utf-8'))
    return data
}

