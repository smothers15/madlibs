var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
  color: generateRandomHexCode()
  });
});

router.post('/story', function(req, res, next) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory,
    color: generateRandomHexCode()
  });
});

module.exports = router;

function getStory(formData){
  if(formData.storyChoice === "1"){
    return generateStory1(formData);
  }else if (formData.storyChoice === "2"){
    return generateStory2(formData);
  }else if (formData.storyChoice === "3"){
    return generateStory3(formData);
  }else if(formData.storyChoice === "4"){
    return generateStoryRandom(formData);
  }else{
    return "invalid";
  }
}

function generateStoryRandom(formData) {
  let randomNumber = Math.round(Math.random()*3);
  if(randomNumber === 1){
    return generateStory1(formData);
  }else if (randomNumber === 2){
    return generateStory2(formData);
  }else if (randomNumber === 3) {
    return generateStory3(formData);
  }else{
    return `invalid, ${randomNumber}`;
  }
}

function generateStory1(formData){
  return `It was a ${formData.adjective1}, cold November day. I woke up to the ${formData.adjective2} smell of ${formData.noun1} roasting in the ${formData.room1} downstairs. I ${formData.verb1} down the stairs to see if I could help ${formData.verb2} the dinner. My mom said, "See if ${formData.name1} needs a fresh ${formData.noun2}."`
}
function generateStory2(formData){
  return `I can't believe it's already ${formData.Holiday}! I can't wait to put on my ${formData.noun1} and visit every ${formData.place} in my neighborhood. This year, I am going to dress up as a ${formData.noun2}.`
}
function generateStory3(formData){
  return `Today we are celebrating ${formData.Holiday} dinner at ${formData.person}'s house. When we arrived, my ${formData.familyRelation} greeted us with a big ${formData.verb1}.`
}


function generateRandomHexCode(){
  let hexCode = "#"
  while (hexCode.length < 7) {
    hexCode += (Math.round(Math.random()*15)).toString(16)
  }
  return hexCode
}



