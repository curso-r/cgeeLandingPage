$( document ).ready(function() {
    console.log( "ready!" );
    var shines = $('.shine');
    var texts = $('.text-animated');
    for (let index = 0; index < shines.length; index++) {
        var el = shines[index];
        const delay = (index) +1+ 's';
        // const delay = 1 + 's';
        el.classList.add("glitter-animate");
        el.style.animationDelay       = delay;
        el.style.webkitAnimationDelay = delay;
        el.style.msAnimationDelay     = delay;
        el.style.monAnimationDelay    = delay;
    }
    // for (let index = 0; index < texts.length; index++) {
    //     const el = texts[index];
    //     const delay = (index%5 === 0) ? '0s' : (Math.random() * ((20 - 1)* texts.length) + 1) + 's';
    //     el.classList.add("text-animate");
    //     el.style.animationDelay       = delay;
    //     el.style.msAnimationDelay     = delay;
    //     el.style.webkitAnimationDelay = delay;
    //     el.style.monAnimationDelay    = delay;
    // }


    var palavras=[
        {id:'armazenamento',value:"Armazenamento"},
        {id:'big_push',value:"Big Push"},
        {id:'bioenergia',value:"Bioenergia"},
        {id:'desenvolvimento',value:"Desenvolvimento"},
        {id:'dados_abertos',value:"Dados Abertos"},
        {id:'eficiencia_energetica',value:'Eficiência Energética'},
        {id:'energias_renovaveis',value:'Energias Renováveis'},
        {id:'hidrogenio',value:'Hidrogênio'},
        {id:'indicadores',value:'Indicadores'},
        {id:'inovacao',value:'Inovação'},
        {id:'oportunidades',value:"Oportunidades"},
        {id:'parcerias',value:'Parcerias'},
        {id:'pesquisa_desenvolvimento',value:'Pesquisa & Desenvolvimento'},
        {id:'politicas_publicas',value:'Políticas públicas'},
        {id:'reducao_emissoes',value:'Redução de Emissões'},
        {id:'seguranca_energetica',value:'Segurança energética'},
        {id:'solar',value:'Solar'},
        {id:'solucoes_sustentaveis',value:'Soluções Sustentáveis'},
        {id:'transformacao_digital',value:'Transformação Digital'},
        {id:'transicao_energetica',value:'Transição Energética'}
    ]
  
});