# web animatie

De link naar mijn page: https://kayaskov.github.io/web-animatie/

## De opdracht
Bij de Minor Visual Interface Design aan de Hogeschool van Amsterdam werd mij gevraagd om voor het vak Web Animaties een kunstwerk naar keuze te animeren door middel van HTML/CSS en een beetje Javascript.

## Het kunstwerk
Ik heb voor deze opdracht gekoven voor een advertentie ontworpen door Paul Rand in 1962. Het was een advertentie voor verschillende designers voor het buro Westinghouse in de US wat toen net ging beginnen. Paul Rand was de eerste designer die er was aangenomen en mocht dus de advertentie maken. Ik vind de stijl van Paul Rand super interessant.
![afbeelding van paul rand](LfA_Rand_0092_001.jpg)

Link naar het orginele kunstwerk: http://oa.letterformarchive.org/item?workID=lfa_rand_0092&LFAPics=Yes

Het werk deed, voornamelijk door de kleur en vormen, mij denken aan van de tafels die bij de tandarts staan voor kinderen met van de gekleurde stalen buizen en kralen: een motoriek tafel. Het leek mij leuk om de gebruiker van mijn website uit te dagen om uit te zoeken wat er allemaal voor mogelijkheden zijn op de pagina.

![afbeelding van paul rand](motoriek.jpg)

## De animaties

Desktop:
* Wanneer de pagina opstart verschijnt de grote cirkel door een soort van load effect in beeld.
    #Cirkel_4_ {
    stroke-dasharray: 10000;
    stroke-dashoffset: 10000;
    animation: dash 5s linear forwards;
}

@keyframes dash {
    to {
        stroke-dashoffset: 1000;
    }
}

