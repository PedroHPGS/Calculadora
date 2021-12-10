function mostrarNome() {
    let divNova = document.createElement("div");
    let imputNome = document.querySelector("#nome");
    
    let divNor = document.createElement("div");
    
    let textoNovo = document.createTextNode(`Bem-vindo(a)! ${imputNome.value} anos.`);

    divNova.appendChild(textoNovo);
    document.body.appendChild(divNova);
}

let botaoOk = document.querySelector("#botao");
botaoOk, ondblclick = mostrarNome;