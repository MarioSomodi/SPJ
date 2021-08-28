var num = 0;
$(document).ready(function () {
  $('#search').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('tbody tr').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
function AddSubject() {
  var tbody = $('tbody');
  var subjectName = $('#inputSubjectName').val();
  var yearSem = $('#select-year').val();
  var ectsButtons = $('#ectsBodovi').val();
  num++;
  tbody.append(
    '<tr id = "' +
      num +
      '">' +
      '<td>' +
      subjectName +
      '</td>' +
      '<td>' +
      yearSem +
      '</td>' +
      '<td>' +
      ectsButtons +
      '</td>' +
      '<td> <button onclick="RemoveSubject(' +
      num +
      ')" type="button" class="btn btn-danger">X</button></td>' +
      '<td>' +
      ' <input onclick="Succesfuly()" type="checkbox" name="CheckBox"/>' +
      '</td>' +
      '</tr>'
  );
}

function RemoveSubject(num) {
  var rowToDelete = $('tbody #' + num);
  rowToDelete.remove();
}

function Succesfuly() {
  $('input[name="CheckBox"]').on('change', function () {
    $(this).closest('tr').toggleClass('green', $(this).is(':checked'));
  });
}
