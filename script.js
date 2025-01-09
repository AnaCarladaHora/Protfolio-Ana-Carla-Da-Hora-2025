document.addEventListener('DOMContentLoaded', function () {
    const aumentarFonteBtn = document.getElementById('aumentarFonte');
    const diminuirFonteBtn = document.getElementById('diminuirFonte');
    const resetarFonteBtn = document.getElementById('resetarFonte');
    const altoContrasteBtn = document.getElementById('altoContraste');
    const textoGrandeBtn = document.getElementById('textoGrande');
    const temaClaroBtn = document.getElementById('temaClaro');
    const temaEscuroBtn = document.getElementById('temaEscuro');
    const body = document.body;
    const accessibilityButton = document.getElementById('accessibilityButton');
    const accessibilityMenu = document.getElementById('accessibilityMenu');
    const navbar = document.querySelector('nav.navbar');
    let currentFontSize = 1; // Tamanho de fonte inicial (1 = 100%)

    // Função para remover todos os temas e ajustes de fonte
    function removeAllThemes() {
        body.classList.remove('alto-contraste', 'tema-claro', 'tema-escuro');
        navbar.classList.remove('tema-claro-navbar', 'tema-escuro-navbar');
        body.style.fontSize = ''; // Remove o ajuste de fonte inline
        currentFontSize = 1;
    }

    // Função para ajustar o tamanho da fonte
    function adjustFontSize(factor) {
        currentFontSize += factor;
          body.style.fontSize = currentFontSize + 'em';
    }
    // Função para resetar tamanho da fonte
    function resetFontSize(){
          currentFontSize = 1;
         body.style.fontSize = currentFontSize + 'em';

     }

    // Aumentar tamanho da fonte
    if (aumentarFonteBtn) {
        aumentarFonteBtn.addEventListener('click', function () {
            removeAllThemes();
              adjustFontSize(0.1); // Aumenta 10%
            if (accessibilityMenu) {
                accessibilityMenu.classList.remove('open');
            }
        });
    }

    // Diminuir tamanho da fonte
    if (diminuirFonteBtn) {
        diminuirFonteBtn.addEventListener('click', function () {
            removeAllThemes();
               adjustFontSize(-0.1); // Diminui 10%
            if (accessibilityMenu) {
                accessibilityMenu.classList.remove('open');
            }
        });
    }
     // Resetar tamanho da fonte
      if(resetarFonteBtn){
        resetarFonteBtn.addEventListener('click', function() {
             removeAllThemes();
             resetFontSize(); // reseta fonte
            if(accessibilityMenu){
                accessibilityMenu.classList.remove('open');
             }
         })
      }
    // Alternar alto contraste
    if (altoContrasteBtn) {
        altoContrasteBtn.addEventListener('click', function () {
            removeAllThemes();
            body.classList.toggle('alto-contraste');
            if (accessibilityMenu) {
                accessibilityMenu.classList.remove('open');
            }
        });
    }

    // Alternar texto grande
      if (textoGrandeBtn) {
          textoGrandeBtn.addEventListener('click', function () {
            removeAllThemes();
              adjustFontSize(0.2);
              if (accessibilityMenu) {
                  accessibilityMenu.classList.remove('open');
                }
         });
     }

    // Aplicar tema claro
    if (temaClaroBtn) {
        temaClaroBtn.addEventListener('click', function () {
            removeAllThemes();
            body.classList.add('tema-claro');
            navbar.classList.add('tema-claro-navbar');
            if (accessibilityMenu) {
                accessibilityMenu.classList.remove('open');
            }
        });
    }

    // Aplicar tema escuro
    if (temaEscuroBtn) {
        temaEscuroBtn.addEventListener('click', function () {
            removeAllThemes();
            body.classList.add('tema-escuro');
            navbar.classList.add('tema-escuro-navbar');
            if (accessibilityMenu) {
                accessibilityMenu.classList.remove('open');
            }
        });
    }

    // Abrir/fechar menu de acessibilidade
    if (accessibilityButton) {
        accessibilityButton.addEventListener('click', function () {
            accessibilityMenu.classList.toggle('open');
        });
    }

     // Efeito de digitação
    const typedTextSpan = document.getElementById('typed-text');
    const phrases = ["Desenvolvedora Front End", "Apaixonada por UX/UI", "Criadora de Interfaces Web", "Tecnologia"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (charIndex < phrases[phraseIndex].length) {
            typedTextSpan.textContent = phrases[phraseIndex].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, 80);
        } else {
            setTimeout(erase, 1500);
            isDeleting = true;
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 40);
        } else {
            isDeleting = false;
            phraseIndex++;
            if (phraseIndex === phrases.length) {
                phraseIndex = 0;
            }
            setTimeout(type, 1000);
        }
    }
    setTimeout(type, 500);


    // Navbar fixa ao scroll
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > navHeight) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });

    // Scroll suave para as seções
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - navHeight,
                behavior: 'smooth'
            });
        });
    });
});