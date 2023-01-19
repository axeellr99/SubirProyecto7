// const nasa_api= '35777O4PlWQnrbGeZLPEJ2Spf7DgqVExwc8Lk69N'
const MyUrl= 'https://pokeapi.co/api/v2/pokemon-form/'
const myDiv= document.querySelector('.ApiResult')
let myTitle=document.createElement('h1')
let picture = document.createElement('img')
let myNumOrden=document.createElement('h2')
let imagenLogo = document.createElement('img')
let value =1
function sumar(){
    value = value +1
    myApi()
}
function volver(){
    if(value===1){
        return
    }else{
        value -=1
    }
    myApi()
}

async function myApi(){
    try{
        let dataResponse= await fetch(`${MyUrl}${value}`)
        .then(res=>res.json())
        .then(data=>
        {    myTitle.innerText=`${data.name}`
            picture.src=`${data.sprites.front_shiny}`
            myNumOrden.innerText=` Numero de orden: ${data.id}`
            imagenLogo.src='https://res.cloudinary.com/practicaldev/image/fetch/s--3lgNK-fU--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/9ceg4vlucdeq5vshq8vy.png'
            imagenLogo.style.width='300px'
            imagenLogo.style.height='150px'
            imagenLogo.style.marginRight='200%'
            imagenLogo.style.marginTop='-200%'
            imagenLogo.style.boxShadow='0px 0px 15px'
            myDiv.appendChild(myTitle)
            myDiv.appendChild(picture)
            myDiv.appendChild(myNumOrden)
            myDiv.appendChild(imagenLogo)
        })
        return dataResponse
    }catch (error){
        console.log(error)
    }
}
myApi()