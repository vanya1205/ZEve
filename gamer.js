const canvas = document.getElementById("game");const ctx = canvas.getContext("2d");const ground = new Image();ground.src = "img/ground.png";const fon = new Image();fon.src = "img/fon.png";const redm = new Image();redm.src = "img/red.png";const greenm = new Image();greenm.src = "img/green.png";const bluem = new Image();bluem.src = "img/blue.png";const yellowm = new Image();yellowm.src = "img/yellow.png";const fon1 = new Image();fon1.src = "img/xod.png";let box = 100;document.addEventListener("mousedown", direction);
let dir;
let xod = 1;
function direction(event) {dir = "up";}
document.addEventListener("mouseup", directi);
function directi(event) {dir = "lol";}
class Fishka{
	constructor(cordinate, cordinate1, cordinate2, cordinate3){
    this.cordinate = cordinate;
    this.cordinate1 = cordinate1;
    this.cordinate2 = cordinate2;
    this.cordinate3 = cordinate3;}
           fishkapush(){
     	   	for(let i = 0; i < this.cordinate.length; i++){
     	   		if(this.cordinate[i].x < 0 || this.cordinate[i].x > 1100 || this.cordinate[i].y < 0 || this.cordinate[i].y > 1000){this.cordinate.splice(i, 1);}
     	   			if(this.cordinate[i].score >= 4){
		this.cordinate.push({x:this.cordinate[i].x + box, y:this.cordinate[i].y, score:1});
		this.cordinate.push({x:this.cordinate[i].x, y:this.cordinate[i].y-box, score:1});
		this.cordinate.push({x:this.cordinate[i].x - box, y:this.cordinate[i].y, score:1});
		this.cordinate.push({x:this.cordinate[i].x, y:this.cordinate[i].y+box, score:1});
		this.cordinate.splice(i, 1);
		for(let i = 0; i < this.cordinate.length; i++){
    for(let j = 0; j < this.cordinate1.length; j++){
      if( this.cordinate[i].x == this.cordinate1[j].x &&  this.cordinate[i].y == this.cordinate1[j].y){
 		this.cordinate[i].score = this.cordinate1[j].score + this.cordinate[i].score;
            this.cordinate1.splice(j, 1);
}}}
for(let i = 0; i < this.cordinate.length; i++){
for(let j = 0; j < this.cordinate2.length; j++){
if( this.cordinate[i].x == this.cordinate2[j].x && this.cordinate[i].y == this.cordinate2[j].y){
 		this.cordinate[i].score = this.cordinate2[j].score + this.cordinate[i].score;
            this.cordinate2.splice(j, 1);
}}}}}
      	for(let i = 0; i < this.cordinate.length; i++){
      for(let j = 0; j < this.cordinate.length; j++){
 		if(i != j && this.cordinate[i].x == this.cordinate[j].x && this.cordinate[i].y == this.cordinate[j].y){
 			this.cordinate[i].score = this.cordinate[j].score + this.cordinate[i].score;
 			this.cordinate.splice(j, 1);	
}}}
return [this.cordinate, this.cordinate1, this.cordinate2, this.cordinate3];
}}
var h, c, n, b;
let cordinatared = [];
cordinatared[0] = {x: 1* box,y: 1 * box,score: 3};
let cordinatablue = [];
cordinatablue[0] = {x: 8* box,y: 8 * box,score: 3};
let cordinatagreen = [];
cordinatagreen[0] = {x: 8* box,y: 1 * box,score: 3};
let obj = new Fishka(cordinatared, cordinatablue, cordinatagreen, 0);
function Game(){
	canvas.addEventListener("mousemove", function(event){
	x = Math.round((event.offsetX-25)/100, 1)*box;
    y = Math.round((event.offsetY-13)/100, 1)*box;
})
for(let i = 0; i < obj.cordinate.length; i++){
		if(dir == "up" && obj.cordinate[i].x == x && obj.cordinate[i].y == y && xod == 1) {
obj.cordinate[i].score++;
dir = "lol";
xod++;
 }}
 h = obj.fishkapush();
obj.cordinate = h[0];
obj.cordinate1 = h[1];
obj.cordinate2 = h[2];
obj.cordinate3 = h[3];
for(let i = 0; i < obj.cordinate1.length; i++){
		if(dir == "up" && obj.cordinate1[i].x == x && obj.cordinate1[i].y == y && xod == 2) {
obj.cordinate1[i].score++;

dir = "lol";
xod ++;
 }}
var c  = obj.cordinate;
obj.cordinate = obj.cordinate1;
obj.cordinate1 = c;
 n = obj.fishkapush();
obj.cordinate = n[1];
obj.cordinate1 = n[0];
obj.cordinate2 = n[2];
obj.cordinate3 = n[3];
for(let i = 0; i < obj.cordinate2.length; i++){
		if(dir == "up" && obj.cordinate2[i].x == x && obj.cordinate2[i].y == y && xod == 3) {
obj.cordinate2[i].score++;
dir = "lol";
xod = 1;
 }}
 var b  = obj.cordinate;
obj.cordinate = obj.cordinate2;
obj.cordinate2 = b;
 b = obj.fishkapush();
obj.cordinate = b[2];
obj.cordinate1 = b[1];
obj.cordinate2 = b[0];
obj.cordinate3 = b[3];
drawGame();
 }
let game = setInterval(Game, 100);
function drawGame(){
	ctx.drawImage(ground, 0, 0);
	for(let i = 0; i < obj.cordinate.length; i++) {
		if (xod == 1){
			ctx.drawImage(fon1, obj.cordinate[i].x, obj.cordinate[i].y);
		}
		ctx.drawImage(redm, obj.cordinate[i].x, obj.cordinate[i].y);
		ctx.fillStyle = "white";
	    ctx.font = "50px Arial";
		ctx.fillText(obj.cordinate[i].score, obj.cordinate[i].x + 35, obj.cordinate[i].y + 70);
	}
for(let i = 0; i < obj.cordinate1.length; i++) {
		if (xod == 2){
	    ctx.drawImage(fon1, obj.cordinate1[i].x, obj.cordinate1[i].y);
		}
		ctx.drawImage(bluem, obj.cordinate1[i].x, obj.cordinate1[i].y);
		ctx.fillStyle = "white";
	ctx.font = "50px Arial";
		ctx.fillText(obj.cordinate1[i].score, obj.cordinate1[i].x + 35, obj.cordinate1[i].y  + 70);
	}
	for(let i = 0; i < obj.cordinate2.length; i++) {
		if (xod == 3){
			ctx.drawImage(fon1, obj.cordinate2[i].x, obj.cordinate2[i].y);
		}
		ctx.drawImage(greenm, obj.cordinate2[i].x, obj.cordinate2[i].y);
		ctx.fillStyle = "white";
	    ctx.font = "50px Arial";
		ctx.fillText(obj.cordinate2[i].score, obj.cordinate2[i].x + 35, obj.cordinate2[i].y + 70);
	}
}

