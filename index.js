const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wook:rejavaji@cluster0.t3axg.mongodb.net/test?authSource=admin&replicaSet=atlas-ofxa43-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))