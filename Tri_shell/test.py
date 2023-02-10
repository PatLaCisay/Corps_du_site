
def tri_insertion(tableau, gap, debut):
    for i in range(gap + debut,len(tableau),gap):
        en_cours = tableau[i]
        j = i
        #décalage des éléments du tableau }
        while j>0 and tableau[j-gap]>en_cours:
            tableau[j]=tableau[j-gap]
            j = j-gap
        #on insère l'élément à sa place
        tableau[j]=en_cours
 
def tri_shell (tableau):
    for gap in [6,4,3,2,1]:
        # Pour chaque sous-tableau ...
        for debut in range(0,gap):
            #... on fait un tri par insertion
            tri_insertion(tableau,gap,debut)
    return tableau

gaps = [701, 301, 132, 57, 23, 10, 4, 1]

print(tri_shell(gaps))