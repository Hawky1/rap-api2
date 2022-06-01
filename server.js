const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors ())


let rappers = {

  '21 savage' : {
  'age' : 28,
  'birthName' : '21 Savage',
  'birthYear' : '1993' 
},
'chancellor the Rapper' : {
  'age' : 28,
  'birthName' : 'Chance The rapper',
  'birthYear' : '1993' 
},
'22 not Savage' : {
  'age' : 28,
  'birthName' : 'Muhammad Al Thaq been',
  'birthYear' : '1993' 
},

'dylan' : {
  'age' : 28,
  'birthName' : 'dylan',
  'birthYear' : 'dylan' 
},

  
 }

app.get('/', (request, response ) => {

  response.sendFile(__dirname + '/index.html')

})


app.get('/api/rappers/:rapperName', (request, response ) => {

const rapName = request.params.rapperName.toLowerCase()
console.log(rapName)
if (rappers[rapName]){
  response.json(rappers[rapName])
}else{
  response.json(rappers['dylan'])
}
  

})
app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)

})




