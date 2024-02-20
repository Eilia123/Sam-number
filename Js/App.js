
let flag = "x";
let check_win = "x"


function restart(){
        // document.getElementById("gameboard").querySelectorAll('.circle').each(x=>{
    //     x.style.display = "none"
    //     }) 
    document.getElementById("circle0").style.display = "none" 
    document.getElementById("cross0").style.display = "none"  
    document.getElementById("circle1").style.display = "none" 
    document.getElementById("cross1").style.display = "none"
    document.getElementById("circle2").style.display = "none"  
    document.getElementById("cross2").style.display = "none"  
    document.getElementById("circle3").style.display = "none"  
    document.getElementById("cross3").style.display = "none"
    document.getElementById("circle4").style.display = "none" 
    document.getElementById("cross4").style.display = "none" 
    document.getElementById("circle5").style.display = "none" 
    document.getElementById("cross5").style.display = "none"
    document.getElementById("circle6").style.display = "none" 
    document.getElementById("cross6").style.display = "none" 
    document.getElementById("circle7").style.display = "none" 
    document.getElementById("cross7").style.display = "none"
    document.getElementById("circle8").style.display = "none" 
    document.getElementById("cross8").style.display = "none"

    flag = "o"
}

function creat_shape0(){
    if(flag == "o" && check_win == "x"){
        if(document.getElementById("cross0").style.display == "inline"){
         document.getElementById("circle0").style.display = "none"
        } 
        else{
         document.getElementById("circle0").style.display = "inline"
         flag = "x";
         check_win = "o"
        }
     }
     else{
         if(document.getElementById("circle0").style.display == "inline"){
             document.getElementById("cross0").style.display = "none"
         }
         else{
             document.getElementById("cross0").style.display = "inline"
             flag = "o";
             check_win = "x"
         }  
     }
    console.log(flag)
}
function creat_shape1(){
    if(flag == "o" &&  check_win == "x"){
        if(document.getElementById("cross1").style.display == "inline"){
         document.getElementById("circle1").style.display = "none"
        } 
        else{
         document.getElementById("circle1").style.display = "inline"
         flag = "x";
         check_win = "o"
        }
     }
     else{
         if(document.getElementById("circle1").style.display == "inline"){
             document.getElementById("cross1").style.display = "none"
         }
         else{
             document.getElementById("cross1").style.display = "inline"
             flag = "o";
             check_win = "x"
         }
         
     }
    console.log(flag)
}
function creat_shape2(){
    if(flag == "o" &&  check_win == "x"){
        if(document.getElementById("cross2").style.display == "inline"){
         document.getElementById("circle2").style.display = "none"
        } 
        else{
         document.getElementById("circle2").style.display = "inline"
         flag = "x";
         check_win = "o"
        }
     }
     else{
         if(document.getElementById("circle2").style.display == "inline"){
             document.getElementById("cross2").style.display = "none"
         }
         else{
             document.getElementById("cross2").style.display = "inline"
             flag = "o";
             check_win = "x"
         }  
     }
    console.log(flag)
}
function creat_shape3(){
    if(flag == "o" &&  check_win == "x"){
        if(document.getElementById("cross3").style.display == "inline"){
         document.getElementById("circle3").style.display = "none"
        } 
        else{
         document.getElementById("circle3").style.display = "inline"
         flag = "x";
         check_win = "o"
        }
     }
     else{
         if(document.getElementById("circle3").style.display == "inline"){
             document.getElementById("cross3").style.display = "none"
         }
         else{
             document.getElementById("cross3").style.display = "inline"
             flag = "o";
             check_win = "x"
         }  
     }
    console.log(flag)
}
function creat_shape4(){
    if(flag == "o" &&  check_win == "x"){
        if(document.getElementById("cross4").style.display == "inline"){
         document.getElementById("circle4").style.display = "none"
        } 
        else{
         document.getElementById("circle4").style.display = "inline"
         flag = "x";
         check_win = "o"
        }
     }
     else{
         if(document.getElementById("circle4").style.display == "inline"){
             document.getElementById("cross4").style.display = "none"
         }
         else{
             document.getElementById("cross4").style.display = "inline"
             flag = "o";
             check_win = "x"
         }  
     }
    console.log(flag)
}
function creat_shape5(){
    if(flag == "o" &&  check_win == "x"){
        if(document.getElementById("cross5").style.display == "inline"){
         document.getElementById("circle5").style.display = "none"
        } 
        else{
         document.getElementById("circle5").style.display = "inline"
         flag = "x";
         check_win = "o"
        }
     }
     else{
         if(document.getElementById("circle5").style.display == "inline"){
             document.getElementById("cross5").style.display = "none"
         }
         else{
             document.getElementById("cross5").style.display = "inline"
             flag = "o";
             check_win = "x"
         }
    }
console.log(flag)
}
function creat_shape6(){
    if(flag == "o" &&  check_win == "x"){
        if(document.getElementById("cross6").style.display == "inline"){
         document.getElementById("circle6").style.display = "none"
        } 
        else{
         document.getElementById("circle6").style.display = "inline"
         flag = "x";
         check_win = "o"
        }
     }
     else{
         if(document.getElementById("circle6").style.display == "inline"){
             document.getElementById("cross6").style.display = "none"
         }
         else{
             document.getElementById("cross6").style.display = "inline"
             flag = "o";
             check_win = "x"
         }  
     }
    console.log(flag)
}
function creat_shape7(){
    if(flag == "o" &&  check_win == "x"){
        if(document.getElementById("cross7").style.display == "inline"){
         document.getElementById("circle7").style.display = "none"
        } 
        else{
         document.getElementById("circle7").style.display = "inline"
         flag = "x";
         check_win = "o"
        }
     }
     else{
         if(document.getElementById("circle7").style.display == "inline"){
             document.getElementById("cross7").style.display = "none"
         }
         else{
             document.getElementById("cross7").style.display = "inline"
             flag = "o";
             check_win = "x"
         }  
     }
    console.log(flag)
}
function creat_shape8(){
    if(flag == "o" &&  check_win == "x"){
        if(document.getElementById("cross8").style.display == "inline"){
         document.getElementById("circle8").style.display = "none"
        } 
        else{
         document.getElementById("circle8").style.display = "inline"
         flag = "x";
         check_win = "o"
        }
     }
     else{
         if(document.getElementById("circle8").style.display == "inline"){
             document.getElementById("cross8").style.display = "none"
         }
         else{
             document.getElementById("cross8").style.display = "inline"
             flag = "o";
             check_win = "x"
         }  
     }
    console.log(flag)
}

function check(){
    document.getElementById("turn").innerText = `turn pleyer is ${flag}`

    if((document.getElementById("cross0").style.display == "inline") && (document.getElementById("cross1").style.display == "inline") && (document.getElementById("cross2").style.display == "inline")){

            setTimeout(MyReload, 100);
            function MyReload(){
            alert(`player ${check_win} in won`)

            restart()
         
    }


    }

    
    else if((document.getElementById("cross0").style.display == "inline") && (document.getElementById("cross4").style.display == "inline") && (document.getElementById("cross8").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)

        restart()
     
}
    }
    
    else if((document.getElementById("cross0").style.display == "inline") && (document.getElementById("cross3").style.display == "inline") && (document.getElementById("cross6").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)

        restart()
     
}
    }
    
    else if((document.getElementById("cross1").style.display == "inline") && (document.getElementById("cross4").style.display == "inline") && (document.getElementById("cross7").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)

        restart()
     
}

    }
    
    else if((document.getElementById("cross2").style.display == "inline") && (document.getElementById("cross4").style.display == "inline") && (document.getElementById("cross6").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)

        restart()
     
}
    }
    
    else if((document.getElementById("cross2").style.display == "inline") && (document.getElementById("cross5").style.display == "inline") && (document.getElementById("cross8").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)

        restart()
     
} 
    }
    
    else if((document.getElementById("cross3").style.display == "inline") && (document.getElementById("cross4").style.display == "inline") && (document.getElementById("cross5").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)
        restart()
     
} 
    }
    
    else if((document.getElementById("cross6").style.display == "inline") && (document.getElementById("cross7").style.display == "inline") && (document.getElementById("cross8").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)

        restart()
     
} 
    }
    
    else if((document.getElementById("circle0").style.display == "inline") && (document.getElementById("circle1").style.display == "inline") && (document.getElementById("circle2").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)
        restart()
     
}
    }
    
    else if((document.getElementById("circle0").style.display == "inline") && (document.getElementById("circle4").style.display == "inline") && (document.getElementById("circle8").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)
        restart()
     
}
    }
    
    else if((document.getElementById("circle0").style.display == "inline") && (document.getElementById("circle3").style.display == "inline") && (document.getElementById("circle6").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)
        restart()
        flag = "x"
     
}
    }
    
    else if((document.getElementById("circle1").style.display == "inline") && (document.getElementById("circle4").style.display == "inline") && (document.getElementById("circle7").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)
        restart()
}
    }
    
    else if((document.getElementById("circle2").style.display == "inline") && (document.getElementById("circle5").style.display == "inline") && (document.getElementById("circle8").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)
        restart()
}
    }
    
        else if((document.getElementById("circle2").style.display == "inline") && (document.getElementById("circle4").style.display == "inline") && (document.getElementById("circle6").style.display == "inline")){
            setTimeout(MyReload, 100);
            function MyReload(){
            alert(`player ${check_win} in won`)
            restart()
    }
    }
    
        else if((document.getElementById("circle3").style.display == "inline") && (document.getElementById("circle4").style.display == "inline") && (document.getElementById("circle5").style.display == "inline")){
            setTimeout(MyReload, 100);
            function MyReload(){
            alert(`player ${check_win} in won`)
            restart()
    }
    }
    
    else if((document.getElementById("circle6").style.display == "inline") && (document.getElementById("circle7").style.display == "inline") && (document.getElementById("circle8").style.display == "inline")){
        setTimeout(MyReload, 100);
        function MyReload(){
        alert(`player ${check_win} in won`)
        restart()
}
    }
    
    else if((document.getElementById("circle0").style.display == "inline" || document.getElementById("cross0").style.display == "inline") &&(document.getElementById("circle1").style.display == "inline" || document.getElementById("cross1").style.display == "inline") &&
    (document.getElementById("circle2").style.display == "inline" || document.getElementById("cross2").style.display == "inline") && (document.getElementById("circle3").style.display == "inline" || document.getElementById("cross3").style.display == "inline") &&
    (document.getElementById("circle4").style.display == "inline" || document.getElementById("cross4").style.display == "inline") && (document.getElementById("circle5").style.display == "inline" || document.getElementById("cross5").style.display == "inline") &&
    (document.getElementById("circle6").style.display == "inline" || document.getElementById("cross6").style.display == "inline") && (document.getElementById("circle7").style.display == "inline" || document.getElementById("cross7").style.display == "inline") &&
    (document.getElementById("circle8").style.display == "inline" || document.getElementById("cross8").style.display == "inline")){
        setTimeout(MyReload,100);
        function MyReload(){
        alert(`game eqully`)
        restart()
}
    }
    
    
}
