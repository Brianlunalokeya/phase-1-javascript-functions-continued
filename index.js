// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
  }
  
  function wrapAdjective(flair = '*') {
    return function(adj = 'special') {
      return `You are ${flair}${adj}${flair}!`;
    }
  }
  
saturdayFun(); // This Saturday, I want to roller-skate!
saturdayFun('bake cookies'); // This Saturday, I want to bake cookies!

mondayWork(); // This Monday, I will go to the office.
mondayWork('work from home'); // This Monday, I will work from home.

const encouragingPromptFunction = wrapAdjective("!!!");
encouragingPromptFunction(); // You are *special*!!!
encouragingPromptFunction('a dedicated programmer'); // You are !!!a dedicated programmer!!!
wrapAdjective("%")("a dedicated programmer"); // You are %a dedicated programmer%!
