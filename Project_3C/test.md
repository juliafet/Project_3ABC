/\* const bodyParser = require('body-parser')
const fs = require('fs')

let user_id_var
let day_var \*/

/\* app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/schedules', function (req, res) {
var body = {
user_id_var: req.body.user_id,
day_var: req.body.day
}
filePath = './data.js'

    fs.appendFile(filePath, JSON.stringify(body), function (err) {
        if (err) { throw err }
        res.status(200).json({
            user_id_var, day_var
        })
    }) */

    // project 3C step 2 route "/"
        <% for (let i=0; i < schedules.length; i++) { %>
        <p style="padding: 10px;"><strong> ID </strong>
            <%= schedules[i].id %>
        </p>
        <p style="padding: 10px"><strong> User ID </strong>
            <%= schedules[i].user_id %>
        </p>
        <p style="padding: 10px"><strong> Day </strong>
            <%= schedules[i].day %>
        </p>
        <p style="padding: 10px"><strong> Start AT </strong>
            <%= schedules[i].start_at %>
        </p>
        <p style="padding: 10px"><strong> End AT </strong>
            <%= schedules[i].end_at %>
        </p>
        <% } %>

app.post('/new', (req, res) => {
let new_user = req.body.user_id
console.log(typeof req.body.start_at)
db.query(
`INSERT INTO schedules(user_id, day, start_at, end_at)VALUES(${new_user}, ${req.body.day}, ${req.body.start_at}, ${req.body.end_at})`,
(err, res) => {
console.log(err, res);
db.end();
}
);
res.redirect('/new')
})

app.post('/new', (req, res) => {
console.log(typeof req.body.start_at)
db.query(
'INSERT INTO schedules(user_id, day, start_at, end_at)VALUES($(new_user), $(new_day), $(new_start_at), $(new_end_at)', {
new_user: req.body.user_id,
new_day: req.body.day,
new_start_at: req.body.start_at,
new_end_at: req.body.end_at
})

        res.redirect('/new')

})

// index.ejs

<body>
    <%- include('../includes/header.ejs') -%>
    <section id="form_container">
        <h1><%= name %></h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Day</th>
                    <th scope="col">Start At</th>
                    <th scope="col">End At</th>
                </tr>
            </thead>
            <tbody>
                <% for (let i=0; i < schedules.length; i++) { %>
                <tr>
                        <th scope="row"><%= schedules[i].id %></th>
                        <td>
                              <%= user[schedules[i].user_id - 1] %>
                        </td>
                        <td>
                            <%= day[schedules[i].day - 1] %>
                        </td>
                        <td>
                            <%= schedules[i].start_at %>
                        </td>
                        <td>
                            <%= schedules[i].end_at %>
                        </td>
                </tr>
                <% } %>
            </tbody>
        </table>
        <div id="return-button">
            <a href="/new" class="btn btn-secondary btn-lg" tabindex="-1" role="button">Add A New Schedule</a>
        </div>
        </section>
    <%- include('../includes/footer.ejs') -%>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
                crossorigin="anonymous"></script>
</body>
