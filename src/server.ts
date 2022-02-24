import express, { Request, Response} from 'express'
import path from 'path'
import mustache from 'mustache-express'
import Routes from './routes'

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))
server.use(Routes)
server.use((req: Request, res: Response) => {
    res.status(404).send('Não encontrado')
})

server.listen(3000)