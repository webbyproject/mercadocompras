function adicionarProd() {
        window.alert("Teste")
        let table = document.getElementById("table")
        let linha = document.createElement("tr")
        let produto = document.getElementById("nomeP").value;
        let desc = document.getElementById("descP").value;
        let categ = document.getElementById("categ").value;
        let precProd = document.getElementById("precoP").value;
        let precCusto = document.getElementById("precC").value;
        let quantE = document.getElementById("quantE").value;
        linha.innerHTML=`
        <td>${produto}</td>
        <td>${desc}</td>
        <td>${categ}</td>
        <td>${precProd}</td>
        <td>${precCusto}</td>
        <td>${quantE}</td>`
        
        table.appendChild(linha)
    }