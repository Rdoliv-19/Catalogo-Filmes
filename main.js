
function adicionarFilme() {
let filme = document.getElementById('filme').value

if(filme.endsWith(".jpg")){
    listaFilmesnaTela(filme)
   } else{
    alert("Endereço de filme inválido")
  }
    document.getElementById("filme").value = ""
}

function listaFilmesnaTela(filme){
  let elementoFilmeFavorito = "<img src="  + filme + ">";
  let elementoListaFilmes = document.getElementById("listaFilmes");
   elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  
}

function limpaLista(){
  let elementoFilmeFavorito = "<img src="  + filme + ">";
  let elementoListaFilmes = document.getElementById("listaFilmes");
   elementoListaFilmes.innerHTML = ""
}

