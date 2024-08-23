/* ----------------- CARREGAR O BANCO DE DADOS ----------*/

const UrlProdutos = "https://f936eba1-a32f-4b54-a5ac-13c05aaeba13-00-1zx5p16bjqihd.spock.replit.dev/produtos"


 function carregaDadosJSONServerPrudutos (func) {
    fetch(UrlProdutos)
        .then (function (response) { return response.json() })
        .then (function (dados) {
          func (dados)
        })
}

/* ----------------- CARREGAR O BANCO DE DADOS ----------*/

const UrlCategorias = "https://f936eba1-a32f-4b54-a5ac-13c05aaeba13-00-1zx5p16bjqihd.spock.replit.dev/categorias"


function carregaDadosJSONServerCategorias (func) {
    fetch(UrlCategorias)
        .then (function (response) { return response.json() })
        .then (function (dados) {
            func (dados)
        })
}

/* -------------------- DIRECIONA PAGINA -------------------------------*/
function HOME() {
    window.location.href = "https://paulohm65.github.io/StorageTracker/HOME/home.html";
}
function INVENTARIO() {
    window.location.href = "https://paulohm65.github.io/StorageTracker/tela_categorais/tela_categorias.html";
}
function BTNCRUD() {
    window.location.href = "https://paulohm65.github.io/StorageTracker/CRUD/nome_produto.html";
}

document.getElementById('btncadastar').addEventListener('click', HOME);
document.getElementById('btninventario').addEventListener('click', INVENTARIO);
document.getElementById('btncrud').addEventListener('click', BTNCRUD);

/* ---------------------- VOLTA A PAGINA ANTIGA  -----------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    // Função para lidar com a mudança de página
    function handlePageChange() {
      // Obtem a URL atual
      var currentPage = window.location.href;
      
      // Faça algo com a URL atual (por exemplo, imprima no console)
      console.log('Página atual:', currentPage);
    }
  
    // Adicione um ouvinte de eventos para o evento "popstate" (mudança de histórico)
    window.addEventListener('popstate', handlePageChange);
  
    // Função para voltar à página anterior
    function goBack() {
      window.history.back();
    }
  
    // Adicione um ouvinte de eventos para o botão de voltar
    var backButton = document.getElementById('img_retorno');
    if (backButton) {
      backButton.addEventListener('click', goBack);
    }
  });
