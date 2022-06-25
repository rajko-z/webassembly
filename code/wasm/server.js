import express from 'express'
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log('Server listening on port 3000...'))