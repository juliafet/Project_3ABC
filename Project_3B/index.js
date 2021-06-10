const express = require('express')
//var expressLayouts = require('express-ejs-layouts');
const app = express()


const port = process.env.port || 3000
const data = require('./data.js')

const bcrypt = require('bcrypt');
const saltRounds = 10;

// Static Files
app.use('/public', express.static('public'))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(expressLayouts);

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Welcome to our schedule website')
})

app.get('/schedules', (req, res) => {

    res.render('pages/schedules', {
        documentTitle: "Schedule website",
        name: "User's Schedules",
        schedules: data.schedules,
        schedulesLength: data.schedules.length,
    })
})

app.get('/schedules/new', (req, res) => {
    res.render('pages/schedules_new', {
        name: "New Schedule:",
        documentTitle: "Schedules website",
    })
})

app.post('/schedules/new', (req, res) => {
    data.schedules.push(req.body)
    const id = data.users.user_id
    res.redirect('/schedules')
})

app.get('/users', (req, res) => {

    res.render('pages/users', {
        documentTitle: "Schedule website",
        name: "MR.COFFEE Users:",
        users: data.users,
        usersLength: data.users.length,
    })
})

app.get('/users/new', (req, res) => {
    res.render('pages/users_new', {
        name: "New User:",
        documentTitle: "Schedule website",
    })
})

app.post('/users/new', (req, res) => {
    const plainTextPassword = req.body.password
    const hash = bcrypt.hashSync(plainTextPassword, saltRounds)
    req.body.password = hash
    data.users.push(req.body)
    const id = data.users.length - 1
    res.redirect(`/users/${id}`)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    res.render('pages/index', {
        name: "User's INFO",
        documentTitle: "Schedule website",
        users_fn: data.users[id].firstname,
        users_ln: data.users[id].lastname,
        users_email: data.users[id].email,
        users_psw: data.users[id].password,
    })
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

    res.render('pages/user_schedules', {
        name: "User's Schedules:",
        documentTitle: "Schedule website",
        schedulesLength: schedules.length,
        users_fn: data.users[id].firstname,
        users_ln: data.users[id].lastname,
        schedules: schedules,
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
