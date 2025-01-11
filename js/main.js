document.getElementById('structureFire').addEventListener("click", structure)
// document.getElementById('grassFire').addEventListener('click',grass)
// document.getElementById('trafficAccident').addEventListener('click',traffic)
// document.getElementById('fireServiceCall').addEventListener('click',service)
// document.getElementById('medical').addEventListener('click',medical)

async function structure(){
    try{
        const response = await fetch('https://ihvfd-response-api.onrender.com/api/structureFire')
      
        const data = await response.json()

          console.log(data)
        // document.querySelector('#firstDue').innerText = data.mainResponse
    }
    catch(error){
        (console.error(error)
        )
    }
}