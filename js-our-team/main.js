//inizializzazione
const nuovoContenuto = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda autem nesciunt eum aliquam natus quaerat ipsa, quibusdam laborum commodi ullam dolorum necessitatibus, praesentium sequi nihil nobis numquam accusantium iure fuga.";
document.getElementById("contenuto").innerHTML = nuovoContenuto;
let renderStart = new Date().getTime();


const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

/* // Legge quanti elementi contiene l'oggetto
const totaleElementi = teamMembers.length;
console.log(totaleElementi); */
/* 
// Seleziona il contenitore flex
const container = document.getElementById('flex-container'); //da creare in html
 */

function renderTeam(teamMembers) {
    const teamCardsContainer = document.querySelector("#team-container");
    let htmlDaScrivere = "";
    for (const thisMember of teamMembers) {
        htmlDaScrivere += getMemberCard(thisMember);
    }
    teamCardsContainer.innerHTML = htmlDaScrivere;
}


function getMemberCard(member) {

    return `
<div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="card rounded-0 border-0 text-bg-dark">
                <div class="row g-0 align-items-center">
                    <div class="col-5">
                        <img src="assets/${member.img}" class="img-fluid rounded-0" alt="${member.name}">
                    </div>
                    <div class="col-7">
                        <div class="card-body">
                            <h3 class="card-title text-uppercase fw-bold">${member.name}</h3>
                            <p class="card-text">${member.role}</p>
                                <a href="#" class="card-link">${member.email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

}


window.onload = function () {
    const timerContainer = document.querySelector(".timer-container");
    let elapsed = new Date().getTime() - renderStart;
    timerContainer.innerHTML = `Pagina renderizzata in:  ${elapsed} ms`;
}

// Renderizza cards
renderTeam(teamMembers);

