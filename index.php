<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfólio</title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="shortcut icon" href="./img/elementos/icone.ico" type="image/x-icon">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>
        <header>
           <?php include_once('./includes/navbar.php') ?>
        </header>

        <section id="banner" class="banner">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/banner1.jpg" class="d-block w-100" alt="Imagem 1">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Título Imagem 1</h5>
                            <p>Breve descrição sobre a imagem 1.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./img/elementos/gif.gif" class="d-block w-100" alt="Imagem 2">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Título Imagem 2</h5>
                            <p>Breve descrição sobre a imagem 2.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/banner3.jpg" class="d-block w-100" alt="Imagem 3">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Título Imagem 3</h5>
                            <p>Breve descrição sobre a imagem 3.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>

        <main>
            <section id="projects" class="projects">
                <h2>Meus Trabalhos</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <h3>1º Ano</h3>
                    </div>
                    <div class="project-card">
                        <h3>2º Ano</h3>
                    </div>
                    <div class="project-card">
                        <h3>3º ano</h3>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <div>
                <h4>Desenvolvedores</h4>
                <p>&copy;BellaFGS</p> 
            </div>
            <div>
                <h4>Contatos</h4>
                <p><a href="#">Curriculum </a></p> 
                <p><a href="https://www.instagram.com/bella_f.g.s/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1">Instagram</a></p> 
                <p><a href="https://www.linkedin.com/in/isabella-ferreira-gomes-da-silva-355734248">Linkedin</a></p> 
                <p><a href="https://wa.me/5515988262655?text=Isabella%20F.G.S.%20Desenvolvedora%20%2Cartista%20e%20futura%20game%20desingner">WhatsApp</a></p> 
            </div>
            <div>
                <h4>Guia de navegação</h4>
                <p><a href="">Início</a></p>
                <p><a href="">Projetos</a></p>
                <p><a href="">Sobre</a></p>
                <p><a href="">Trabalhos</a></p>
            </div>
        </footer>

        <script src="js/main.js"></script>
    </body>
</html>
