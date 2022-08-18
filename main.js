let filme = document.getElementById('filme').value

if(filmeFavorito.endsWith(".jpg")){
    listaFilmesnaTela(filmeFavorito)
   } else{
    console.error("Endereço de filme inválido")
  }
    document.getElementById("filme").value = ""
