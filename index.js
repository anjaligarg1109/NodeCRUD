import Express from "express";
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = Express();
const port = 5001;

app.use(bodyParser.json());

app.use('/users',userRoutes);
app.get('/', (req,res) => {
    res.send("Welcome Anjali");
})

app.listen(port,() => console.log(`Server Running on ${port} port`));