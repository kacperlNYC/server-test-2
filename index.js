// Kacper Letowski Web Dev Period 7 8
// Reflection in other file
const express = require('express');
const app = express()

const courses = [
    {id: 1, name: 'Web Dev'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'Cybersecurity'}
]

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello There')
})

app.get('/api/courses', (req, res)=>{
    res.send(courses);
})

app.get('/api/courses/:id', (req,res)=> {
    let course = courses.find(c=> c.id === parseInt(req.params.id))
    if (!course) {
        res.status(404).send('The course was not found')
        return
    }
    res.send(course);
})

app.post('/api/courses', (req,res) => {
    let name = req.body.name
    if (name.length >= 3)
    {
        const course ={
            //we assign an ID and a name property
            id: courses.length +1,
            name: name
        }
        courses.push(course)
        res.status(200).send(course)
    }
    else
    {
        res.status(404).send("Course name needs to be greater than or equal to 3 characters.")
    }
});

app.put('/api/courses/:id', (req,res)=>{
    let course = courses.find(c=> c.id === parseInt(req.params.id))
    if (!course) {
        res.status(404).send('The course was not found')
        return
    }
    else {
        course["name"] = req.body.name   
        res.status(200).send(course)
    }
});
    
app.delete('/api/courses/:id', (req,res)=>{
    course = courses.find(c=> c.id === parseInt(req.params.id))
    if (!course)
    {
        res.status(404).send('The course was not found')
        return
    }
    else
    {
        let index = courses.indexOf(course)
        courses.splice(index, index+1)
        res.status(200).send(course)

    }
});


app.listen(3000, () => {
    console.log("Listening on port 3000 ..")
})
