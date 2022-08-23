const playerArray = [];
function addToTable(element) {
    const playerName = element.parentNode.children[0].innerText;
    // elementValue = elementChildren.innerTax;

    // playerArray.push(playerName);
    // console.log(playerArray.length);
    if (playerArray.length >= 5) {
        alert('this is over');
        return;

    }
    playerArray.push(playerName);
    console.log(playerArray.length);
}