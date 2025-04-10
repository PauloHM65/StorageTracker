const btnToggle = document.getElementById("btn-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

btnToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

function HOME() {
    window.location.href = "/HOME/home.html";
}
function INVENTARIO() {
    window.location.href = "/tela_categorais/tela_categorias.html";
}
function BTNCRUD() {
    window.location.href = "/CRUD/nome_produto.html";
}
function USUARIO() {
  window.location.href = "/Usuarios/Usuarios.html";
}

document.getElementById('btnHome').addEventListener('click', HOME);
document.getElementById('btnInventario').addEventListener('click', INVENTARIO);
document.getElementById('btncrud').addEventListener('click', BTNCRUD);
document.getElementById('btnUsuarios').addEventListener('click', USUARIO);

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
