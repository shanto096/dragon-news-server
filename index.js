const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000;

app.use(cors())

const categories = require("./data/category.json")
const news = require("./data/news.json")

app.get('/category', (req, res) => {
    res.send(categories)
})
app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const newsId = news.find(n => n._id === id)
    res.send(newsId)
})
app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news)
    } else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id)
        res.send(categoryNews)
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})