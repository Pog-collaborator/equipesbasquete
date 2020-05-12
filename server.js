const express = require('express');

const server = express();

server.use(express.json());


const equipesbasquete = [

    {
        nome:'Chicago Bulls', arena:'Oracle Center'
    }
]




server.get('/equipesbasquete', function(request, response) {
    response.json(equipesbasquete);
})


server.post('/equipesbasquete', function(request, response)
{

    const {nome, arena} = request.body;

    equipesbasquete.push({nome, arena});
    response.status(204).send();
})


server.put('/equipesbasquete/:id', function(request, response)
{
    
const {id} = request.params;


const {nome, arena} = request.body;

for(let i =0; i <equipesbasquete.length; i++){
    if(equipesbasquete[i].nome ==id){
        equipesbasquete[i].nome = nome;
        equipesbasquete[i].arena = arena;
        break;
    }
}
return response.status(204).send();
})

server.delete('/equipesbasquete/:id', function(request, response){

const {id} = request.params;

for(let i =0; i <equipesbasquete.length; i++){
    if(equipesbasquete[i].nome ==id){
        equipesbasquete.splice(i,1);
        break;
    }
}
return response.status(204).send();

})


server.listen(process.env.PORT || 3000);