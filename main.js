//gui explaining stuff
//button to change settings
//run multiple at once to test differences in settings (change to class based)
//test other equations

init = function() {
	ctx.init()

	//set up
	CURRENTR = 2.4
	RES = 0.001
	RWIDTH = 4-CURRENTR
	STARTX = 0.5
	ITERATIONS = 100
	MAXVALS = 100
	PRECISION = 10000
	SHOWALL = false;//shows all values for x, causes lots of chaos!
	ctx.setColor("white")
	
	loop();
}

//logistic map equation
bifurcate = function(r,i,m) {
	var x=STARTX;
	var retVals = []
	if (SHOWALL) ctx.setColor("red")
	for (n=0;n<i+m;n++){
		x=r*x*(1-x)
		if (SHOWALL) ctx.fillRect(((CURRENTR-2.4)/RWIDTH)*SCREENWIDTH,(1-x)*SCREENHEIGHT,1,1)
		if (n>=i) {
			if (retVals.includes(Math.round(x*PRECISION)/PRECISION)) return retVals
			retVals.push(Math.round(x*PRECISION)/PRECISION)
		}
	};
	if (SHOWALL) ctx.setColor("white")
	return retVals
}

loop = function() {
	if (CURRENTR<4) requestAnimationFrame(loop)
	vals = bifurcate(CURRENTR,ITERATIONS,MAXVALS)
	for (var i=0;i<vals.length;i++) {
		ctx.fillRect(((CURRENTR-2.4)/RWIDTH)*SCREENWIDTH,(1-vals[i])*SCREENHEIGHT,1,1)
	}
	CURRENTR+=RES
}

window.onload = init;
