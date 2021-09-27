import  Express, { Router }  from "express";
import { v4 as uuidv4 } from 'uuid';
const router = Express.Router();

let users = []

router.get('/',(req,res)=> {
    res.send(users);
});

router.post('/', (req,res) => {
    const data = req.body;
    users.push({...data, id:uuidv4()});
    res.send(users);
});

router.get('/:id', (req,res) => {
    const { id } = req.params;
    const userFound = users.find((user) => user.id == id)
    res.send(userFound);
});

router.delete('/:id',(req,res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id == id)
    res.send(`User with ${id} has been deleted`);
});

router.patch('/:id',(req,res)=>{
    const { id } = req.params;
    const {name, age} = req.body;

    const user = users.find((user) => user.id == id)
    
    if(name) user.name = name;
    if(age) user.age = age;

    res.send(`user with ${id} has been Updated`);
});
export default router;