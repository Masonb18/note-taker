const express= require('express');
const path= require('path');
const fs= require('fs');
const app = express();
const PORT= process.env.PORT || 3001;

app.use(express.static('public'))
app.use(express.json())


app.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.get('/api/notes', (req, res) =>{
    fs.readFile(path.join(__dirname, './db/db.json'), 'utf8', (err, data)=>{
        if (err){
            console.log(err)
            res.json('could not read file')
        }else {
            res.json(JSON.parse(data))
        }
    })
})

app.post('/api/notes', (req, res) =>{
    console.log(req.body)
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, () =>{
    console.log('server running on' + PORT)
})