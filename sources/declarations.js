var essais = 0;

function nb_aleatoire(min, max) // fonction de nombres random
{
        var nb = min + (max-min+1)*Math.random();
        return Math.floor(nb);
}

function choixQst()
{
        tableau_utilise = nb_aleatoire(1, 28);
}

function random(cible) // fonction de répartition des nombres
{
        cible *= 0.8;
        var nb_ajout = nb_aleatoire(cible*0, cible*0.5);
        nb_correct = cible + nb_ajout
        console.log("Nombre correct: " + nb_correct)
}

function init()
{
        //nb_correct = nb_aleatoire(1, 100);
        essais = 0;   
}

function printQst()
{ 
        var node = document.getElementById("question");
        node.innerHTML = "Donnez votre proposition dans la barre de texte ci-dessous.<br>";
	node.innerHTML += "<strong>"+textequestions[tableau_utilise]+"</strong>" + "<br>En " + unitequestions[tableau_utilise] +":";
        random(limite_reponse[tableau_utilise])
        console.log("Tableau utilise: " + tableau_utilise);
        console.log("Limite reponse du tableau utilise: " + limite_reponse[tableau_utilise]);
        console.log("Nombre correct: " + nb_correct);
}

function printEssais(chaine)
{ 
        var node = document.getElementById("essais");
        node.innerHTML ="Nombre d'essais: " +chaine;
}


function printMsg(chaine)
{ 
        var node = document.getElementById("texte");
        node.innerHTML = chaine;
}

function printHist()
{
        affiche_essais = essais - 1
        var node = document.getElementById("hist");
        texte = "<br>" + "Essai " + affiche_essais + ": " + nombre_choisi + " - " + p_m + texte;
        node.innerHTML ="Essais: "+texte;
}

function printBouton(value, lien, bouton)
{
        var node = document.getElementById(bouton);
        node.innerHTML = "<FORM> <INPUT TYPE=button VALUE=\"" + value + "\" onClick=\"document.location.href=\'" + lien + "\'\";> </FORM>";
}

function printImg(id, image, lien, width, height, texte)
{
        var node = document.getElementById(id);
        node.innerHTML = "<a href=\"" + lien + "\"><img src=\"" + image + "\" border=0  width=" + width + " height=" + height + " alt=\"" + texte +  "\"></a>";
}

function controle()
		{
			nombre_choisi = document.form1.input.value;
		}

function clic(jeux)
	{
		controle();
                essais++
                affiche_essais = essais - 1
		if (nombre_choisi < nb_correct)
                {
			printMsg("Le nombre &agrave deviner est <strong> plus grand que " + nombre_choisi + "</strong>.");
                        printEssais(affiche_essais)
                        p_m = "plus grand";
                }
		if (nombre_choisi > nb_correct)
                {
			printMsg("Le nombre &agrave deviner est <strong> plus petit que " + nombre_choisi + "</strong>.");
                        printEssais(affiche_essais)
                        p_m = "plus petit";
                }
		if (nombre_choisi == nb_correct)
                {
                        essais -= 1
			printMsg("<strong> Le nombre &agrave deviner est " + nb_correct + ". Bravo !\nTu as devin&eacute; en " + essais + " coups." + "<br>" + textereponse[tableau_utilise] + "</strong>");
                        printEssais(affiche_essais);
                        p_m = "GAGN&Eacute;!!!";
                        essais += 1
                        if (jeux == "defi")
                        {
                                gagne += 1
                                printGagne();
                                reinit();
				
                        }
                        
                        if (jeux == "simple")
                        {
                                printImg("bouton", "images/rejouer.png", "jeux1.html", "170", "55", "rejouer");
                        }
                   
		}
                printHist();
		document.form1.input.value = "";
	}

function reinit()
{
	console.log("je rentre");
        choixQst()
        printQst()
        
}

	
function printAttention(message)
{
	var node = document.getElementById("attention");
	node.innerHTML = message;
}
	