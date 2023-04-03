function selectprato(clicado){
    const anterior = document.querySelector(".pratoprincipal")
    const nome = document.querySelector(".pratoprincipal h2")
    if(anterior != null ){
        anterior.classList.remove("selecionado")
        anterior.classList.remove("pratoprincipal")

    }
    /*const nome = document.querySelector(".pratoprincipal h2")
    nome.innerHTML("esta funcionando")*/
    clicado.classList.add("selecionado")
    clicado.classList.add("pratoprincipal")
    alert(nome.innerHTML)

}
function selectbebida(clicado){
    const anterior = document.querySelector(".bebida")
    if(anterior != null ){
        anterior.classList.remove("selecionado")
        anterior.classList.remove("bebida")
    }
    clicado.classList.add("selecionado")
    clicado.classList.add("bebida")
}
function selectsobremesa(clicado){
    const anterior = document.querySelector(".sobremesa")
    if(anterior != null ){
        anterior.classList.remove("selecionado")
        anterior.classList.remove("sobremesa")
    }
    clicado.classList.add("selecionado")
    clicado.classList.add("sobremesa")
}
function finalizar_pedido(){
    const prato = document.querySelector(".pratoprincipal")
    const bebida = document.querySelector(".bebida")
    const sobremesa = document.querySelector(".sobremesa")
    const botão = document.querySelector(".pedido_indisponivel")
    if(prato != null && bebida != null && sobremesa != null){
        botão.classList.remove("pedido_indisponivel")
        botão.classList.add("finalizar_pedido")
        botão.innerHTML = "Fechar pedido"
        document.getElementById("botão").disabled = false;
    }
}
function enviarMensagem() {
    const numero = "5521970124125";
    const mensagem = "Olá, gostaria de fazer o pedido ";
    const pratonome = document.querySelector(".pratoprincipal h2").innerHTML
    const bebidanome = document.querySelector(".bebida h2").innerHTML
    const sobremesanome = document.querySelector(".sobremesa h2").innerHTML
    window.open("https://web.whatsapp.com/send?phone=" + numero + "&text=" + mensagem + pratonome + ", "+bebidanome +", "+ sobremesanome);
}
