var receitas = [
    {
        "id" : 1,
        "nome" : "macarrão tradicional",
        "endereco" : "macarrao.html",
        "img": 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        "id" : 2,
        "nome" : "churros",
        "endereco" : "churros.html",
        "img": "https://images.pexels.com/photos/1730630/pexels-photo-1730630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id" : 3,
        "nome" : "bolo de frutas",
        "endereco" : "bolo.html",
        "img": "https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id" : 4,
        "nome" : "lasanha",
        "endereco" : "lasanha.html",
        "img": "https://images.pexels.com/photos/5864346/pexels-photo-5864346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id" : 5,
        "nome" : "frango ao molho",
        "endereco" : "frango.html",
        "img": "https://images.pexels.com/photos/24182617/pexels-photo-24182617/free-photo-of-desossados-e-asas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id" : 6,
        "nome" : "filé de tilapia",
        "endereco" : "file.html",
        "img": "https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id" : 7,
        "nome" : "isca de camarão",
        "endereco" : "isca.html",
        "img": "https://images.pexels.com/photos/3622477/pexels-photo-3622477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id" : 8,
        "nome" : "hambúrger",
        "endereco" : "hamburguer.html",
        "img": "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id" : 9,
        "nome" : "brownie",
        "endereco" : "brownie.html",
        "img": "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id" : 10,
        "nome" : "panqueca",
        "endereco" : "panqueca.html",
        "img": "https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

document.getElementById('pesquisa').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('campo-pesquisa').value.toLowerCase();
    const encodedQuery = encodeURIComponent(query);

    const resultados = receitas.filter(r => r.nome.toLowerCase().includes(query));

    if (resultados.length > 0) {
        // Armazena os resultados no localStorage
        localStorage.setItem('resultadosPesquisa', JSON.stringify(resultados));
    } else {
        localStorage.setItem('resultadosPesquisa', JSON.stringify([]));
    }

    // Redireciona para a página de resultados
    window.location.href = `resultados.html?query=${encodedQuery}`;
});