const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))
app.use((req,res,next)=> {
    console.log("Req method: ", req.method, " req url: ", req.originalUrl)
    next()
})
app.use((req, res, next) => {
    if (req.originalUrl === '/favicon.ico') {
      return res.status(204).end(); // No Content
    }
    next();
  });

let poems = [
    {
        id: 1, 
        "title": "Never Say Never",
        'author': "Shriya Patare",
        'poem': [
            [
                "The world is full of possibilities",
                "Provides us with several opportunities",
                "They may not always be appealing",
                "But can always give us some learning"
            ],
            [
                "Every moment, every chance",
                "Has the potential to lead to something significant",
                "All it needs is to be recognised",
                "Grabbed and taken advantage of, to lead to triumph"
            ],
            [
                "Never say never, for you never know",
                "The path it leads you to may help you grow",
                "Make you more experienced, wiser in a way",
                "So that you don't let go and are rewarded on the way"
            ],
        ],
        "img":"neversaynever.png"

    }
]
let count = 0
app.get('/api/poems', (request, response) => {
    count += 1
    console.log("Recieved a request: ", count)
    response.json(poems)
})


const PORT = process.env.port || 3001
app.listen(PORT, ()=> console.log("Server is listening on ", PORT))