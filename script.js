document.addEventListener('DOMContentLoaded', () => {
             // --- MENU MOBILE ---
    const mobileToggleBtn = document.getElementById('mobileToggleBtn');
    const mobileDropdown = document.getElementById('mobileDropdown');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggleBtn && mobileDropdown) {
        // Seleciona a tag do ícone (i ou svg) dentro do botão
        const icon = mobileToggleBtn.querySelector('i');

        mobileToggleBtn.addEventListener('click', () => {
            const isOpen = mobileDropdown.classList.toggle('active');

            // Troca a classe do ícone conforme o estado do menu
            if (icon) {
                if (isOpen) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark'); // Símbolo do "X"
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');  // Volta ao Hambúrguer
                }
            }
        });

        // Fechar menu ao clicar em qualquer link e resetar o ícone para hambúrguer
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDropdown.classList.remove('active');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }


    // --- PERGUNTAS FREQUENTES (FAQ ACCORDION) ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // --- FORMULÁRIO DO SIMULADOR ---
    const simuladorForm = document.getElementById('simuladorForm');

    if (simuladorForm) {
        simuladorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const modalidade = document.getElementById('modalidade').value;
            const periodo = document.getElementById('periodo').value;
            const motivo = document.getElementById('motivo').value;

            const telefone = "5500000000000"; // Insira aqui o número correto com DDD

            let texto = `Olá Dr. Alex! Meu nome é *${nome}*.\n`;
            texto += `Gostaria de agendar uma consulta na modalidade: *${modalidade}*.\n`;
            texto += `Tenho preferência pelo período da: *${periodo}*.\n`;
            if (motivo) {
                texto += `Assunto principal: ${motivo}`;
            }

            const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
            window.open(url, '_blank');
        });
    }
});
