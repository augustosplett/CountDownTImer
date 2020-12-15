const body = document.querySelector('.corpo');
const criar = document.querySelector('.btn');
const goalData = document.querySelector('.destino');
const goalName = document.querySelector('.goalName')
criar.addEventListener('click', element =>{
    body.innerText = goalName.value + goalData.value
})
//function criarAA(){
//    console.log('hello');
//    console.log(body);
//    body.innerText ="hello"
//}