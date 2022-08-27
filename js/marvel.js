marvel = document.getElementById("enviar-marvel");
marvel.addEventListener("click", function(e){
  e.preventDefault();

    heroi = document.getElementById("heroi").value.toUpperCase();
    imagem = document.getElementById("heroi").value.toLowerCase().replace(/ /g, "")
    quantidade = document.getElementById("quantidade").value.toUpperCase();
    n = 1;

    if(heroi!="DOUTOR ESTRANHO" && heroi!="HOMEM ARANHA" && heroi!="HULK" && heroi!="PANTERA NEGRA" && heroi!="THOR"){
      document.write("<link rel='stylesheet' href='css/style.css'> <div class='containerjs'> <h1 class='title-js'>O herói " + heroi + " não foi encontrado!");
    } 
    else{    
      document.write("<link rel='stylesheet' href='css/marvel.css'> <div class='containerjs'> <h1 class='title-js'>Você escolheu " + heroi + " " + quantidade + " vez(es)!</h1>");
      while(n<=quantidade){
        document.write("<link rel='stylesheet' href='css/marvel.css'> <div class='containerjs'> <div class='card'> <img src='img/marvel/" + imagem + ".jpg'> </div></div>");
        n++;
      }
      document.write("</div>")
    }  
  
});