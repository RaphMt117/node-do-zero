// import {createServer} from 'node:http'

// const server = createServer((request, response)=> {
//     response.write('uywyywriy')

//     return response.end()
// })

// server.listen(9999)

import {fastify} from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'Hello, World!'
})

server.get('/hello', () => {
    const user = process.env.USER
    return `Hello, ${user}!`
})

server.listen({
    port: 3333,
})
