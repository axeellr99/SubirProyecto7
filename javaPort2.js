const MyUrl='https://pokeapi.co/api/v2/pokemon-form/4'
// const myDiv= document.querySelector('div')
// let picture = document.createElement('img')
async function myApi(){
    try{
        let dataResponse= await fetch(`${MyUrl}`)
        .then(res=>res.json())
        .then(data=>
        {    console.log(data)
        
        })
        return dataResponse
    }catch(error){
        console.log(error)
    }
}
myApi()