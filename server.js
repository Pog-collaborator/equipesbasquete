const express = require('express');

const server = express();

server.use(express.json());


var equipesbasquete = [

    {
        id: 1,
        nome:'Chicago Bulls', 
        valormercado: '20000000',
         arena:'Oracle Center'
    }
]




server.get('/equipesbasquete', function(request, response) {
    response.json(equipesbasquete);
})


server.post('/equipesbasquete', function(request, response)
{

    const {id, nome, valormercado, arena} = request.body;

    equipesbasquete.push({id, nome, valormercado, arena});
    response.status(204).send();
})


server.put('/equipesbasquete/:id', function(request, response)
{
    
const id = request.params.id;

const equipe = request.body;



equipesbasquete.forEach(e => {
    if(e.id == id){
        e.nome = equipe.nome;
        e.valormercado = equipe.valormercado;
        e.arena = equipe.arena;
        return
    }
})

return response.status(204).send();
})

server.delete('/equipesbasquete/:id', function(request, response){

    const id = request.params.id;


    equipesbasquete = equipesbasquete.filter(e => e.id != id);
    return response.status(204).send();

})


server.listen(process.env.PORT || 3000);