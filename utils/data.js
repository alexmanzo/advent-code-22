import { readFileSync } from 'fs'
import { join } from 'path'

export function loadDataArray(problem) {
    const data = readFileSync(join(__dirname, `../data/${problem}.txt`), 'utf-8').split('\n')
    // handling auto added empty final line
    if (!data[data.length - 1]) return data.slice(0, -1)
    return data
}
