const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const ground = new Image();
ground.src = "img/ground.png";
const fon = new Image();
fon.src = "img/fon.png";
const redm = new Image();
redm.src = "img/red.png";
const greenm = new Image();
greenm.src = "img/green.png";
const bluem = new Image();
bluem.src = "img/blue.png";
const yellowm = new Image();
yellowm.src = "img/yellow.png";
const fon1 = new Image();
fon1.src = "img/xod.png";
let box = 100;
let ship = [];
let x;
let y;
let xod = 1;

let red = [];
red[0] = {x: 1* box,y: 1 * box,score: 3};
let green =[];
green[0] = {x: 8* box,y: 8 * box,score: 3};
let blue = [];
blue[0] = {x: 1* box,y: 8 * box,score: 3};
let yellow =[];
yellow[0] = {x: 8* box,y: 1 * box,score: 3};
document.addEventListener("touchstart", direct);

function direct(event) {
	
		dir = "up";
}
document.addEventListener("touchend", direct);

function direct(event) {
	
		dir = "lol";
}

document.addEventListener("mousedown", direction);
let dir;

function direction(event) {
	
		dir = "up";
}
document.addEventListener("mouseup", directi);

function directi(event) {
	
		dir = "lol";
}

function Game(){
	canvas.addEventListener("touchmove", function(event){
	x = Math.round((event.changedTouches[0].pageX-25)/100, 1)*box;
    y = Math.round((event.event.changedTouches[0].pageY-13)/100, 1)*box;
})
canvas.addEventListener("mousemove", function(event){
	x = Math.round((event.offsetX-25)/100, 1)*box;
    y = Math.round((event.offsetY-13)/100, 1)*box;
})

 
 
   redxod(x, y);
   	for(let i = 0; i < red.length; i++){
 	for(let j = 0; j < red.length; j++){
 		
 			 		
 	if(i != j && red[i].x == red[j].x && red[i].y == red[j].y){
 			red[i].score = red[j].score + red[i].score;
 			red.splice(j, 1);
 		
}
}

}

   yellowxod(x, y);
    for(let i = 0; i < yellow.length; i++){
 	for(let j = 0; j < yellow.length; j++){
 		if(i != j && yellow[i].x == yellow[j].x && yellow[i].y == yellow[j].y){
 			yellow[i].score = yellow[j].score + yellow[i].score ;
 			
 			yellow.splice(j, 1);//бля
 		
 		}
 	}
 }

 
   bluexod(x,y);
   for(let i = 0; i < blue.length; i++){
   for(let j = 0; j < blue.length; j++){
 		if(i != j && blue[i].x == blue[j].x && blue[i].y == blue[j].y){
 			blue[i].score = blue[j].score + blue[i].score;
 			 		
 			 			blue.splice(j, 1);
 		}
 	}
 }


   greenxod(x,y);
   	for(let i = 0; i < green.length; i++){
 	for(let j = 0; j < green.length; j++){
 		if(  i != j && green[i].x == green[j].x && green[i].y == green[j].y){
 			green[i].score = green[j].score + green[i].score;
 			green.splice(j, 1);
 			
 		}
 	}
 }
 


 for(let i = 0; i < red.length; i++){
 	if(red[i].x < 0 || red[i].x > 1100 || red[i].y < 0 || red[i].y > 1000){red.splice(i, 1);}
 }
 for(let i = 0; i < green.length; i++){
 	if(green[i].x < 0 || green[i].x > 1000 || green[i].y < 0 || green[i].y > 1000){green.splice(i, 1);}
 }
 for(let i = 0; i < yellow.length; i++){
 	if(yellow[i].x < 0 || yellow[i].x > 1000 || yellow[i].y < 0 || yellow[i].y > 1000){yellow.splice(i, 1);}
 }
 for(let i = 0; i < blue.length; i++){
 	if(blue[i].x < 0 || blue[i].x > 1000 || blue[i].y < 0 || blue[i].y > 1000){blue.splice(i, 1);}
 }




drawGame(red,  green, blue, yellow);
}
function redxod(x, y){
 if(red.length == 0 && xod == 1){
 	xod = 2;
 }
 	console.log(xod);
	for(let i = 0; i < red.length; i++){
		if(dir == "up" && red[i].x == x && red[i].y == y && xod == 1) {
red[i].score++;
dir = "lol";
xod++;
 }

	
		if(red[i].score >= 4){
		red.push({x:red[i].x + box, y:red[i].y, score:1});
		red.push({x:red[i].x, y:red[i].y-box, score:1});
		red.push({x:red[i].x - box, y:red[i].y, score:1});
		red.push({x:red[i].x, y:red[i].y+box, score:1});
		red.splice(i, 1);
   
    
 for(let i = 0; i < red.length; i++){
 	for(let j = 0; j < blue.length; j++){
 	if( red[i].x == blue[j].x && red[i].y == blue[j].y){
 			red[i].score = blue[j].score + red[i].score;

 			blue.splice(j, 1);
 			}
 		}
 		}
 		 for(let i = 0; i < red.length; i++){
 	for(let j = 0; j < green.length; j++){
 	if( red[i].x == green[j].x && red[i].y == green[j].y){
 			red[i].score = green[j].score + red[i].score;

 			green.splice(j, 1);
 			}
 		}
 		}
 				 for(let i = 0; i < red.length; i++){
 	for(let j = 0; j < yellow.length; j++){
 	if( red[i].x == yellow[j].x && red[i].y == yellow[j].y){
 			red[i].score = yellow[j].score + red[i].score;

 			yellow.splice(j, 1);
 			}
 		}
 		}
 	}
 	
 



}

}
function yellowxod(x, y){
 if(yellow.length == 0 && xod == 2){
 	xod = 3;
 }
	for(let i = 0; i < yellow.length; i++){
		if(dir == "up" && yellow[i].x == x && yellow[i].y == y && xod == 2) {
yellow[i].score++;
dir = "lol";
xod++;

 }
		if(yellow[i].score >= 4){
		yellow.push({x:yellow[i].x + box, y:yellow[i].y, score:1});
		yellow.push({x:yellow[i].x, y:yellow[i].y-box, score:1});
		yellow.push({x:yellow[i].x - box, y:yellow[i].y, score:1});
		yellow.push({x:yellow[i].x, y:yellow[i].y+box, score:1});
		yellow.splice(i, 1);

  for(let i = 0; i < yellow.length; i++){
 	for(let j = 0; j < red.length; j++){
 	if( yellow[i].x == red[j].x && yellow[i].y == red[j].y){
 			yellow[i].score = red[j].score + yellow[i].score  ;

 			red.splice(j, 1);
 			}
 		}
 		}
 		 for(let i = 0; i < yellow.length; i++){
 	for(let j = 0; j < green.length; j++){
 	if( yellow[i].x == green[j].x && yellow[i].y == green[j].y){
 			yellow[i].score = green[j].score + yellow[i].score ;

 			green.splice(j, 1);
 			}
 		}
 		}
 				 for(let i = 0; i < yellow.length; i++){
 	for(let j = 0; j < blue.length; j++){
 	if( yellow[i].x == blue[j].x && yellow[i].y == blue[j].y){
 			yellow[i].score = blue[j].score + yellow[i].score ;

 			blue.splice(j, 1);
 			}
 		}
 		}
}


}

}
function bluexod(x, y){
 if(blue.length == 0 && xod === 3){
 	xod = 4;
 }
	for(let i = 0; i < blue.length; i++){
		if(dir == "up" && blue[i].x == x && blue[i].y == y && xod == 3) {
blue[i].score++;
dir = "lol";
xod++;
 }
		if(blue[i].score >= 4){
		blue.push({x:blue[i].x + box, y:blue[i].y, score:1});
		blue.push({x:blue[i].x, y:blue[i].y-box, score:1});
		blue.push({x:blue[i].x - box, y:blue[i].y, score:1});
		blue.push({x:blue[i].x, y:blue[i].y+box, score:1});
		blue.splice(i, 1);

 for(let i = 0; i < blue.length; i++){
 	for(let j = 0; j < red.length; j++){
 	if( blue[i].x == red[j].x && blue[i].y == red[j].y){
 			blue[i].score = red[j].score + blue[i].score;

 			red.splice(j, 1);
 			}
 		}
 		}
 		 for(let i = 0; i < blue.length; i++){
 	for(let j = 0; j < green.length; j++){
 	if( blue[i].x == green[j].x && blue[i].y == green[j].y){
 			blue[i].score = green[j].score + blue[i].score ;

 			green.splice(j, 1);
 			}
 		}
 		}
 				 for(let i = 0; i < blue.length; i++){
 	for(let j = 0; j < yellow.length; j++){
 	if( blue[i].x == yellow[j].x && blue[i].y == yellow[j].y){
 			blue[i].score = yellow[j].score + blue[i].score;

 			yellow.splice(j, 1);
 			}
 		}
 		}
}
 


}

}
function greenxod(x, y){
 if(green.length == 0 && xod == 4){
 	xod = 1;
 }
	for(let U = 0; U < green.length; U++){
		if(dir == "up" && green[U].x == x && green[U].y == y && xod == 4) {
green[U].score++;
dir = "lol";
xod = 1;
}
	if(green[U].score >= 4){
		green.push({x:green[U].x + box, y:green[U].y, score:1});
		green.push({x:green[U].x, y:green[U].y-box, score:1});
		green.push({x:green[U].x - box, y:green[U].y, score:1});
		green.push({x:green[U].x, y:green[U].y+box, score:1});
		green.splice(U, 1);
	


 for(let i = 0; i < green.length; i++){
 	for(let j = 0; j < blue.length; j++){
 	if( green[i].x == blue[j].x && green[i].y == blue[j].y){
 			green[i].score = blue[j].score + green[i].score;

 			blue.splice(j, 1);
 			}
 		}
 		}
 		 for(let i = 0; i < green.length; i++){
 	for(let j = 0; j < red.length; j++){
 	if(green[i].x == red[j].x && green[i].y == red[j].y){
 			green[i].score = red[j].score + green[i].score;

 			red.splice(j, 1);
 			}
 		}
 		}
 				 for(let i = 0; i < green.length; i++){
 	for(let j = 0; j < yellow.length; j++){
 	if( green[i].x == yellow[j].x && green[i].y == yellow[j].y){
 			green[i].score = yellow[j].score + green[i].score;

 			yellow.splice(j, 1);
 			}
 		}
 	}
 		}
 		 

 }

}

function drawGame(red, green, blue, yellow) {
	
	ctx.drawImage(ground, 0, 0);
	for(let i = 0; i < red.length; i++) {
		if (xod == 1){
			ctx.drawImage(fon1, red[i].x, red[i].y);
		}
		ctx.drawImage(redm, red[i].x, red[i].y);
		ctx.fillStyle = "white";
	    ctx.font = "50px Arial";
		ctx.fillText(red[i].score, red[i].x + 35, red[i].y + 70);
	}
	for(let i = 0; i < green.length; i++) {
		if (xod == 4){
			ctx.drawImage(fon1, green[i].x, green[i].y);
		}
		ctx.drawImage(greenm, green[i].x, green[i].y);
		ctx.fillStyle = "white";
	    ctx.font = "50px Arial";
		ctx.fillText(green[i].score, green[i].x + 35, green[i].y + 70);
	}
	for(let i = 0; i < blue.length; i++) {
		if (xod == 3){
	    ctx.drawImage(fon1, blue[i].x, blue[i].y);
		}
		ctx.drawImage(bluem, blue[i].x, blue[i].y);
		ctx.fillStyle = "white";
	ctx.font = "50px Arial";
		ctx.fillText(blue[i].score, blue[i].x + 35, blue[i].y  + 70);
	}
	for(let i = 0; i < yellow.length; i++) {
		if (xod == 2){
	    ctx.drawImage(fon1, yellow[i].x, yellow[i].y);
		}
		ctx.drawImage(yellowm, yellow[i].x, yellow[i].y);
		ctx.fillStyle = "white";
	ctx.font = "50px Arial";
		ctx.fillText(yellow[i].score, yellow[i].x + 35, yellow[i].y + 70);
	}
}







let game = setInterval(Game, 100);