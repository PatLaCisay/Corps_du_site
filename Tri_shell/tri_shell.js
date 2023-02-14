var d=0;
var tab = new Array(10);
var i,j,rep1,rep2,rep3;
function Barre(y,dx) // Classe Barre
{
	this.x = 10;
	this.y = y;
	this.dx = dx;
	this.dy = 15;
}
for( i=0;i<tab.length;i++) // Création des éléments du tableaux
	{
		tab[i]=new Barre(d+20,Math.round(100*Math.random()+1));
		d=d+20;
	}

function draw_elements() // Fonction du dessin des élément du tableau sur le navigateur 
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
	setInterval(cycle, 45); 
}

function tri_insertion(tableau, gap, debut) {
	var en_cours, j;

	for (var i = gap + debut; i < tableau.length; i += gap) {
		en_cours = tableau[i];
		j = i;

		while (j > 0 && tableau[j - gap] > en_cours) {
			tableau[j] = tableau[j - gap];
			j -= gap;
		}

		tableau[j] = en_cours;
	}
}

function cycle_shell()
{
	if (index<gaps.length) {
		gap = gaps[index];
		
		if (debut < gap) {
			for (var i = gap + debut; i < tab.length; i += gap) {

				min = tab[i].dx;
				j = i;
				//deplace_horizontal(tab[j]);
				while (j > 0 && tab[j - gap].dx > min) 
				{ 	
					//deplace_horizontal(tab[j-gap]);
					dessin(tab[j-gap]);
					tab[j].dx = tab[j - gap].dx;
					dessin(tab[j]);
					

					j -= gap;

					if(j-gap<0){
						break;
					}
		
				}
				tab[j].dx = min;
				dessin(tab[j]);
			}
		}
		debut += 1;
		if(debut==gap)
		{
			debut=0;
			index++;
		}
	}

}

function tri_shell(tab)
{
	index=0; 
	debut=0;
	gaps=[6, 4, 3, 2, 1];
	rep=setInterval(cycle_shell,5000);		
}

function alert_stop()
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle="blue";
	ctx.fillText("Arret de l'execution ...",20,250);
}

function alert_continuer()
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(20,250,140,20);
	ctx.fillStyle="blue";
	ctx.fillText("Reprise de l'execution ...",20,250);
	var tel=function()
	{
		ctx.clearRect(20,250,140,20);
	}
	setTimeout(tel,2000);
}

function stop()
{
	clearInterval(rep1);
}

function continuer()
{
	rep1= setInterval(cycle_shell,14000);
}

function lance_tri_shell()
{
	tri_shell(tab);
}

function recharger(){
	window.reload();
}