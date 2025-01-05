const express = require('express')
const app = express()
const PORT = 8000

let respondingVehicles = {
    'structureFire': {
        'mainResponse': 'Engine 51',
        'secondary': 'Brush 51/Brush 52',
        'manpower': 'Rescue 51',
        'lastOut': 'Engine 50'
    },
    'grassFire': {
        'mainResponse': 'Brush 51/Brush 52',
        'secondary': 'Engine 51',
        'manpower': 'Resuce 51',
        'lastOut': 'Engine 50'
    },
    'trafficAccident': {
        'mainResponse': 'Engine 50',
        'secondary': 'Rescue 51',
        'manpower': 'Brush51/Brush 52',
        'lastOut': 'Engine 51'
    },
    'fireServiceCall': {
        'mainResponse': 'Rescue 51',
        'secondary': 'Brush 51/Brush 52',
        'manpower': 'Engine 51',
        'lastOut': 'Engine 50'
    },
    'medical': {
        'mainResponse': 'Rescue 51',
        'secondaey': 'Brush 51/Brush 52',
        'manpower': 'Engine 50',
        'lastOut': 'Engine 51'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:incident', (req, res) => {
    const incidentType = req.params.incident
    if(respondingVehicles[incidentType]){
        res.json(respondingVehicles[incidentType])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on ${PORT}`)
})