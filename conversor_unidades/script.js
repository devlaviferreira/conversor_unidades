const unidadesPorCategoria = {
    comprimento: ["metro", "quilometro", "pe", "milha"],
    massa: ["quilometro", "grama", "libra"],
    tempo: ["segundo", "minuto", "hora"]
};

function carregarUnidades() {
    const categoriaSelecionada = document.getElementById("categoria").value;
    const unidadeOrigem = unidadesPorCategoria[categoriaSelecionada];

    document.getElementById("unidadeOrigem").innerHTML = "";
    document.getElementById("unidadeDestino").innerHTML = "";

    unidadeOrigem.forEach(unidade => {
        const optionOrigem = document.createElement("option");
        optionOrigem.value = unidade;
        optionOrigem.textContent = unidade;

        const optionDestino = optionOrigem.cloneNode(true);

        document.getElementById("unidadeOrigem").appendChild(optionOrigem);
        document.getElementById("unidadeOrigem").appendChild(optionDestino);
    });
}

function converter() {
    var valor = parseFloat(document.getElementById("valor").value);
    var unidadeOrigem = document.getElementById("unidadeOrigem").value;
    var unidadeDestino = document.getElementById("unidadeDestino").value;

    if (isNaN(valor)) {
        alert("Por favor, digite um valor numérico.");
        return;
    }

    var resultado = realizarConversao(valor, unidadeOrigem, unidadeDestino)

    document.getElementById("resultado").innerHTML = `${valor} ${unidadeOrigem} é igual a ${resultado.toFixed(2)} ${unidadeDestino}.`;
}

function realizarConversao(valor, unidadeOrigem, unidadeDestino) {
    if (unidadeOrigem === "quilograma" && unidadeDestino === "librametro") {
        return valor * 2.2046;
    } else if (unidadeOrigem === "librametro" && unidadeDestino === "quilograma") {
        return valor / 2.2046;
    }
    
    if (unidadeOrigem === "metro" && unidadeDestino === "polegada") {
        return valor * 39.37;
    } else if (unidadeOrigem === "polegada" && unidadeDestino === "metro") {
        return valor / 39.37;
    }
    
    if (unidadeOrigem === "metro" && unidadeDestino === "pe") {
        return valor * 3.2808;
    } else if (unidadeOrigem === "pe" && unidadeDestino === "metro") {
        return valor / 3.2808;
    }
    
    if (unidadeOrigem === "metroCubico" && unidadeDestino === "polegadaCubica") {
        return valor * 61024;
    } else if (unidadeOrigem === "polegadaCubica" && unidadeDestino === "metroCubico") {
        return valor / 61024;
    }
    
    if (unidadeOrigem === "metroCubico" && unidadeDestino === "peCubico") {
        return valor * 35.315;
    } else if (unidadeOrigem === "peCubico" && unidadeDestino === "metroCubico") {
        return valor / 35.315;
    }
    
    if (unidadeOrigem === "metroCubico" && unidadeDestino === "galao") {
        return valor * 264.17;
    } else if (unidadeOrigem === "galao" && unidadeDestino === "metroCubico") {
        return valor / 264.17;
    }
    
    if (unidadeOrigem === "metroCubico" && unidadeDestino === "litro") {
        return valor * 10**3;
    } else if (unidadeOrigem === "litro" && unidadeDestino === "metroCubico") {
        return valor / 10**3;
    }      
    
    if (unidadeOrigem === "metroCubico" && unidadeDestino === "barril") {
        return valor * 6.2898;
    } else if (unidadeOrigem === "barril" && unidadeDestino === "metroCubico") {
        return valor / 6.2898;
    }
 
    if (unidadeOrigem === unidadeDestino) {
        return valor;
    }
    
    alert("Conversão não suportada para as unidades selecionadas.");
    return null;
}