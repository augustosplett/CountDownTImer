const body = document.querySelector('.corpo');
const criar = document.querySelector('.btn');
const goalData = new Date(document.querySelector('.destino'));
var goalName = document.querySelector('.goalName');

var now = new Date(); 

function timeRemaning(dataAlvo, dataAtual){
    return dataAlvo.getFullYear() - dataAtual.getFullYear();
}

//var datetime = "Last Sync: " + currentdate.getDate() + "/"
//                + (currentdate.getMonth()+1)  + "/" 
//                + currentdate.getFullYear() + " @ "  
//                + currentdate.getHours() + ":"  
//                + currentdate.getMinutes() + ":" 
//                + currentdate.getSeconds();

criar.addEventListener('click', element =>{
    //body.innerText = goalName.value +goalData.value + datetime
    var ano = goalData.getFullYear();
    body.innerText = ano;
    //body.innerText = timeRemaning(goalData.value ,now)

})
