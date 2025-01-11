document.getElementById('structureFire').addEventListener("click", structure)
document.getElementById('grassFire').addEventListener('click',grass)
document.getElementById('trafficAccident').addEventListener('click',traffic)
document.getElementById('fireServiceCall').addEventListener('click',service)
document.getElementById('medical').addEventListener('click',medical)

async function structure(){
    try{
        const response = await fetch('https://ihvfd-response-api.onrender.com/api/structureFire')
      
        const data = await response.json()
          document.querySelector('#firstDue').innerText = data.mainResponse
          document.querySelector('#secondary').innerText = data.secondary
          document.querySelector('#manpower').innerText = data.manpower
          document.querySelector('#lastOut').innerText = data.lastOut
    }
    catch(error){
        (console.error(error)
        )
    }
}
async function grass(){
    try{
        const response = await fetch('https://ihvfd-response-api.onrender.com/api/grassFire')
      
        const data = await response.json()
          document.querySelector('#firstDue').innerText = data.mainResponse
          document.querySelector('#secondary').innerText = data.secondary
          document.querySelector('#manpower').innerText = data.manpower
          document.querySelector('#lastOut').innerText = data.lastOut
    }
    catch(error){
        (console.error(error)
        )
    }
}
async function traffic(){
    try{
        const response = await fetch('https://ihvfd-response-api.onrender.com/api/trafficAccident')
      
        const data = await response.json()
          document.querySelector('#firstDue').innerText = data.mainResponse
          document.querySelector('#secondary').innerText = data.secondary
          document.querySelector('#manpower').innerText = data.manpower
          document.querySelector('#lastOut').innerText = data.lastOut
    }
    catch(error){
        (console.error(error)
        )
    }
}
async function service(){
    try{
        const response = await fetch('https://ihvfd-response-api.onrender.com/api/fireServiceCall')
      
        const data = await response.json()
          document.querySelector('#firstDue').innerText = data.mainResponse
          document.querySelector('#secondary').innerText = data.secondary
          document.querySelector('#manpower').innerText = data.manpower
          document.querySelector('#lastOut').innerText = data.lastOut
    }
    catch(error){
        (console.error(error)
        )
    }
}
async function medical(){
    try{
        const response = await fetch('https://ihvfd-response-api.onrender.com/api/medical')
      
        const data = await response.json()
          document.querySelector('#firstDue').innerText = data.mainResponse
          document.querySelector('#secondary').innerText = data.secondary
          document.querySelector('#manpower').innerText = data.manpower
          document.querySelector('#lastOut').innerText = data.lastOut
    }
    catch(error){
        (console.error(error)
        )
    }
}