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

        <!--  <p style="padding: 10px"><strong> Day: </strong>
        <%= day %>
    </p>
    <p style="padding: 10px"><strong> Start At: </strong>
        <%= start_at %>
    </p>
    <p style="padding: 10px"><strong> End At: </strong>
        <%= end_at %>
    </p> -->

    app.post('/users/new', (req, res) => {
    data.users.push(req.body)
    const id = data.users.length - 1
    res.redirect(`/users/${id}`)

})
// /users

<h1>
<%= name %>
</h1>
<p style="padding: 10px;"><strong> Name: </strong>
<%= users_fn %>
</p>
<p style="padding: 10px"><strong> Last Name: </strong>
<%= users_ln %>
</p>
<p style="padding: 10px"><strong> Email: </strong>
<%= users_email %>
</p>
<p style="padding: 10px"><strong> Password: </strong>
<%= users_psw %>
</p>

<% for (let i=0; i < schedulesLength; i++) { %>

<p style="padding: 10px;"><strong> User ID: </strong>
<%= schedules[i].user_id %>
</p>
<p style="padding: 10px"><strong> Day: </strong>
<%= schedules[i].day %>
</p>
<p style="padding: 10px"><strong> Start At: </strong>
<%= schedules[i].start_at %>
</p>
<p style="padding: 10px"><strong> End At: </strong>
<%= schedules[i].end_at %>
</p>
<% } %>

<h1>
            <%= users_fn %>
                <%= users_ln %> schedule
        </h1>
        <% for (let i=0; i < schedulesLength; i++) { %>
            <p style="padding: 10px"><strong> Day: </strong>
                <%= schedules[i].day %>
            </p>
            <p style="padding: 10px"><strong> Start At: </strong>
                <%= schedules[i].start_at %>
            </p>
            <p style="padding: 10px"><strong> End At: </strong>
                <%= schedules[i].end_at %>
            </p>
            <% } %>
