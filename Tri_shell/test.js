/*function Tri_insertion(tableau, gap, debut)
{
  var i,j,min,indice_min;
  for (i = gap+debut; i < tableau.length-1; i+gap)
  {
    min = tableau[i];
    indice_min = i;
    for (j = i+1; j < tableau.length; j++)
    {
     if(min>tableau[j])
     {
      min = tableau[j];
	  indice_min = j;
     }
    }
    tableau[j]=min;
    return tableau;
  }
}

function tri_shell(tableau)
{
	for(var gap in [6,4,3,2,1])
	{
		for(debut=0; debut<gap; debut++ )
		{
			tri_insertion(tableau,gap,debut)
		}
	}
}
tab = [701, 301, 132, 57, 23, 10, 4, 1]
console.log(tri_shell(tab))

//bubulles
function tri_bulle(tab) {
  for (var i = 0; i < tab.length; i ++) {
    for (var j = 0; j < n - i; j ++) {
      if (tab[j] > tab[j + 1]) {
        permuter(tab, i, j);
      }
    }
  }
}
tab = [701, 301, 132, 57, 23, 10, 4, 1]
console.log(tri_shell(tab))*/