/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede ispirandovi alle immagini in allegato
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg
*/


// Creo un array di oggetti che rappresentano i membri del team
// Ogni membro del Team ha le informazioni per stampare la relativa card: Nome, Ruolo e Foto.
const peopleTeam = [
    { Nome : 'Wayne Barnett', 
      Ruolo : 'Founder & CEO', 
      Foto : 'img/wayne-barnett-founder-ceo.jpg',
    },
    { Nome : 'Angela Caroll',
     Ruolo: 'Chief Editor', 
     Foto : 'img/angela-caroll-chief-editor.jpg', 
    },
    { Nome : 'Walter Gordon', 
    Ruolo: 'Office Manager', 
    Foto : 'img/walter-gordon-office-manager.jpg', 
    },
    { Nome : 'Angela Lopez', 
    Ruolo : 'Social Media Manager', 
    Foto : 'img/angela-lopez-social-media-manager.jpg', 
    },
    { Nome : 'Scott Estrada', 
    Ruolo : 'Developer', 
    Foto : 'img/scott-estrada-developer.jpg',
    },
    { Nome : 'Barbara Ramos', 
    Ruolo : 'Graphic Designer', 
    Foto : 'img/barbara-ramos-graphic-designer.jpg' ,
    },
];

// Prendo elemento dal Dom  
// E stampo dinamicamente una card per ogni membro del team
let memberCards = document.querySelector(".team-container"); 

// creo ciclo for
for (let i = 0; i < peopleTeam.length; i++) {

    let cardElement = document.createElement("div");
    let divImgCard = document.createElement("div");
    let imgElement = document.createElement('img');
    let divElementText = document.createElement('div');
    let h3Element = document.createElement('h3');
    let pElement = document.createElement('p');

    imgElement.setAttribute('src', peopleTeam[i].Nome);
    imgElement.setAttribute('src', peopleTeam[i].Foto);

    let h3Text = document.createTextNode(peopleTeam[i].Nome);
    let pElementText = document.createTextNode(peopleTeam[i].Ruolo);

    
    cardElement.classList.add("team-card");
    divImgCard.classList.add('card-image');
    divElementText.classList.add('card-text');

    memberCards.append(cardElement);
    cardElement.append(divImgCard);
    divImgCard.append(imgElement);
    cardElement.append(divElementText);
    divElementText.append(h3Element);
    h3Element.append(h3Text);
    divElementText.append(pElement);
    pElement.append(pElementText);
}
