import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import { initSocketServer } from './lib/websocket/socket-server'
import { startPriceWorker } from './lib/queue/price-queue'

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT ?? '3000', 10)

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  })

  // Boot Socket.io
  initSocketServer(httpServer)

  // Boot BullMQ price-tracking worker
  startPriceWorker()

  httpServer.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
