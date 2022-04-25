// let titulo = document.getElementsByTagName('h1');

funçãoalteraTitulo ( ){
    deixenovoTitulo  =  document . getElementById ( 'novoTitulo' ) . valor ;
 
    documento . getElementById ( 'tituloNovo' ) . innerHTML  =  novoTitulo ;
    // document.getElementsByTagName('h1').textContent = novoTitulo;
    //parece que eu precisaria indicar a posição da matriz
    // document.getElementsByTagName('h1')[0].textContent = novoTitulo
 }
 
 // Calculadora
 
 funçãocalcular(){
    //selecionar valor do menu dropdown
    deixeselectOperator  =  document . getElementById ( 'operacao' ) ;
    deixeselecionadoOperador  =
       selecioneOperador . opções [ selectOperator . Índice selecionado].valor ;
 
    //seleciona valores dos inputs
    let  n1  =  Number ( document . getElementById ( 'n1' ) . value ) ;
 
    let  n2  =  Number ( document . getElementById ( 'n2' ) . value ) ;
 
    //criar resultado variável
    deixeresultado  =  '' ;
 
    //criar interruptor de
 
    switch  ( selectOperator )  {
       caso  '+' :
          resultado  =  n1  +  n2 ;
          quebrar ;
 
       caso  '-' :
          resultado  =  n1  -  n2 ;
          quebrar ;
 
       caso  '*' :
          resultado  =  n1  *  n2 ;
          quebrar ;
       caso  '/' :
          resultado  =  n1  /  n2 ;
          quebrar ;
    }
 
    //imprimindo resultado no documento
    documento . getElementById ( 'resultado' ) . textContent  =  resultado ;
 }