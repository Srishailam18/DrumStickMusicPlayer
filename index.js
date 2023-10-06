var btnLength=document.querySelectorAll(".drum").length;
for(var i=0;i<btnLength;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var innerHtml=this.innerHTML;
        makeSound(innerHtml);
        addAnimation(innerHtml);
            });

}

document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    addAnimation(event.key);
})

function makeSound(key)
{
    switch(key)
    {
                 case 'a': var crash=new Audio('sounds/crash.mp3');
                 crash.play();
                 break;

                 case 's': var kickBass=new Audio('sounds/kick-bass.mp3');
                 kickBass.play();
                 break;

                 case 'd': var snare=new Audio('sounds/snare.mp3');
                 snare.play();
                 break;

                 case 'f': var tom1=new Audio('sounds/tom-1.mp3');
                 tom1.play();
                 break;

                 case 'j': var tom2=new Audio('sounds/tom-2.mp3');
                 tom2.play();
                 break;

                 case 'k': var tom3=new Audio('sounds/tom-3.mp3');
                 tom3.play();
                 break;

                 case 'l': var tom4=new Audio('sounds/tom-4.mp3');
                 tom4.play();
                 break;

                 default:alert("try clicking better key");
                 break;
    }
}

function addAnimation(key)
{
    var activeBtn=document.querySelector("."+key);
    activeBtn.classList.toggle("pressed");
    //after some seconds the pressed class Should be removed so I will run setTimeOut Fun
    //setTimeOut fun after waiting for particular amount of time it will execute the provided fun
    setTimeout(function()
    {
        activeBtn.classList.remove("pressed");

    },150//ms
    )
}