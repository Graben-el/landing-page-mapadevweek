// 1. CAPTURAR OS ELEMENTOS DAS IMAGENS

const imagensPainel = document.querySelectorAll('.imagem-painel')

// 2. CAPTURAR OS ELEMENTOS COM AS SETAS DE AVANÇAR E VOLTAR

const setaAvancar = document.querySelector('.btn-avancar')

const setaVoltar = document.querySelector('.btn-voltar')

// 3. CONTADOR PARA IMAGEM NO PAINEL

let imagemAtual = 0

// 4. CRIAR EVENTOS DE MOUSE PRA QUANDO CLICAR NAS SETAS

setaAvancar.addEventListener('click', () => {
    (imagemAtual === 1) ? setaAvancar.style.opacity = '0' : setaVoltar.style.opacity = '1'
    
    if (imagemAtual === imagensPainel.length - 1) return
    
    imagemAtual++
    
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })

    imagensPainel[imagemAtual].classList.add('mostrar')

})

setaVoltar.addEventListener('click', () => {
    (imagemAtual > 1) ? setaVoltar.style.opacity ='1' : setaVoltar.style.opacity = '0'
    setaAvancar.style.opacity = '1'
    
    if (imagemAtual === 0) return

    imagemAtual--
    console.log(imagemAtual);
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })

    imagensPainel[imagemAtual].classList.add('mostrar')

})