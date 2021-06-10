const express = require('express')
const app = express()

// postgres setup
const db = require('./database')

const port = process.env.port || 3000

app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    db.any('SELECT * FROM schedules;')
        .then((schedules) => {
            res.render('pages/index', {
                documentTitle: "Schedule website",
                name: "MR.COFFEE schedule :",
                schedules: schedules,
                day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                user: ['James', 'Tony', 'Ali', 'Spiderman', 'Donald']
            })
        })
        .catch((err) => {
        res.send(err)
        })
})

app.get('/new', (req, res) => {
    res.render('pages/new', {
        name: "New Schedule:",
        documentTitle: "Schedules website",
        day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        user: ['James', 'Tony', 'Ali', 'Spiderman', 'Donald']
            
    })
})

app.post('/new', (req, res) => {
    let new_user = req.body.user_id
    db.any(
        `INSERT INTO schedules(user_id, day, start_at, end_at)VALUES($1, $2, $3, $4);`, 
        [new_user, req.body.day, req.body.start_at, req.body.end_at])
        .then(() => {
            res.redirect('/new')
        })
        .catch((err) => {
            res.send(err)
                
            })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})