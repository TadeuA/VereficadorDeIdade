//confirm('Ola! Deseja Algo?')
function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var anoNsc = document.querySelector('input#anoNsc')
    var res = document.querySelector('div#res')
    if(anoNsc.value.length == 0 || Number(anoNsc.value) > ano){
        alert('[Erro] Verefique os dados e tente novamente!')
    }else{
        var sexo = document.getElementsByName('radSex')
        var idade = (ano - Number(anoNsc.value))
        var genero =''
        var foto = document.createElement('img')
        foto.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 2){
                //bebe           
                    foto.setAttribute ('src', '../img/homem/bebe.jpg')
                foto.setAttribute
            }else if(idade < 6){
                //criança pequena
                    foto.setAttribute ('src','../img/homem/criancap.jpg')
        
            }else if(idade  < 11){
                //criaça
                    foto.setAttribute ('src', '../img/homem/crianca.jpg')
                
            }else if(idade  < 14){
                //pré adolecente
                    foto.setAttribute ('src', '../img/homem/preadolescente.jpg')
                
            }else if(idade  < 18){
                //adolecente
                    foto.setAttribute ('src','../img/homem/adolescente.jpg')
               
            }else if(idade < 25){
                //jovem
                    foto.setAttribute('src', '../img/homem/jovem.jpg')
                
            }else if(idade  < 30){
                //adulto
                    foto.setAttribute ('src', '../img/homem/adulto.jpg')
                
            }else if(idade  < 40){
                //meia idade
                    foto.setAttribute('src', '../img/homem/meiaidade.jpg')
                
            }else if(idade < 50){
                //maduro
                    foto.setAttribute('src', '../img/homem/maduro.jpg')
                
            }else if(idade  < 60){
                //tiozao
                    foto.setAttribute('src', '../img/homem/tiozao.jpg')
                
            }else if(idade  < 110){
                //idoso
                    foto.setAttribute('src', '../img/homem/idoso.jpg')
               
            }else{
                //cadaver
                    foto.setAttribute('src','../img/morto.jpg')
            }
            
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade <= 2){
                //bebe           
                    foto.setAttribute('src','../img/mulher/bebe.jpg')
                
            }else if(idade  < 6){
                //criança pequena
                    foto.setAttribute('src', '../img/mulher/criancap.jpg')
        
            }else if(idade  < 11){
                //criaça
                    foto.setAttribute('src', '../img/mulher/crianca.jpg')
                
            }else if(idade  < 14){
                //pré adolecente
                    foto.setAttribute ('src','../img/mulher/preadolescente.jpg')
                
            }else if(idade  < 18){
                //adolecente
                    foto.setAttribute ('src','../img/mulher/adolescente.jpg')
                
            }else if(idade  < 25){
                //jovem
                    foto.setAttribute ('src', '../img/mulher/jovem.jpg')
                
            }else if(idade  < 30){
                //adulto
                    foto.setAttribute ('src', '../img/mulher/adulto.jpg')
                
            }else if(idade < 40){
                //meia idade
                    foto.setAttribute ('src', '../img/mulher/meiaidade.jpg')
                
            }else if(idade < 50){
                //maduro
                    foto.setAttribute ('src','../img/mulher/maduro.jpg')
                
            }else if(idade < 60){
                //tiozao
                    foto.setAttribute ('src','../img/mulher/tiozao.jpg')
                
            }else if(idade < 110){
                //idoso
                    foto.setAttribute ('src','../img/mulher/idoso.jpg')
                
            }else {
                //cadaver
                    foto.setAttribute ('src', '../img/morto.jpg')
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(foto)
    }
  
}


