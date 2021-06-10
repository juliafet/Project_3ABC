const express = require('express')
const app = express()
const port = process.env.port || 3000
const data = require('./data.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const bcrypt = require('bcrypt');
const saltRounds = 10;


//Step 2

app.get('/', (req, res) => {
    res.send('Welcome to our schedule website')
    //console.log('Welcome to our schedule website')
})

app.get('/users', (req, res) => {
    res.send(data.users)
    //console.log('Welcome to our schedule website')
})

app.get('/schedules', (req, res) => {
    res.send(data.schedules)
    //console.log('Welcome to our schedule website')
})

//Step 3

app.get('/users/:id', (req, res) => {
    if (req.params.id > data.users.length)
        res.send("Not found")
    else
        res.send(data.users[req.params.id])
})

app.get('/users/:id/schedules', (req, res) => {
    const id = Number(req.params.id)
    let schedules = []

    for (let i = 0; i < data.schedules.length; i++) {
        let currentSchedule = data.schedules[i]
        if (currentSchedule.user_id == id) {
            schedules.push(currentSchedule)
        }
    }
    if (schedules.length === 0) {
        res.send("User not found")
    } else {
        res.send(schedules)
    }
})

//Step 4

app.post('/schedules', (req, res) => {
    data.schedules.push(req.body)
    res.send(req.body)
})

app.post('/users', (req, res) => {
    const plainTextPassword = req.body.password
    const hash = bcrypt.hashSync(plainTextPassword, saltRounds)
    req.body.password = hash
    data.users.push(req.body)
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})