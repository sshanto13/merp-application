$(".th-sm .fas.fa-filter").click(function(e){
  e.stopPropagation();
  $(".search-form").css("display", "none");
  $(".searchable-select-button").css("display", "none");
  $(".class-select-button").css("display", "none");
  $(this).next().css("display", "block");
});
$('.th-sm .fas.fa-filter').focus(function(e){
  e.stopPropagation();
});
$(".th-sm .search-form").click(function(e){
  e.stopPropagation();
});
$(document).click(function(){
  $(".th-sm .search-form").css("display", "none");
});
/*
$(".search-select").click(function(e){
  e.stopPropagation();
});
*/
$(document).click(function(){
  $(".search-select").css("display", "none");
});
$(".class-select-button").click(function(e){
  e.stopPropagation();
});
$(document).click(function(){
  $(".class-select-button").css("display", "none");
});
$(document).ready(function () {
  $('#dtBasicExample').DataTable();
  $('.dataTables_length').addClass('bs-select');
});
$(document).ready(function () {
  $('#dtBasicExample1').DataTable();
  $('.dataTables_length').addClass('bs-select');
});
