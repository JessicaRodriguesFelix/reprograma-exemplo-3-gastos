const button = document.querySelector(".transacao__button");

button.addEventListener('click', function (event) {
    event.preventDefault();

    const tabela = document.querySelector(".extrato__table");
    const inputNome = document.querySelector("#transacaoInputName");
    const inputValor = document.querySelector("#transacaoInputMoney");
    const inputData = document.querySelector("#transacaoInputDate");

    if (inputNome.value == "") {
        alert("Campo nome Vazio!");
    }
    else if (inputValor.value == "") {
        alert("Campo Valor Vazio");
    }
    else if (inputData.value == "") {
        alert("Campo Data Vazio");
    }
    else {
        const linha = document.createElement("tr");

        const colunaNome = document.createElement("td");
        const colunaNomeConteudo = document.createTextNode(inputNome.value);
        colunaNome.appendChild(colunaNomeConteudo);

        const colunaValor = document.createElement("td");
        const colunaValorConteudo = document.createTextNode(inputValor.value);
        colunaValor.appendChild(colunaValorConteudo);

        const colunaData = document.createElement("td");
        const colunaDataConteudo = document.createTextNode(inputData.value);
        colunaData.appendChild(colunaDataConteudo);

        linha.appendChild(colunaNome);
        linha.appendChild(colunaValor);
        linha.appendChild(colunaData);

        tabela.appendChild(linha);
    }

})