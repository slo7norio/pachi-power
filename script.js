let machines = JSON.parse(localStorage.getItem("machines") || "[]");


function saveMachines() {
localStorage.setItem("machines", JSON.stringify(machines));
}


function renderList() {
const ul = document.getElementById("machineList");
ul.innerHTML = "";


machines.sort((a, b) => a.localeCompare(b, 'ja'));


machines.forEach(name => {
const li = document.createElement("li");
li.innerHTML = `
<span onclick="openMemo('${name}')">${name}</span>
<button onclick="removeMachine('${name}')">×</button>
`;
ul.appendChild(li);
});
}


function addMachine() {
const input = document.getElementById("newMachineInput");
const name = input.value.trim();
if (name === "") return;
machines.push(name);
saveMachines();
renderList();
input.value = "";
}


function removeMachine(name) {
machines = machines.filter(m => m !== name);
saveMachines();
renderList();
}


function openMemo(name) {
location.href = `memo.html?name=${encodeURIComponent(name)}`;
}


renderList();