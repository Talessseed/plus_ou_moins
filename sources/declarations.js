var essais = 0;

textequestions = new Array();
unitequestions = new Array();
limite_reponse = new Array();
textereponse = new Array()

textequestions[1]= "Je suis un &eacute;lephant d'Afrique de la savanne, quel est mon poids ?";
unitequestions[1]=" kilos";
limite_reponse[1]= 6000;
textereponse[1]= "Le poids moyen d'un &eacute;lephant d'Afrique de la savanne est 6 tonnes.";

textequestions[2]= "Je suis une tortue des Galapgos et je viens de mourir, quel age ai-je ? ";
unitequestions[2]=" ans";
limite_reponse[2]= 175;
textereponse[2]= "Une tortue des Galapgos a une dur&eacute;e de vie moyenne de 175 ans.";

textequestions[3]= "Je suis un gu&eacute;pard, quel est ma vitesse sur terre ? ";
unitequestions[3]=" km/h";
limite_reponse[3]= 100;
textereponse[3]= "Un gu&eacute;pard coure &agrave; une vitesse moyenne de 350 km/h.";

textequestions[4]= "Je suis un aigle royal, quelle est mon envergure ? ";
unitequestions[4]=" cms";
limite_reponse[4]= 200;
textereponse[4]= "L'envergure moyenne d'un aigle royal est de 2m.";

textequestions[5]= "Je suis un ours polaire, combien de temps puis-je rester sous l'eau  ? ";
unitequestions[5]=" secondes";
limite_reponse[5]= 100;
textereponse[5]= "Un ours polaire, peut rester &agrave; une moyenne de 1 min 40 sous l'eau.";

textequestions[6]= "Je suis un l&eacute;zard qui s'est fait couper la queue, en combien de temps peut-elle repousser ?";
unitequestions[6]=" jours";
limite_reponse[6]= 35;
textereponse[6]= "La queue d'un l&eacute;zard repousse en 35 jours environ.";

textequestions[7]= "Je suis un loup, combien de loups y a t-il dans ma meute ?";
unitequestions[7]=" loups";
limite_reponse[7]= 10;
textereponse[7]= "Le nombre de loups moyen dans une meute est 10.";

function nb_aleatoire(min, max) // fonction de nombres random
{
        var nb = min + (max-min+1)*Math.random();
        return Math.floor(nb);
}

function choixQst()
{
        tableau_utilise = nb_aleatoire(1, 7);
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
        texte += "<br>" + "Essai " + affiche_essais + ": " + nombre_choisi + " - " + p_m;
        node.innerHTML ="Essais: "+texte;
}

function printBouton(value, lien, bouton)
{
        var node = document.getElementById(bouton);
        node.innerHTML = "<FORM> <INPUT TYPE=button VALUE=\"" + value + "\" onClick=\"document.location.href=\'" + lien + "\'\";> </FORM>";
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
			printMsg("Le nombre &agrave deviner est plus grand.");
                        printEssais(affiche_essais)
                        p_m = "plus grand";
                }
		if (nombre_choisi > nb_correct)
                {
			printMsg("Le nombre &agrave deviner est plus petit.");
                        printEssais(affiche_essais)
                        p_m = "plus petit";
                }
		if (nombre_choisi == nb_correct)
                {
                        essais -= 1
			printMsg("Le nombre &agrave deviner est " + nb_correct + ". Bravo !\nTu as devin&eacute; en " + essais + " coups." + "<br>" + textereponse[tableau_utilise]);
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
                                printBouton("Rejouer", "jeux1.html", "bouton");
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
	