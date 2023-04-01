
function selectprato(clicado){
    const anterior = document.querySelector(".selecionado");
    const pratoprincipal = document.querySelector(".pratoprincipal")
    if (anterior != null && pratoprincipal == null){
        anterior.classList.remove("selecionado");
        pratoprincipal.classList.add("pratoprincipal");
        alert("prato");
    }
    clicado.classList.add("selecionado");
    pratoprincipal.classList.remove("pratoprincipal");
}
function selectbebida(clicado){
    const anterior = document.querySelector(".selecionado");
    const bebida = document.querySelector(".bebida .itens");
    if (bebida != null ){
        anterior.classList.remove("selecionado");
        bebida.classList.remove("bebida");
        alert("bebida")
    }
    clicado.classList.add("selecionado bebida");
    bebida.classList.remove("bebida");    
}

function selectsobremesa(clicado){
    const anterior2 = document.querySelector(".selecionado");
    const sobremesa = document.querySelector(".sobremesa");
    if (anterior2 != null && sobremesa != null) {
        anterior2.classList.remove("selecionado");
        sobremesa.classList.remove("sobremesa");
    }
    clicado.classList.add("selecionado");
    sobremesa.classList.remove("sobremesa");    
}


