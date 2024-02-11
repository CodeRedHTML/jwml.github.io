const pass = prompt("Enter the password that was given to you by the server owner or a trusted member.")
let verify = sessionStorage.getItem("verify")

if (pass === "zQcXML91chelervZxy!0_1") {
    if (confirm("Is Walmart racist?") === true) {
        if (confirm("Are you a nigger?") === false) {
            alert("You shall pass")
            document.body.style.visibility = "visible"
        }
    }
}

const webhooks = {
    lucifer: "https://discord.com/api/webhooks/1206126223617429534/DRcJGognz1FR6efjA1yBDnF2lJS_76CFQrVF2llhZx7DNffKntBuhwNSad92PKl1PzSa",
    adam: "https://discord.com/api/webhooks/1206126357378244689/Rd5eNzabJi0iU-V-z_3QMhbz8-XCqUjephh9SkzkQjqzrWW3CXQqQ5Ta9CEq-I2pjNss",
    charlie: "https://discord.com/api/webhooks/1206126383860813845/oXh3R6ipLp91Fqtt3W0loAjsbawuZ3wH9hJYOfyEJevRcTdI8drhJJgJkhLOV7xFn6jC",
    alastor: "https://discord.com/api/webhooks/1206126482305323018/QdS5xP3q9vo86OIow8jAAEtGG97I2tJmmEU4E7ZoGGgc7HHgPgcD6qEV00DlpN0vdTtl",
    angel: "https://discord.com/api/webhooks/1206126544947257364/j2sNsy3qXAE_Doz9JfsTfIcvy5uH3-qRvnzkZ3C-LDueDhs9kEZE6jioPuTQBfhqUZ8R",
    husk: "https://discord.com/api/webhooks/1206126626102968380/xcCgslk0TnhBwPSVCzD_tZ-LqwplKxr8tzp3Hn6uqP-jJk7-KF_6lXrvHOuf8hLoEuzb",
    verbalase: "https://discord.com/api/webhooks/1206126661163155486/qdIf9qORj3JnXX3XhhXzE_aF4FKlgVYkz3fe5z2jGPZGf9HCJBTYKThIrLwcODbUEvuB"
};

const luciferSect = document.getElementById("lucifer");
const adamSect = document.getElementById("adam");
const charlieSect = document.getElementById("charlie")
const alastorSect = document.getElementById("alastor")
const angelSect = document.getElementById("angel")
const huskSect = document.getElementById("husk")
const verbalSect = document.getElementById("verbalase")

const sendLucifer = luciferSect.querySelector("button");
const sendAdam = adamSect.querySelector("button");
const sendCharlie = charlieSect.querySelector("button")
const sendAlastor = alastorSect.querySelector("button");
const sendAngel= angelSect.querySelector("button");
const sendHusk = huskSect.querySelector("button")
const sendVerbal = verbalSect.querySelector("button")

function sendMsg(hook, element) {
    let url;
    if (hook === "lucifer") {
        url = webhooks.lucifer;
    }
    if (hook === "adam") {
        url = webhooks.adam;
    }
    if (hook === "charlie") {
        url = webhooks.charlie;
    }
    if (hook === "alastor") {
        url = webhooks.alastor;
    }
    if (hook === "angel") {
        url = webhooks.angel;
    }
    if (hook === "husk") {
        url = webhooks.husk;
    }
    if (hook === "verbalase") {
        url = webhooks.verbalase;
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

sendCharlie.onclick = function() {
    sendMsg("charlie", sendCharlie);
};

sendAlastor.onclick = function() {
    sendMsg("alastor", sendAlastor);
};

sendAngel.onclick = function() {
    sendMsg("angel", sendAngel);
};

sendHusk.onclick = function() {
    sendMsg("husk", sendHusk);
};

sendVerbal.onclick = function() {
    sendMsg("verbalase", sendVerbal);
};