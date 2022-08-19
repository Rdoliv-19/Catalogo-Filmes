
function adicionarFilme() {
let filme = document.getElementById('filme').value

if(filmeFavorito.endsWith(".jpg")){
    listaFilmesnaTela(filmeFavorito)
   } else{
    console.error("Endereço de filme inválido")
  }
    document.getElementById("filme").value = ""
}

function listaFilmesnaTela(filme){
  var elementoFilmeFavorito = "<img src="  + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
   elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML+          elementoFilmeFavorito;
  
}