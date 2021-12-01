import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const commands = {
    init: async (problem) => {
        await writeFile(join(__dirname, `../data/${problem}.txt`), '')

        const template = await readFile(join(__dirname, '../solutionTemplate.js'), 'utf-8')
        const contents = template.replaceAll('FILENAME', problem)

        await writeFile(join(__dirname, `../solutions/${problem}.js`), contents)

        console.log(`Problem initialized

Paste data in ./data/${problem}.txt

Write solutions to parts 1 and 2 in ./solutions/${problem}.js

Run solutions with \`npm run solve ${problem}\``)
    },
    solve: (problem) => {

    }
}

const run = async (args) => {
    const command = args[2]
    const problem = args[3]
    if (!problem) {
        throw new Error('Please specify the name of the problem')
    }

    try {
        await commands[command](problem)
    } catch(err) {
        console.error(err)
    }
}

run(process.argv)
