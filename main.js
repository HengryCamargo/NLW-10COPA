function creatGame(player1, hour, player2){
    return`
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Logo da ${player1}">
    <strong> ${hour}</strong> 
    <img src="./assets/icon-${player2}.svg" alt="Logo ${player2}">
</li>  
    `

}

function creatCard(date, day, games){
  return `
  <div class="cardss">
  <h2>${date} <span>${day}</span></h2>

  <ul>
     ${games}
  </ul>
</div>
  `  
}

document.querySelector("#app").innerHTML = `
<header>
<img src="./assets/logo.svg" alt="Logo NLW">
</header>
<main id="cards">
${creatCard('21/11', 'segunda',
creatGame("brazil", "08:00", "camaroes") + 
creatGame("hungria", "13:00", "argentina") +
creatGame("colombia", "20:00", "japao") )}
 
 ${creatCard('24/11', 'quarta',
 creatGame("sla", "08:00", "camaroes") + 
 creatGame("india", "13:00", "anu") +
 creatGame("menos", "20:00", "jordania")
 
 )}

 ${creatCard('28/11', 'segunda',
 creatGame("corea-do-sul", "10:00", "camaroes") + 
 creatGame("brazil", "13:00", "suiça") +
 creatGame("portugal", "16:00", "uruguai")
 
 )}

 ${creatCard('02/12', 'sexta',
 creatGame("portugal", "12:00", "corea-do-sul") +
 creatGame("brazil", "16:00", "camaroes") + 
 creatGame("servia", "16:00", "suiça") 
 
 )}

</main>
`