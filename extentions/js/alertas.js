/**
 * Created by cesar on 03/08/15.
 */

function AbrirAlerta(){
    swal('teste','acertou','success');
}
function atualizar(){
    sweetAlert({
            title: "Tem certeza?",
            text: $('#nome').val(),
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sim, delete it!",
            closeOnConfirm: false
        },
        function(){
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        });
}

$(document).ready(function () {
    $('#button').click(atualizar);
});