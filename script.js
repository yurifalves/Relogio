function displayJson1(url) {
    async function getJsonPromise(url) {
        const response = await fetch(url);
        const promise = response.json();
        return promise;
    }

    getJsonPromise(url).then((json) => console.log(json));
}

function displayJson2(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

function dadoFormatado(dado) {
    if (dado < 10) {
        dado = '0' + dado.toString();
    }
    return dado;
}

function dataAtual () {
    const date = new Date();

    const dia = dadoFormatado(date.getDate());
    const mes = dadoFormatado(date.getMonth()+1);
    const ano = dadoFormatado(date.getFullYear());

    const horas = dadoFormatado(date.getHours());
    const minutos = dadoFormatado(date.getMinutes());
    const segundos = dadoFormatado(date.getSeconds());

    return `${dia}/${mes}/${ano}, ${horas}:${minutos}:${segundos}`;
}
