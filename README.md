<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Portifolio</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="estilos1.css">
</head>
<body>
   <header id="cabecalho">
      <nav>
            <ul>
               <nav class="hide-on-small-only blue">
        <ul class="left">
               <ul class="right hide-on-med-and-down">
                <li><a href="#sobreMim" class="nav-link">Sobre mim</a></li>
                <li><a href="#conhecimentos" class="nav-link" id="nav-conhecimento">Conhecimentos</a></li>
                <li><a href="#portfolio" class="nav-link">Portfólio</a></li>
                <li><a href="#contato" class="nav-link">Contato</a></li>
            </ul>
            <div class="fixed-action-btn">
            <a class="btn-floating btn-large blue nav-link" href="#cabecalho">
                <i class="large material-icons">keyboard_arrow_up</i>
            </a>
        </div>
                   </ul>
                </nav>
          </ul>
       </nav>
       <nav class="blue hide-on-med-and-up">
       
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons white-text">menu</i></a>
    </nav>
    </header>
            <center>
             <h1>Oi! sou o <spam class="blue-text">Igor</spam></h1>
                <p>Sou estudante de sistemas para internet na Fatec Lins</p><br/>
    </center>
        <section id="sobre Mim">
           
               
            <div class="row">
               
                <div class="col l3 hide-on-med-and-down">
                    <div id="foto">
                        <img src="igor.jpg" alt="Foto de Igor" height="400px">
                    </div>
                </div>

                <div class="col l9 s12">
                    <h2>Sobre mim</h2>
                    <p>Eu gosto de jogar video-game, ir aos estádios para assistir jogos de futebol, moro na cidade de  Promissão e estudo na cidade de  Lins
                    <h2>Mais informações</h2>
                    <p>Moro com os meus pais, gosto muito de viajar e conhecer lugares diferentes.
                    Dentre minhas viagens conheci vários estádios diferentes e várias cidades muito interessantes</p>
                </div>
            </div>
            
             
        </section>
        
        <section id="conhecimentos">
            <h2 class="conhecimento">Conhecimentos</h2>
            
         
               <p>Estou estudando sistemas para internet dento do curso tenho conhecimentos em photoshop, coreldraw, html</p>
            
           <h3>Photoshop</h3>
            <img src="casamento.jpg" height="300" style="border: 5px solid black">

            <h3>CorelDraw</h3>
             <img src="igor.cdr.jpg" height="300" style="border: 5px solid black">
             
            <h3>HTML</h3>
            <img src="1_UgO6iCfWdpW9KlFmBgfnNA.jpeg" height="250" style="border: 5px solid black">
         </section>
        
        <div class="row">
        
        <section id="portfolio">
           <div>
            <h2 class="portifolio">Portfólio</h2>
            <p>Alguns dos meus trabalhos da Fatec</p>
            <div class="row">
                <div class="col s12">
                    <ul class="tabs">
                        <li class="tab col s4"><a href="#pt-flyers" class="black-text">Trabalhos</a></li>
                    </ul>   
                </div>
            </div>

            <img src="caf%C3%A92.jpg" height="300" style="border: 5px solid black" >
            <img src="carro.jpg" height="300" style="border: 5px solid black">
            <img src="Deser%201t.jpg" height="300" style="border: 5px solid black">
            </div>
        
           <section id="contato">
            <h2 class="tituloBranco">Contato</h2>
            <p class="textoBranco">Esses são os meus contatos:</p>
            
            
            <div class="row">
               
                    <div class="col l6 s12">
                    <div id="formulario">
                        <form action="">
                            <input type="text" placeholder="Nome: Igor Giuffrida Reigota"><br>
                            <input type="text" placeholder="Email: igorgreigota@hotmail.com"><br>
                            <input type="text" placeholder="Assunto"><br>
                            <textarea cols="30" rows="16"></textarea><br>
                            <input type="submit" value="Enviar" id="btn-enviar"><br>
                            <img src="facebook1.png" height="50px;">Igor Giuffrida Reigota <br>
                            <img src="whatsApp.png" height="50px;">  (14) 981829344<br>                  
                        </form>
                    </div>
                </div>

                <div class="col l6 s12 hide-on-small-only">
                    <div id="mapa">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.395785771856!2d-49.8610147855953!3d-21.53137419564986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94be05893f26a68d%3A0xb12ec195257eec72!2sR.%20Tiradentes%2C%20164%2C%20Promiss%C3%A3o%20-%20SP%2C%2016370-000!5e0!3m2!1spt-BR!2sbr!4v1590776608184!5m2!1spt-BR!2sbr" width="600" height="465" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
                       </iframe>
                        
                                  
                    </div>
                </div>
               </div>
            </section>
            </section>
    </div>
    </body>
 </html>
