function entrar() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "amor" && pass === "123") {
        document.getElementById("login").style.display = "none";
        document.getElementById("conteudo").style.display = "block";
    } else {
        document.getElementById("erro").innerText = "Erro 😢";
    }
}

function mostrar(id) {
    let abas = document.querySelectorAll(".aba");
    abas.forEach(aba => aba.style.display = "none");

    document.getElementById(id).style.display = "block";
}

// Criar corações caindo
setInterval(() => {
    let heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    document.querySelector(".coracoes").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 300);