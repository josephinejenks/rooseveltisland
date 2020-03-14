<script type="text/javascript">
		var stoppedx = ballvx;
		var stoppedy = ballvy;
		var boxx = 20;
		var boxy = 30;
		var boxwidth = 350;
		var boxheight = 250;
		var ballrad = 10;
		var boxboundx = boxwidth+boxx-ballrad;
		var boxboundy = boxheight+boxy-ballrad;
		var inboxboundx = boxx+ballrad;
		var inboxboundy = boxy+ballrad;
		var ballx = 50;
		var bally = 60;
		var ballvx = 4;
		var ballvy = 8;
		var ball = new Image();
		var bkg = new Image();
		var ctx;
		var grad;
		var color;
		var hue = [
		[255,0,0],
		[255,255,0],
		[0,255,0],
		[0,255,255],
		[0,0,255],
		[255,0,255]
		];

		function init() {
			ball.src = "ball1.jpg";
			bkg.src = "bookshelf.jpg";
			var h;
			ctx = document.getElementById('canvas').getContext('2d');
			grad = ctx.createLinearGradient(boxx,boxy,boxx+boxwidth,boxy+boxheight);
			for (h=0;h<hue.length;h++) {
				color = 'rgb('+hue[h][0]+','+hue[h][1]+','+hue[h][2]+')';
				grad.addColorStop(h*1/hue.length,color);
			}
			ctx.lineWidth = ballrad;
			ctx.fillStyle = grad;
			moveball();
			tid = setInterval(moveball,100);
		}

		function moveball() {
			ctx.clearRect(boxx,boxy,boxwidth,boxheight);
			moveandcheck();
			ctx.drawImage(bkg,boxx,boxy,boxwidth,boxheight);
			ctx.drawImage(ball,ballx-ballrad,bally-ballrad,2*ballrad,2*ballrad);
			ctx.fillRect(boxx,boxy,ballrad,boxheight);
			ctx.fillRect(boxx+boxwidth-ballrad,boxy,ballrad,boxheight);
			ctx.fillRect(boxx,boxy,boxwidth,ballrad);
			ctx.fillRect(boxx,boxy+boxheight-ballrad,boxwidth,ballrad);
		}

		function moveandcheck() {
			var nballx = ballx+ballvx;
			var nbally = bally+ballvy;
			if (nballx > boxboundx) {
				ballvx = -ballvx;
				nballx = boxboundx;
			}
			if (nballx < inboxboundx) {
				nballx = inboxboundx
				ballvx = -ballvx;
			}
			if (nbally > boxboundy) {
				nbally = boxboundy
				ballvy = -ballvy;
			}
			if (nbally < inboxboundy) {
				nbally = inboxboundy
				ballvy = -ballvy;
			}
			ballx = nballx
			bally = nbally
		}

		function change() {
			ballvx = Number(document.f.hv.value);
			ballvy = Number(document.f.vv.value);
			return false;
		}

		function stopcc() {
			clearInterval(tid);
			stoppedx = ballvx;
			stoppedy = ballvy;
			moveball();
			return false;
		}

		function resume() {
			clearInterval(tid);
			ballvx = stoppedx;
			ballvy = stoppedy;
			tid = setInterval(moveball,100);
			return false;
		}
	</script>
