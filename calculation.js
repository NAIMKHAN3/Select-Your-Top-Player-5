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
        alert('Top 5 player already Selected');
        return;

    }
    element.disabled = true;
    playerArray.push(playerNameObj);

    display(playerArray)
}

const calculationBtn = document.getElementById('calculate-btn').addEventListener('click', function () {

    const tablePlayer = document.getElementById('player-table');
    const tableboxString = tablePlayer.childNodes.length;
    const tablebox = parseFloat(tableboxString);
    // console.log(tablebox);
    const perPlayerInputField = document.getElementById('per-player-field');
    const perPlayerFieldString = perPlayerInputField.value;
    const perPlayerField = parseFloat(perPlayerFieldString);
    const playerAmount = tableboxString * perPlayerFieldString;
    const playersAmount = document.getElementById('players-amount');
    const playersAmountString = playersAmount.innerText;
    const Amountplayers = parseFloat(playersAmountString);
    perPlayerInputField.value = "";
    playersAmount.innerText = playerAmount;
    // condition
    if (perPlayerFieldString <= 0 || perPlayerFieldString == "") {
        alert("amount must be filled out");
        return false;
    }

})

// total calculation

const totalCalculation = document.getElementById('total-calculation').addEventListener('click', function () {
    const playersAmount = document.getElementById('players-amount');
    const playersAmountString = playersAmount.innerText;
    const Amountplayers = parseFloat(playersAmountString);

    // manager field
    const managerInputField = document.getElementById('manager-field');
    const managerFieldString = managerInputField.value;
    const managerField = parseFloat(managerFieldString);
    managerInputField.value = "";
    if (managerFieldString <= 0 || managerFieldString == "") {
        alert("Manager amount must be filled out");
        return false;
    }
    // console.log(managerField)

    // coch field
    const cochInputField = document.getElementById('coch-field');
    const cochFieldString = cochInputField.value;
    const cochField = parseFloat(cochFieldString);
    cochInputField.value = "";
    if (cochFieldString <= 0 || cochFieldString == "") {
        alert("Coch amount must be filled out");
        return false;
    }
    // console.log(cochField)
    const calculationTotal = Amountplayers + managerField + cochField;
    // console.log(calculationTotal);


    // total money
    const totalMoney = document.getElementById('total-money');
    const totalMoneyString = totalMoney.innerText;
    const totalCalculateMoney = parseFloat(totalMoneyString);
    if (Amountplayers === 0) {
        alert('player amount not selected')
        return false;
    }
    totalMoney.innerText = calculationTotal;

})




