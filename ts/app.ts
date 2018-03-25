function startGame(){
    let playerName : string = 'Kibret';
    logPlayer(playerName);

    var messagesElement = document.getElementById('display');
    messagesElement.innerText = 'Welcome to KT Casion Starting a new game...';
    console.log('Starting a new Game.');
}
function logPlayer(name){
    console.log(`New game starting for Player: ${name}`);
}

document.getElementById('submit').addEventListener('click',startGame);