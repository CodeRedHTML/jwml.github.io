const pass = prompt("Enter the password that was given to you by the server owner or a trusted member.")

if (pass === "zQcXML91chelervZxy!0_1") {
    if (confirm("Is Walmart racist?") === true) {
        if (confirm("Are you a nigger?") === false) {
            alert("You shall pass")
            document.body.style.visibility = "visible"
        }
    }
}

const webhooks = {
    lucifer: "https://discord.com/api/webhooks/1206038924531732540/Q-_cJwm2sbGj226MAvfYxpkZYcVIrf_O0fDok1WZKmRHOV8kFar-ICr-7UasqdL35lfD",
    adam: "https://discord.com/api/webhooks/1206047349433040967/zqMLuksuoHJsa9mwtAFpqZjrENsMHW-GCC-D1-kbYvbMyzpoICgnwG30FEa1ZvLlwtmD"
};

const luciferSect = document.getElementById("lucifer");
const adamSect = document.getElementById("adam");

const sendLucifer = luciferSect.querySelector("button");
const sendAdam = adamSect.querySelector("button");

function sendMsg(hook, element) {
    let url;
    if (hook === "lucifer") {
        url = webhooks.lucifer;
    }
    if (hook === "adam") {
        url = webhooks.adam;
    }
    const parent = element.parentElement; // Removed the parentheses

    const textarea = parent.querySelector("textarea");
    const input = parent.querySelector("input[type='file']");
    const file = input.files[0];

    let formData = new FormData();
    formData.append('content', textarea.value);
    if (file) {
        formData.append('file', file);
    }

    fetch(url, {
        method: 'POST',
        body: formData
    }).catch(console.error);
}

sendLucifer.onclick = function() {
    sendMsg("lucifer", sendLucifer);
};

sendAdam.onclick = function() {
    sendMsg("adam", sendAdam);
};
