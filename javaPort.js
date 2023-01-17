// const nasa_api= '35777O4PlWQnrbGeZLPEJ2Spf7DgqVExwc8Lk69N'
const MyUrl= 'https://pokeapi.co/api/v2/pokemon-form/1'
const myDiv= document.querySelector('div')
let myTitle=document.createElement('h1')
let picture = document.createElement('img')
let value =1
function sumar(){
    value = value +1
    myApi()
}
async function myApi(){
    try{
        let dataResponse= await fetch(`${MyUrl}${value}`)
        .then(res=>res.json())
        .then(data=>
        {    myDiv.innerText=`${data.name}`
            picture.src=`${data.back_default}`
            myDiv.appendChild(myTitle)
            myDiv.appendChild(picture)
        })
        return dataResponse
    }catch (error){
        console.log(error)
    }
}
myApi()