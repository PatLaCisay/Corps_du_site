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

function draw_Elements() // Fonction du dessin des élément du tableau sur le navigateur 
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

function Deplace_Horizontal(Barre)
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
		setInterval(cycle, 4); 	// lance le cycle chaque 45 millisecondes	
}

function per(table,i,j)
{
	var a;
	a=table[i].dx;
	table[i].dx=table[j].dx;
	table[j].dx=a;
}

function Dessin(Barre)
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	Barre.x=20;
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
	setInterval(cycle, 6); 
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
	console.log(gaps.length);
	if (index<gaps.length) {
		var gap = gaps[index];
		
		for (var debut = 0; debut < gap; debut += 1) {
			
			for (var i = gap + debut; i < tab.length; i += gap) {

				min = tab[i].dx;
				j = i;
				while (j > 0 && tab[j - gap].dx > min) 
				{ 	
					var deplace = function(){
						Deplace_Horizontal(tab[j-gap]);
						Deplace_Horizontal(tab[j]);
					}
					setTimeout(deplace,4900);


					Dessin(tab[j-gap]);
					tab[j].dx = tab[j - gap].dx;
					Dessin(tab[j]);

					j -= gap;

					if(j-gap<0){
						break;
					}
		
				}
				tab[j].dx = min;
				Dessin(tab[j]);
			}
		}
		
	}

	index++;
	tab.forEach(element => {
		console.log(element.dx);
	});
}

function Tri_Shell(tab)
{
	index=0; 
	gaps=[6, 4, 3, 2, 1];
	rep=setInterval(cycle_shell,9000);		
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
	rep1= setInterval(cycle_Shell,14000);
}

function Lance_tri_shell()
{
	Tri_Shell(tab);
}

////////////

var tab1;

function tri_insertion(tableau, gap, debut) {
	var en_cours, j;

	for (var i = gap + debut; i < tableau.length; i += gap) {
		en_cours = tableau[i];
		j = i;
		while (j > 0 && tableau[j - gap] > en_cours) {
			tableau[j] = tableau[j - gap];
			j -= gap;
			console.log("j="+j+" ; gap="+gap)
		}

		tableau[j] = en_cours;
	}
}

function tri_shell(tableau) {
	tab1=[6, 4, 3, 2, 1];
	for (i=0; i<tab1.length; i++) {
		var gap = tab1[i];

		for (var debut = 0; debut < gap; debut ++) {
			tri_insertion(tableau, gap, debut);
		}
	}

	return tableau;
}

tab1 = [701, 301, 132, 57, 23, 10, 4, 1];
console.log(tri_shell(tab1));

function recharger()
{
	location.reload();
}