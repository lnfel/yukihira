import * as path from "path"
import { fileURLToPath } from "url"
import { writeFile } from 'node:fs/promises'
import { crayon } from "crayon.js"
import manifest from "../build/manifest.json" with { type: "json" }

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function updatePWAManifest() {
    const start_url = '/yukihira/'
    console.log(`${crayon.lightYellow('Changing manifest.json for production:')}`)
    console.log(`   start_url: ${crayon.lightGreen(start_url)}`)
    manifest.start_url = start_url
    await writeFile(path.join(__dirname, '../build/manifest.json'), JSON.stringify(manifest, null, 4), { encoding: 'utf8' })
}

(async () => {
    Promise.all([
        updatePWAManifest()
    ])
    .catch((error) => {
        console.log(error)
    })
})()
