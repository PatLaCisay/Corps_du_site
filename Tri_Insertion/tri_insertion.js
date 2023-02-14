var d=0;
var rep;
var tab = new Array(10);
var i,j,p;
function Barre(y,dx) // Classe Barre
{
	this.x = 20;
	this.y = y;
	this.dx = dx;
	this.dy = 15;
}
for( i=0;i<tab.length;i++) // Cretion des ements du tableaux
{
	tab[i]=new Barre(d+20,Math.round(100*Math.random()+1));
	d=d+20;
}
function draw_elements() // Fonction du dessin des element du tableau sur le navigateur 
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	for(i=0;i<tab.length;i++)
	{
		ctx.fillStyle="blue"; // Couleur du text 
		ctx.fillText(tab[i].dx,tab[i].x+tab[i].dx,tab[i].y+10);
		ctx.fillStyle='rgba(80,150,240,0.6)';//Couleur du rectangle.
		ctx.fillRect(tab[i].x,tab[i].y,tab[i].dx,tab[i].dy);
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
		setInterval(cycle, 45); 	// lance le cycle chaque 45 millisecondes	
}
function per(table,i,j)
{
	var a;
	a=table[i].dx;
	table[i].dx=table[j].dx;
	table[j].dx=a;
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
		setInterval(cycle, 50); 
}

function stop()
{
	clearInterval(rep);
}
function continuer()
{
  rep=setInterval(cycle,9000);
}
function cycle()
{
	
	if(i<tab.length)
	{
		for(j=p;j>0;j=j-1)
		{
			p=j-1;
			if(tab[j-1].dx>tab[j].dx)
			{
				
				deplace_horizontal(tab[j]);
				deplace_horizontal(tab[j-1]);
				
											
				var f3=function()
				{
					per(tab,j-1,j);
					dessin(tab[j]);
					dessin(tab[j-1]);	
				}
				setTimeout(f3,4000);
				break;
			}				
		}
		if(j==0)
		{
		i=i+1;
		p=i;}
	}	
}
function Tri_Insertion(tab)
{
	i=1;
	p=i;
	rep=setInterval(cycle,6500);
}
function executer()
{
	Tri_Insertion(tab);
}

function recharger()
{
	location.reload();
}