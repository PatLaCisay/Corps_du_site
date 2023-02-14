var d=0;
var rep;
var tab = new Array(10);

function Barre(y,dx) // Classe Barre
{
	this.x = 20;
	this.y = y;
	this.dx = dx;
	this.dy = 15;
}
for( i=0;i<tab.length;i++) // Cr?tion des ?ments du tableaux
{
	tab[i]=new Barre(d+20,Math.round(100*Math.random()+1));
	d=d+20;
}
function draw_elements() // Fonction du dessin des ?ment du tableau sur le navigateur 
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	for(i=0;i<tab.length;i++)
	{
		ctx.fillStyle="blue"; // Couleur du text 
		ctx.fillText(tab[i].dx,20+tab[i].dx,tab[i].y+10);
		ctx.fillStyle='rgba(80,150,240,0.6)';//Couleur du rectangle.
		ctx.fillRect(20,tab[i].y,tab[i].dx,tab[i].dy);
	}
}
function deplace_horizontal(Barre)
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var j = Barre.x; // variable fonction du temps
		var cycle = function() 
		{
			if(j<Barre.x+160)
			{
				ctx.clearRect(0,Barre.y,canvas.width,Barre.dy+5); // clean the canvas
				ctx.fillStyle = 'rgba(80,150,240,0.6)';
				ctx.fillRect(j,Barre.y,Barre.dx,Barre.dy);
				ctx.fillStyle = "blue";
				ctx.fillText(Barre.dx,j+Barre.dx,Barre.y+10);
				j=j+4;
			}
		}
		setInterval(cycle, 5); 	// lance le cycle chaque 45 millisecondes	
}

function per(tab,i,j)
{
	var a;
	a=tab[i].dx;
	tab[i].dx=tab[j].dx;
	tab[j].dx=a;
}
function dessin(Barre)
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var j = Barre.x; // variable fonction du temps
	var cycle = function() 
	{
		if(j<Barre.x+Barre.dx)
		{
			ctx.clearRect(j,Barre.y,canvas.width,Barre.dy);
			ctx.fillStyle = '#99FF66';
			ctx.fillRect(j,Barre.y,2,Barre.dy);
			ctx.fillStyle = "blue";
			ctx.fillText(Barre.dx,j+2,Barre.y+10);
			j=j+2;
		}
	}
	setInterval(cycle, 5); 
}

function stop()
{
	clearInterval(rep);
}
function continuer()
{
	rep=setInterval(cycle,700);
}
function cycle()
{
	if(i<tab.length-1)
	{
		if(j<tab.length)
		{
			deplace_horizontal(tab[j]);
			deplace_horizontal(tab[j+1]);


			if(tab[j].dx>tab[j+1].dx)
			{
				per(tab,j,j+1);
			}
		}
		function to(){
			dessin(tab[j-1])
			dessin(tab[j]);
		}
		setTimeout(to,320);
		j++;
		if(j==tab.length-1-i){
			i++;
			j=0;
		}
	}	
}
function tri_bulle(tab)
{
	i=0;
	j=0;
	rep=setInterval(cycle,700);
}
function executer()
{
	tri_bulle(tab);
}

function recharger()
{
	location.reload();
}