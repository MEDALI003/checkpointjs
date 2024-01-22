var card=Array.from(document.querySelectorAll('.card'))
var plus=Array.from(document.querySelectorAll('.fa-plus'))
var pl=Array.from(document.querySelectorAll('.pl'))
var minus=Array.from(document.querySelectorAll('.fa-minus'))
var heart=Array.from(document.querySelectorAll('.fa-heart'))
var trash=Array.from(document.querySelectorAll('.fa-trash'))
for (let i in plus) {
    plus[i].addEventListener('click',function () {
        x=plus[i].previousElementSibling;
        y=plus[i].nextElementSibling;
        v=document.querySelector('#tt')
        if (y.innerHTML<10) {
            y.innerHTML++
            u=(x.innerHTML)*(y.innerHTML)
            pl[i].innerHTML=(u)
            v.innerHTML=parseInt(v.innerHTML)+parseInt(x.innerHTML)
        }
    }
    )   
    
    
}
for (let i in minus) {
    minus[i].addEventListener('click',function () {
        x=plus[i].previousElementSibling;
        y=plus[i].nextElementSibling;
        v=document.querySelector('#tt')
        if (y.innerHTML>0) {
            y.innerHTML--
            u=(x.innerHTML)*(y.innerHTML)
            pl[i].innerHTML=(u)
            v.innerHTML=parseInt(v.innerHTML)-parseInt(x.innerHTML)
        }
    }
    )   
}
for (let i in trash) {
    trash[i].addEventListener('click',function () {
        x=plus[i].previousElementSibling;
        y=plus[i].nextElementSibling;
        v=document.querySelector('#tt')
        v.innerHTML=parseInt(v.innerHTML)-parseInt(x.innerHTML)*parseInt(y.innerHTML)
        card[i].remove()
        
    }
    )   
}
for (let i of heart) {
    i.addEventListener('click',function () {
        x=i.style
        if (x.color == "red") {
            x.color = "black";
        }        
        else{
            x.color="red"
        }
    }
    )  
    
 
}
