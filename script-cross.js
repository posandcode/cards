
    let goBtn=document.getElementsByClassName('btn')[0],
    reloadBtn=document.getElementById('reload'),
    originalHtml = document.body.innerHTML;

    function open(){ 
      for (i=0; i<10; i++){
        var x1=getRandom();
        if (x1==1){
          document.getElementsByTagName("img")[i].style.transform = "rotate(180deg)";
      
      } else{
          document.getElementsByTagName("img")[i].style.transform = "rotate(0)";
      }
      };
      setInterval('document.getElementsByClassName("card")[2].style.opacity="100"', 200);
      setInterval('document.getElementsByClassName("card")[3].style.opacity="100"', 500);
      setInterval('document.getElementsByClassName("card")[1].style.opacity="100"', 800);
      setInterval('document.getElementsByClassName("card")[4].style.opacity="100"', 1100);
      setInterval('document.getElementsByClassName("card")[0].style.opacity="100"', 1400);
      setInterval('document.getElementsByClassName("card")[5].style.opacity="100"', 1700);
      setInterval('document.getElementsByClassName("card")[9].style.opacity="100"', 2000);
      setInterval('document.getElementsByClassName("card")[8].style.opacity="100"', 2300);
      setInterval('document.getElementsByClassName("card")[7].style.opacity="100"', 2600);
      setInterval('document.getElementsByClassName("card")[6].style.opacity="100"', 2900);
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
setTimeout('document.getElementsByTagName("img")[2].setAttribute("src","/images/cards/"+a()+".jpg");', 100);
setTimeout('document.getElementsByTagName("img")[3].setAttribute("src","/images/cards/"+a()+".jpg");', 400);
setTimeout('document.getElementsByTagName("img")[1].setAttribute("src","/images/cards/"+a()+".jpg");', 700);
setTimeout('document.getElementsByTagName("img")[4].setAttribute("src","/images/cards/"+a()+".jpg");', 1000);
setTimeout('document.getElementsByTagName("img")[0].setAttribute("src","/images/cards/"+a()+".jpg");', 1300);
setTimeout('document.getElementsByTagName("img")[5].setAttribute("src","/images/cards/"+a()+".jpg");', 1600);
setTimeout('document.getElementsByTagName("img")[9].setAttribute("src","/images/cards/"+a()+".jpg");', 1900);
setTimeout('document.getElementsByTagName("img")[8].setAttribute("src","/images/cards/"+a()+".jpg");', 2200);
setTimeout('document.getElementsByTagName("img")[7].setAttribute("src","/images/cards/"+a()+".jpg");', 2500);
setTimeout('document.getElementsByTagName("img")[6].setAttribute("src","/images/cards/"+a()+".jpg");', 2800);
       }
       )


    reloadBtn.addEventListener("click", function(){
      location.reload()
    }
    )