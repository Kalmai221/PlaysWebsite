// This code was created by Caleb
// 2-19-21

onload = function (){
    // Eventlisteners writen by Kode Krasher and used with permission. 
    if (window.PointerEvent) {
    // Allows game to be played on all devices
    intro.addEventListener("pointerdown", play);
      } else if (window.TouchEvent) {
        intro.addEventListener("touchstart", play);

      } else {
        intro.addEventListener("mousedown", play); 
    }
function play() {
    intro.style.display = 'none';
    // declarration on variables
    var c = canvas.getContext('2d');
    var x = 25;
    var count = Math.floor((Math.random() * 4) );
    var number = Math.floor((Math.random() * 3) );
    var count2 = Math.floor((Math.random() * 4) );
    var number2 = Math.floor((Math.random() * 3) );
    var negative = Math.floor((Math.random() * -3) );
    var options = new Array("-80", "25", "115", "210");
    var interval = setInterval(draw, 10);
    var interval2 = setInterval(explosion, 10);
    var counter = setInterval(scoring, 100);
    // the four lains 
        clearInterval(interval2);    
    var xo1 = options[count];
    var xo2 = options[number];
    var xo3 = options[count2];
    var xo4 = options[number2];
    var xo5 = options[count2];
    var xo6 = options[number];
    var yo = -300;
    var yo2 = -390;
    var yo3 = -440;
    var yo4 = -350;
    var yo5 = -260;
    var yo6 = -400;
    // Position of the six cars
    var time = 0;
    var rate = 10;
    var RN = 0;
    var a = 0;
    var op = 1;
    var y = 300;
    var xl = 100;
    var yl = -200;
    var m = -100;
    var i = 20;
    var s1 = 0;
    var s2 = 50;
    var s3 = 105;
    var s4 = 242;
    var s5 = 143;
    var s6 = 183;
    var radius = 0;
    var getr = getR();
    function scoring(){
    score.innerText = time;
        time+=1;
        if(time % 500 == 0){
        interval = clearInterval(interval);    
    interval = setInterval(draw, rate);
    rate--;
        }
    }
    function showscore(){
        popup.innerText = "\nYour Score:\n" + time + "\n\ntap the screen to restart";
        popup.style.height = "75vh";
        popup.style.width = "65vw";
    }
    function draw(){
        canvas.width = 400;
    canvas.height = 550;
//makes canvas the size of the screen
    clear(); // clears canvas
    //draws the lines <
    for(a=0; a < 20;  a+=1){

        for(N=250; N >= xl; N+=0){
            xl+=95; 
            c.fillStyle ="yellow";
            c.fillRect (xl, yl + m, 12, 40);
        }
        xl = 0;
        if(m < 800){
            m+=100;
        }
        else{
            m=0;
        }
    }
    if(yl >= 0){
       yl= -300; 
    }
    //draws the lines >
    yl+=5;
    yo+=.9;
    yo2+=.9;
    yo3+=.9;
    yo4+=.9;
    yo5+=.9;
    yo6+=.9;
    // draws the cars <
c.drawImage(car,0,0,car.width,car.height, x, y, 200, 220);
c.drawImage(opponent,0,0,opponent.width,opponent.height, xo1, yo - s1, 300, 320); 
c.drawImage(opponent,0,0,opponent.width,opponent.height, xo2, yo2 - s2, 300, 320); 
c.drawImage(opponent,0,0,opponent.width,opponent.height, xo3, yo3 - s3, 300, 320); 
c.drawImage(opponent,0,0,opponent.width,opponent.height, xo4, yo4 - s4, 300, 320); 
c.drawImage(opponent,0,0,opponent.width,opponent.height, xo5, yo5 - s5, 300, 320); 
c.drawImage(opponent,0,0,opponent.width,opponent.height, xo6, yo6 - s6, 300, 320); 
    // draws the cars >
    
    // restarts the cars <
        if(yo - s1 >= 400){
        a1 = getR();
        xo1 = options[a1];
        yo = -300;
        s1 = getR() * 30;
        }
        if(yo2 - s2 >= 400){
        a2 = getR();
        xo2 = options[a2];
        yo2 = -300;
        s2 = getR() * 25;
        }
        if(yo3 - s3 >= 400){
        a3 = getR();
        xo3 = options[a3];
        yo3 = -300;
        s3 = getR() * 20;
        }
        if(yo4 - s4 >= 400){
        a4 = getR();
        xo4 = options[a4];
        yo4= -300;
        s4 = getR() * 25;
        }
        if(yo5 - s5 >= 400){
        a5 = getR();
        xo5 = options[a5];
        yo5 = -300;
        s5 = getR() * 28;
        }
        if(yo6 - s6 >= 400){
        a6 = getR();
        xo6 = options[a6];
        yo6= -300;
        s6 = getR() * 26;
        }
        // restarts the cars >
        
        
        // changes the speed of cars to keep them off each other <
    if(xo1 == xo2){
        if(s1 - s2 < 150){
            if(yo - s1 > yo2 - s2){
                yo+=.2;
            }
            else if(yo2 - s2 > yo - s1){
                yo2+=.2;
            }
        }
    }
    if(xo1 == xo3){
        if(s1 - s3 < 150){
            if(yo - s1 > yo3 - s3){
                yo+=.2;
            }
            else if(yo3 - s3 > yo - s1){
                yo3+=.2;
            }
        }
    }
    if(xo1 == xo4){
        if(s1 - s4 < 150){
            if(yo - s1 > yo4 - s4){
                yo+=.2;
            }
            else if(yo4 - s4 > yo - s1){
                yo4+=.2;
            }
        }
    }
    if(xo1 == xo5){
        if(s1 - s5 < 150){
            if(yo - s1 > yo5 - s5){
                yo+=.2;
            }
            else if(yo5 - s5 > yo - s1){
                yo5+=.2;
            }
        }
    }
    if(xo1 == xo6){
        if(s1 - s6 < 150){
            if(yo - s1 > yo6 - s6){
                yo+=.2;
            }
            else if(yo6 - s6 > yo - s1){
                yo6+=.2;
            }
        }
    }
    if(xo2 == xo3){
        if(s2 - s3 < 150){
            if(yo2 - s2 > yo3 - s3){
                yo2+=.2;
            }
            else if(yo3 - s3 > yo2 - s2){
                yo3+=.2;
            }
        }
    }
    if(xo2 == xo4){
        if(s2 - s4 < 150){
            if(yo2 - s2 > yo4 - s4){
                yo2+=.2;
            }
            else if(yo4 - s4 > yo2 - s2){
                yo4+=.2;
            }
        }
    }
    if(xo2 == xo5){
        if(s2 - s5 < 150){
            if(yo2 - s2 > yo5 - s5){
                yo2+=.2;
            }
            else if(yo5 - s5 > yo2 - s2){
                yo5+=.2;
            }
        }
    }
    if(xo2 == xo6){
        if(s2 - s6 < 150){
            if(yo2 - s2 > yo6 - s6){
                yo2+=.2;
            }
            else if(yo6 - s6 > yo2 - s2){
                yo6+=.2;
            }
        }
    }
    if(xo3 == xo4){
        if(s3 - s4 < 150){
            if(yo3 - s3 > yo4 - s4){
                yo3+=.2;
            }
            else if(yo4 - s4 > yo3 - s3){
                yo4+=.2;
            }
        }
    }
    if(xo3 == xo5){
        if(s3 - s5 < 150){
            if(yo3 - s3 > yo5 - s5){
                yo3+=.2;
            }
            else if(yo5 - s5 > yo3 - s3){
                yo5+=.2;
            }
        }
    }
    if(xo3 == xo6){
        if(s3 - s6 < 150){
            if(yo3 - s3 > yo6 - s6){
                yo3+=.2;
            }
            else if(yo6 - s6 > yo3 - s3){
                yo6+=.2;
            }
        }
    }
    if(xo4 == xo5){
        if(s4 - s5 < 150){
            if(yo4 - s4 > yo5 - s5){
                yo4+=.2;
            }
            else if(yo5 - s5 > yo4 - s4){
                yo5+=.2;
            }
        }
    }
    if(xo4 == xo6){
        if(s4 - s6 < 150){
            if(yo4 - s4 > yo6 - s6){
                yo4+=.2;
            }
            else if(yo6 - s6 > yo4 - s4){
                yo6+=.2;
            }
        }
    }
    if(xo5 == xo6){
        if(s5 - s6 < 150){
            if(yo5 - s5 > yo6 - s6){
                yo5+=.2;
            }
            else if(yo6 + s6  > yo5 + s5){
                yo6+=.2;
            }
        }
    }
    // changes the speed of cars to keep them off each other >
    // crash function <
    if(x > -81 && x < -55 && xo1 == -80){
        if(yo-s1 > 190 && yo-s1 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > -81 && x < -55 && xo2 == -80){
        if(yo2-s2 > 190 && yo2-s2 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > -81 && x < -55 && xo3 == -80){
        if(yo3-s3 > 190 && yo3-s3 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > -81 && x < -55 && xo4 == -80){
        if(yo4-s4 > 190 && yo4-s4 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > -81 && x < -55 && xo5 == -80){
        if(yo5-s5 > 190 && yo5-s5 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > -81 && x < -55 && xo6 == -80){
        if(yo6-s6> 190 && yo6-s6 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 0 && x < 65 && xo1 == 25){
        if(yo-s1 > 190 && yo-s1 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 0 && x < 65 && xo2 == 25){
        if(yo2-s2 > 190 && yo2-s2 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 0 && x < 65 && xo3 == 25){
        if(yo3-s3 > 190 && yo3-s3 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 0 && x < 65 && xo4 == 25){
        if(yo4-s4 > 190 && yo4-s4 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 0 && x < 65 && xo5 == 25){
        if(yo5-s5 > 190 && yo5-s5 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 0 && x < 65 && xo6 == 25){
        if(yo6-s6 > 190 && yo6-s6 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 85 && x < 150 && xo1 == 115){
        if(yo-s1 > 190 && yo-s1 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 85 && x < 150 && xo2 == 115){
        if(yo2-s2 > 190 && yo2-s2 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 85 && x < 150 && xo3 == 115){
        if(yo3-s3 > 190 && yo3-s3 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 85 && x < 150 && xo4 == 115){
        if(yo4-s4 > 190 && yo4-s4 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 85 && x < 150 && xo5 == 115){
        if(yo5-s5 > 190 && yo5-s5 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 85 && x < 150 && xo6 == 115){
        if(yo6-s6 > 190 && yo6-s6 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 160 && x < 211 && xo1 == 210){
        if(yo-s1 > 190 && yo-s1 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 160 && x < 211 && xo2 == 210){
        if(yo2-s2 > 190 && yo2-s2 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 160 && x < 211 && xo3 == 210){
        if(yo3-s3 > 190 && yo3-s3 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 160 && x < 211 && xo4 == 210){
        if(yo4-s4 > 190 && yo4-s4 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 160 && x < 211 && xo5 == 210){
        if(yo5-s5 > 190 && yo5-s5 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    if(x > 160 && x < 211 && xo6 == 210){
        if(yo6-s6 > 190 && yo6-s6 < 330){
            clearInterval(interval);
            interval2 = setInterval(explosion, 100);
        clearInterval(counter);
        showscore();
        }
    }
    // crash function >
    //left and right <
    if(x < options[op]){
        x+=1;
        }
    if(x > options[op]){
        x-=1;
        }
    //left and right >
    }
    function clear() { 
        c.clearRect(0, 0, canvas.width, canvas.height); 
}
    function go_left(){
        if(op > 0){
            op--;
        }
    }
    function go_right(){
        if(op < 4){
            op++;
        }
    }
        // controls from kode krasher
    if (window.PointerEvent) {
        right.addEventListener("pointerdown", go_right);
left.addEventListener("pointerdown", go_left);
popup.addEventListener("pointerdown", restart);
      } else if (window.TouchEvent) {
        right.addEventListener("touchstart", go_right);
left.addEventListener("touchstart", go_left);
popup.addEventListener("touchstart", restart);
      } else {
        right.addEventListener("mousedown", go_right);
        left.addEventListener("mousedown", go_left);  
        popup.addEventListener("mousedown", restart); 
    }

    function getR(){
     RN = Math.floor((Math.random() * 4) );
    return(RN);
    }
var r = 5;
var n = 0;
var ym = 430;
var count = 50;
function explosion(){
    for(N = 0; N < count; N++){
    color=getcolor();
    xr = getx();
    yr = getx();
    c.beginPath();
    c.arc(xr + x + 120,yr + ym,r,0,2*Math.PI)
    c.fillStyle=color;
    c.fill();
    n+=.2;
    x-=.1;
    r+=.005;
    ym-=.1;
    if(count < 120){
        //clearInterval(interval2);
        count+=.1;
        }
    else{
        clearInterval(interval2);
        }
    }
}
function getx(){
    
    var xr = Math.floor((Math.random() * n) );
    return(xr);
    }
function getcolor(){
    var yr = Math.floor((Math.random()) *10);
    var colors = new Array("grey","Red","grey", "lightgrey","grey","lightgrey","yellow" , "grey", "orange", "grey");
    var color = colors[yr];
    return(color);
    }
}
function restart(){
    popup.style.height = "0";
        popup.style.width = "0";
    play();
}
    
}
