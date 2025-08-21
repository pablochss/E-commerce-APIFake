fetch ('dados.json').then(resposta => resposta.json()).then(corpo =>{

    //Produto 1
    document.getElementById('image').innerHTML = corpo.image
    document.getElementById('nome').innerHTML = corpo.nome
    document.getElementById('preco').innerHTML = corpo.preco
    document.getElementById('descricao').innerHTML = corpo.descricao
    
    //Produto 2
    document.getElementById('image2').innerHTML = corpo.image2
    document.getElementById('nome2').innerHTML = corpo.nome2
    document.getElementById('preco2').innerHTML = corpo.preco2
    document.getElementById('descricao2').innerHTML = corpo.descricao2
    
    //Produto 3
    
    document.getElementById('image3').innerHTML = corpo.image3
    document.getElementById('nome3').innerHTML = corpo.nome3
    document.getElementById('preco3').innerHTML = corpo.preco3
    document.getElementById('descricao3').innerHTML = corpo.descricao3

    console.log(corpo)
    })
    
    function ComprarMouse(){
    Swal.fire({
    title: "Compra feita com sucesso!",
    text: "Mouse Dell MS116, R$ 60,00, Preto, 1000 dpi, com fio.",
    icon: "success"
    });
    }
    function ComprarMousepad(){
    Swal.fire({
    title: "Compra feita com sucesso!",
    text: "Mousepad Dell Original, R$ 15,00, Antiderrapante",
    icon: "success"
    });
    }
    function ComprarNotebook(){
    Swal.fire({
    title: "Compra feita com sucesso!",
    text: "Notebook Latitude 3450, R$ 4.950,00, 13ª geração Intel® Core™ i5-1345U",
    icon: "success"
    });

    
    }

