const express = require('express')
var axios = require("axios");
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {

  console.log(path.join(__dirname,'public'))
  return res.sendFile('public/abc.html' , { root : __dirname});
  
})


  app.get('/searchword', (req, res) => {
  // res.send('Hello World!')
 console.log(req.params)

var options = {
  method: 'GET',
  url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
  params: {word: req.query.word},
  headers: {
    'X-RapidAPI-Key': 'd3fc4df633msh6fc141f4521bc49p14f6e2jsnd600f776cfcd',
    'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  res.json(response.data)
}).catch(function (error) {
  console.error(error);
});

// let response={}
//   response.data={
//   definition: '1. Possessing quickness of intellect, skill, dexterity, talent, or adroitness; expert. Though there were many clever men in England during the latter half of the seventeenth century, there were only two great creative minds. Macaulay. Be good, sweet maid, and let who will be clever. C. Kingsley. 2. Showing skill or adroitness in the doer or former; as, a clever speech; a clever trick. Byron. 3. Having fitness, propriety, or suitableness. "T would sound more clever To me and to my heirs forever. Swift. 4. Well-shaped; handsome. "The girl was a tight, clever wench as any was." Arbuthnot. 5. Good-natured; obliging. [U. S.] Syn. -- See Smart.',   
//   word: 'clever',
//   valid: true
//   };
  

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





// const express = require('express')
// var axios = require("axios").default;
// const path=require("path");
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public'))
//   return res.sendFile('public/index2.html' , { root : __dirname});
// });


//   app.get('/searchword', (req, res) => {
//   //  res.send('Helllo word!! Keshvii')
//     console.log(req.params)


//    var options = {
//   method: 'GET',
//   url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
//   params: {word: 'clever'},
//   headers: {
//     'X-RapidAPI-Key': 'd3fc4df633msh6fc141f4521bc49p14f6e2jsnd600f776cfcd',
//     'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
//   }
//   };

//   let response={}
//   response.data={
//   definition: '1. Possessing quickness of intellect, skill, dexterity, talent, or adroitness; expert. Though there were many clever men in England during the latter half of the seventeenth century, there were only two great creative minds. Macaulay. Be good, sweet maid, and let who will be clever. C. Kingsley. 2. Showing skill or adroitness in the doer or former; as, a clever speech; a clever trick. Byron. 3. Having fitness, propriety, or suitableness. "T would sound more clever To me and to my heirs forever. Swift. 4. Well-shaped; handsome. "The girl was a tight, clever wench as any was." Arbuthnot. 5. Good-natured; obliging. [U. S.] Syn. -- See Smart.',   
//   word: 'clever',
//   valid: true
//   };
//   console.log(response.data);
//   res.json(response.data)
// })
// // 

// // axios.request(options).then(function (response) {
// //   console.log(response.data);
// // }).catch(function (error) {
// //   console.error(error);
// // });
  

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port} http://localhost:3000`)
// })


//1. express node js visited
//2. getting started
//3. search hello word example
//4. node js run for,(npm run start)
// nodemon -\server.js
// terminal ma run karvu "node server.js"
//5. http://localhost:3000 clock direct to navigate
//6. rapidapi Request ma jay ne Dictionary Test 1 ma nodejs select kari ne Axios select karvu baju ma </. clicked