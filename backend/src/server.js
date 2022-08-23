import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());


server.post('/number/:number', (req, res)=>{
    const number = req.params.number;
    let count = 0;
    for(let i = 0; i < number; i++){
        if(i%3 === 0 || i%5 ===0){
            count += i;
        }
   }
   return res.status(200).json({result: count});
});

server.listen(3000, ()=>{
    console.log('Server running on port 3000 !');
});