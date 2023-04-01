function select(clicado){
    const anterior = document.querySelector("selecionado");
    if (anterior != null) {
        anterior.classList.toggle("selecionado");
    }
    clicado.classList.add("selecionado");
    }
