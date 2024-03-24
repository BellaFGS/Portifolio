/**
 * Passa os dados do cliente para o Modal, e atualiza o link para exclusão
 */
$('#deleteModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var id = button.attr('data-customer');

  var modal = $(this);

  if (isAdmin) {
    modal.find('.modal-title').text('Excluir Cliente: (' + id + ') ?');
    modal.find('.modal-body').text('Deseja realmente excluir esse cliente (' + id + ') ?');
  } else {
    modal.find('.modal-title').text('Acesso negado');
    modal.find('.modal-body').text('Apenas ADMINISTRADORES podem apagar');
  }

  modal.find('#confirm').attr('href', 'delete.php?id=' + id);
});



$('#deleteUser').on('show.bs.modal', function (event) {

  var button = $(event.relatedTarget);
  var id = button.data('usuario');

  var modal = $(this);
  
  if (isAdmin) {
    modal.find('.modal-title').text('Excluir Cliente: (' + id + ') ?');
    modal.find('.modal-body').text('Deseja realmente excluir esse cliente (' + id + ') ?');
  } else {
    modal.find('.modal-title').text('Acesso negado');
    modal.find('.modal-body').text('Apenas ADMINISTRADORES podem apagar');
  }
  modal.find('#confirm').attr('href', 'delete.php?id=' + id);
})

$('#deleteGen').on('show.bs.modal', function (event) {

  var button = $(event.relatedTarget);
  var id = button.data('gerente');

  var modal = $(this);
  
  if (isAdmin) {
    modal.find('.modal-title').text('Excluir Cliente: (' + id + ') ?');
    modal.find('.modal-body').text('Deseja realmente excluir esse cliente (' + id + ') ?');
  } else {
    modal.find('.modal-title').text('Acesso negado');
    modal.find('.modal-body').text('Apenas ADMINISTRADORES podem apagar');
  }
  modal.find('#confirm').attr('href', 'delete.php?id=' + id);
})

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("data").setAttribute("max", today);
