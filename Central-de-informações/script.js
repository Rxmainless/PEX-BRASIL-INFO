// Função para exibir o modal com detalhes do benefício
function showModal(benefit) {
    var modal = document.getElementById("benefitModal");
    var modalBody = document.getElementById("modal-body");
    
    // Atualiza o conteúdo do modal com base no benefício selecionado
    switch(benefit) {
        case 'sulamerica-odonto':
            modalBody.innerHTML = `
                <h3>SulAmérica Odonto</h3>
                <p>Plano odontológico completo com cobertura nacional.</p>
                <p><a href="documentos/sulamerica-odonto.pdf" download>Baixar Guia Rápido</a></p>
            `;
            break;
        case 'seguro-vida':
            modalBody.innerHTML = `
                <h3>Seguro de Vida</h3>
                <p>Proteção financeira em caso de imprevistos.</p>
                <p><a href="documentos/seguro-vida.pdf" download>Baixar Guia Rápido</a></p>
            `;
            break;
        case 'seguro-residencial':
            modalBody.innerHTML = `
                <h3>Seguro Residencial</h3>
                <p>Cobertura para danos e roubos em sua residência.</p>
                <p><a href="documentos/seguro-residencial.pdf" download>Baixar Guia Rápido</a></p>
            `;
            break;
        case 'medicina-em-tela':
            modalBody.innerHTML = `
                <h3>Medicina em Tela</h3>
                <p>Consultas médicas online com profissionais.</p>
                <p><a href="documentos/medicina-em-tela.pdf" download>Baixar Guia Rápido</a></p>
            `;
            break;
        case 'rede-desconto':
            modalBody.innerHTML = `
                <h3>Rede de Desconto em Farmácias</h3>
                <p>Descontos em medicamentos e produtos de saúde.</p>
                <p><a href="documentos/rede-desconto.pdf" download>Baixar Guia Rápido</a></p>
            `;
            break;
        case 'cesta-natalidade':
            modalBody.innerHTML = `
                <h3>Cesta Natalidade</h3>
                <p>Kit de produtos para recém-nascidos.</p>
                <p><a href="documentos/cesta-natalidade.pdf" download>Baixar Guia Rápido</a></p>
            `;
            break;
        default:
            modalBody.innerHTML = `<p>Benefício não encontrado.</p>`;
    }

    // Exibe o modal
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("benefitModal");
    modal.style.display = "none";
}

// Fechar o modal quando o usuário clicar fora do conteúdo
window.onclick = function(event) {
    var modal = document.getElementById("benefitModal");
    if (event.target == modal) {
        closeModal();
    }
}

function downloadFAQ() {
    window.location.href = 'documentos/SAC-Brasil-Mar.docx';
}

// manipulação de opção de download
document.getElementById('faq-download-btn').addEventListener('click', downloadFAQ);

