import fs from 'fs'
export async function load({params}){
    const data=JSON.parse(fs.readFileSync('content/'+params.productname+'.json','utf-8'))
    return data
}
