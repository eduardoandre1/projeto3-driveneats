function selectprato(clicado){
    const anterior = document.querySelector(".pratoprincipal")
    if(anterior != null ){
        anterior.classList.remove("selecionado")
        anterior.classList.remove("pratoprincipal")
    }
    clicado.classList.add("selecionado")
    clicado.classList.add("pratoprincipal")
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
        botão.innerHTML = "finalizar pedido"
    }
}

