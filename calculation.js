const playerArray = [];

function display(name) {
    const playerTable = document.getElementById('player-table');
    playerTable.innerHTML = "";
    for (let i = 0; i < name.length; i++) {
        playerArray[i];
        const singlePlayer = playerArray[i].name;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${singlePlayer}</td>`;
        playerTable.appendChild(tr);
        console.log();

    }
}
function addToTable(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerNameObj = {
        name: playerName
    }

    if (playerArray.length >= 5) {
        alert('this is over');
        return;

    }
    element.disabled = true;
    playerArray.push(playerNameObj);

    display(playerArray)
}