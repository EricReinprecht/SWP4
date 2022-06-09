const express = require('express');
const bodyParser = require('body-parser')
const mongo = require("mongodb").MongoClient;
const url = "mongodb://10.115.2.28:8017"

const app = express();
const port = 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let db;
mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error("Bling:" + err);
      return;
    } else {
      console.log("found");
    }
    db = client.db("students");
    console.log("running");
  }
);

const students = [
        {
            "id": 1,
            "name":"Mani"
        },
        {
            "id": 2,
            "name":"Sinzi"
        },
        {
            "id": 3,
            "name":"Fynnfisch"
        },
        {
            "id": 4,
            "name":"Hayvann"
        },
        {
            "id": 5,
            "name":"Paaaaatrick"
        },
        {
            "id": 6,
            "name":"Wheelizüar"
        },
        {
            "id": 7,
            "name":"Reispflücker"
        },
    ]



app.get('/students/:id', (req, res) => {
    students.forEach(student => {
        if(req.params.id == student.id){
            res.send(student.name);
        }
    });
});

app.get('/students', (req, res) => {
    const id = req.params.id;
    res.send(students);
});


app.post('/students', (req, res) => {
    const content = req.body;
    students.push(students);
    res.send(content);
});

app.put('/', (req, res) => {
    res.send(students);
});

app.delete('/', (req, res) => {
    res.send(students);
});

app.listen(port, () => console.log(students))
