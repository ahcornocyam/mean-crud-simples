$(document).ready( function () {
    $.material.init();
    $(".remove").click(function(){
      swal({
       title: "Teste 7",
       text: "Vou fechar sozinho",
       timer: 1200,
       showConfirmButton: false
   });
   });
  });