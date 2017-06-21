var boxsize = 20;
var loopnumber;
var currentIndex = 0;
var text;
var equationText = '';

function setup() {
	frameRate(1);
	bgcolor = color(255);
	unsaturated = color(205,179,128);
	saturatedlight = color(3,101,100);
	saturateddark = color(3,22,52);
	white = color(255);
	
	//canvas stuff
	createCanvas(600,600);
	loopnumber = height/boxsize;
	background(0,0,0,255);

	//text
	text = selectAll('.equation')[0]
	text.html('eqs')

}

function draw() {
	background(bgcolor);
	equationText += 2*currentIndex + 1 + ' + ';
	text.html(equationText);

	noStroke()
	for(var i = 0 ; i < loopnumber; i++){
		for(var j = 0 ; j < loopnumber; j++){
			if(i < currentIndex && j < currentIndex){
				fill(unsaturated);
			}
			else if(i == currentIndex && 0 < j && j  <= currentIndex|| j == currentIndex && 0 < i && i  <= currentIndex){
				fill(saturateddark);
			}
			else if (i == currentIndex && 0 == j || j ==  currentIndex && i == 0){
				fill(saturatedlight);
			}
			else{
				fill(bgcolor);
			}

			rect(i*boxsize,j*boxsize, boxsize -1, boxsize-1);
		}
	}
	currentIndex++;
}

function mouseReleased() {
	console.log('mouse')
	currentIndex = 0;
	equationText = ''
}
