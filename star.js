
    let goBtn=document.getElementsByClassName('btn')[0],
    reloadBtn=document.getElementById('reload'),
    setCards=document.getElementsByClassName('card'),

    originalHtml = document.body.innerHTML;

    function open(){ 
      for (i=0; i<15; i++){
        var x1=getRandom();
        if (x1==1){
          document.getElementsByTagName("img")[i].style.transform = "rotate(180deg)";
      
      } else{
          document.getElementsByTagName("img")[i].style.transform = "rotate(0)";
      }
      };
      setInterval('setCards[7].style.opacity="100"', 200);
      setInterval('setCards[2].style.opacity="100"', 500);
      setInterval('setCards[12].style.opacity="100"', 800);
      setInterval('setCards[6].style.opacity="100"', 1100);
      setInterval('setCards[5].style.opacity="100"', 1400);
      setInterval('setCards[8].style.opacity="100"', 1700);
      setInterval('setCards[9].style.opacity="100"', 2000);
      setInterval('setCards[13].style.opacity="100"', 2300);
      setInterval('setCards[3].style.opacity="100"', 2600);
      setInterval('setCards[0].style.opacity="100"', 2900);
      setInterval('setCards[10].style.opacity="100"', 3200);
      setInterval('setCards[14].style.opacity="100"', 3500);
      setInterval('setCards[4].style.opacity="100"', 3800);
      setInterval('setCards[1].style.opacity="100"', 4100);
      setInterval('setCards[11].style.opacity="100"', 4400);
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
        setTimeout('document.getElementsByTagName("img")[7].setAttribute("src","/images/cards/"+a()+".jpg");', 100);
        setTimeout('document.getElementsByTagName("img")[2].setAttribute("src","/images/cards/"+a()+".jpg");', 400);
        setTimeout('document.getElementsByTagName("img")[12].setAttribute("src","/images/cards/"+a()+".jpg");', 700);
        setTimeout('document.getElementsByTagName("img")[6].setAttribute("src","/images/cards/"+a()+".jpg");', 1000);
        setTimeout('document.getElementsByTagName("img")[5].setAttribute("src","/images/cards/"+a()+".jpg");', 1300);
        setTimeout('document.getElementsByTagName("img")[8].setAttribute("src","/images/cards/"+a()+".jpg");', 1600);
        setTimeout('document.getElementsByTagName("img")[9].setAttribute("src","/images/cards/"+a()+".jpg");', 1900);
        setTimeout('document.getElementsByTagName("img")[13].setAttribute("src","/images/cards/"+a()+".jpg");', 2200);
        setTimeout('document.getElementsByTagName("img")[3].setAttribute("src","/images/cards/"+a()+".jpg");', 2500);
        setTimeout('document.getElementsByTagName("img")[0].setAttribute("src","/images/cards/"+a()+".jpg");', 2800);
        setTimeout('document.getElementsByTagName("img")[10].setAttribute("src","/images/cards/"+a()+".jpg");', 3100);
        setTimeout('document.getElementsByTagName("img")[14].setAttribute("src","/images/cards/"+a()+".jpg");', 3400);
        setTimeout('document.getElementsByTagName("img")[4].setAttribute("src","/images/cards/"+a()+".jpg");', 3700);
        setTimeout('document.getElementsByTagName("img")[1].setAttribute("src","/images/cards/"+a()+".jpg");', 4000);
        setTimeout('document.getElementsByTagName("img")[11].setAttribute("src","/images/cards/"+a()+".jpg");', 4300);
       }
       )


    reloadBtn.addEventListener("click", function(){
      location.reload()
    }
    )
