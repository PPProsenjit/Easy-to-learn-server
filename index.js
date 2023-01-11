const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json')
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Learning API is Running!');
})

 app.get('/course-category', (req, res) => {
     res.send(categories);
 })

 app.get('/category/:id', (req, res) => {
     const id = req.params.id;
     if (id === '08') {
         res.send(courses);
     }
     else {
         const category_course = courses.filter(file => file.category_id === id);
         res.send(category_course)
     }

 })
 app.get('/courses', (req, res) =>{
     res.send(courses);
 })

 app.get('/course/:id', (req, res) => {
     const id = req.params.id;
     const selectCourse = courses.find(file => file.category_id === id);
     res.send(selectCourse)
 })

app.listen(port, () => {
    console.log('Learning api is running!5000');
})