
    let goBtn=document.getElementsByClassName('btn')[0],
    reloadBtn=document.getElementById('reload'),
    setCards=document.getElementsByClassName('card'),
    changeCard=document.getElementsByTagName("img"),
    originalHtml = document.body.innerHTML;


 function open(){ 
  for (i=0; i<6; i++){
    var x1=getRandom();
    if (x1==1){
      document.getElementsByTagName("img")[i].style.transform = "rotate(180deg)", transform = "rotateY(-180deg)", transition ="1s";
  
  } else{
      document.getElementsByTagName("img")[i].style.transform = "rotate(0)";
  }
  };
setInterval('setCards[0].style.opacity="100"', 200);
setInterval('setCards[1].style.opacity="100"', 500);
setInterval('setCards[2].style.opacity="100"', 800);
setInterval('setCards[3].style.opacity="100"', 1100);
setInterval('setCards[4].style.opacity="100"', 1400);
setInterval('setCards[5].style.opacity="100"', 1700);
    }; 
    
    open();





  function makeRand(num) {
        var usedNumbers = {length : 0};
        function f() {
            if(usedNumbers.length == num) usedNumbers = {length : 0};
            var i = Math.floor(Math.random() * num);
            return i in usedNumbers ? f() : (usedNumbers.length++, usedNumbers[i]=true, ++i)
    
        }
        return f;
    }
    
    
    var a = makeRand(78);
    
    function getRandom(){
            return Math.floor(Math.random()* 2);
          };
          
       goBtn.addEventListener('click', function openCards(){
        goBtn.disabled = "true";
        goBtn.classList.remove('btn');
        goBtn.classList.add('clickon');
setTimeout('changeCard[0].setAttribute("src","/images/cards/"+a()+".jpg");', 100);
setTimeout('changeCard[1].setAttribute("src","/images/cards/"+a()+".jpg");', 400);
setTimeout('changeCard[2].setAttribute("src","/images/cards/"+a()+".jpg");', 700);
setTimeout('changeCard[3].setAttribute("src","/images/cards/"+a()+".jpg");', 1100);
setTimeout('changeCard[4].setAttribute("src","/images/cards/"+a()+".jpg");', 1500);
setTimeout('changeCard[5].setAttribute("src","/images/cards/"+a()+".jpg");', 1800);

      },
)

    reloadBtn.addEventListener("click", function(){
      location.reload()
    }
    )