let me='nothing'
  let result='None'
  let computerMove='Nothing';
  let score=JSON.parse(localStorage.getItem(('score') ))||
  {
    Win:0,
    Lose:0,
    Tie:0
  };

  updateScore();
  
  function updateScore()
  {
    document.querySelector('.js-score').innerHTML= `Wins: ${score.Win}, Losses:${score.Lose}, Ties: ${score.Tie}`;
  }

  function compMove()
  {
    const randNum=Math.random();
    if(randNum>=0 && randNum<=1/3)
    computerMove='rock';
    else if(randNum>1/3 && randNum<=2/3)
    computerMove='paper';
    else
    computerMove='scissors';
  } 

  function decision(me,comp)
  {
    if(me===comp){
      score.Tie++;
      result=`It's a Tie.`;
    }

    else if((me==='rock' && comp==='paper')||(me==='paper' && comp==='scissors')||(me==='scissors' && comp==='rock'))
    {
      score.Lose++;
      result=`You Lose.`;
    }

    else 
    {
      score.Win++;
      result=`You Won.`
    }
    localStorage.setItem('score',JSON.stringify(score));//local storage only acceots strings
    updateScore();
    document.querySelector('.js-moves').innerHTML=`You <img src="imgs/${me}-emoji.png" class="move-icon"> Computer <img src="imgs/${computerMove}-emoji.png" class="move-icon">`;
    document.querySelector('.js-result').innerHTML=`${result}`; 
  }