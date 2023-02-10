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
				if(j<Barre.x+180)
				{
					ctx.clearRect(0,Barre.y,canvas.width,Barre.dy+5); // clean the canvas
					ctx.fillStyle = 'rgba(234,140,0,0.6)';
					ctx.fillRect(j,Barre.y,Barre.dx,Barre.dy);
					ctx.fillStyle = "blue";
					ctx.fillText(Barre.dx,j+Barre.dx,Barre.y+10);
					j=j+3;
				}
			}
			setInterval(cycle, 40); 	// lance le cycle chaque 30 millisecondes	
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
			setInterval(cycle, 60); 
	}
	function Cycle_Shell()
	{
		if(i<tab.length-1){	
			min = tab[i].dx;
			indice_min=i;
			for(j=i+1;j<tab.length;j++)
			{
				if(tab[j].dx<min)
				{
					min=tab[j].dx;
					indice_min=j;
				}	
			}
			Deplace_Horizontal(tab[i]);
			Deplace_Horizontal(tab[indice_min]);
			var to=function()
			{
				per(tab,i,indice_min);
			}
			setTimeout(to,4000);
			var to2=function()
			{
				Dessin(tab[i]);
				Dessin(tab[indice_min]);
				i++;
			}
			setTimeout(to2,4900);	
		}
	}
	function Tri_Shell(tab)
	{
		i=0; 
		rep1=setInterval(Cycle_Shell,9000);		
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
		rep1= setInterval(Cycle_Shell,14000);
	}
	function Lance_tri_shell()
	{
		Tri_Shell(tab);
	}

	////////////

	var gaps;

	function tri_insertion(tableau, gap, debut) {
	  var en_cours, j;
	
	  for (var i = gap + debut, a = tableau.length; i < a; i += gap) {
		en_cours = tableau[i];
		j = i;
	
		while (j > 0 && tableau[j - gap] > en_cours) {
		  tableau[j] = tableau[j - gap];
		  j = j - gap;
		}
	
		tableau[j] = en_cours;
	  }
	}
	
	function tri_shell(tableau) {
		gaps=[6, 4, 3, 2, 1];
		for (i=0; i<gaps.length; i++) {
			var gap = gaps[i];

			for (var debut = 0, d = gap; debut < d; debut += 1) {
				tri_insertion(tableau, gap, debut);
			}
		}

		return tableau;
	}
	
	gaps = [701, 301, 132, 57, 23, 10, 4, 1];
	console.log(tri_shell(gaps));
	function recharger()
	{
		location.reload();
	}