var sadBtn = document.getElementById('sad').style.display = 'none';
var hapBtn = document.getElementById('happy').style.display = 'none';
var angBtn = document.getElementById('angry').style.display = 'none';
var angBtn = document.getElementById('scared').style.display = 'none';
var angBtn = document.getElementById('anxious').style.display = 'none';
var angBtn = document.getElementById('stressed').style.display = 'none';

$(document).ready(function(){
    var radios = document.getElementsByName("feeling");
    var val = localStorage.getItem('feeling');
    for(var i=0;i<radios.length;i++){
      if(radios[i].value == val){
        radios[i].checked = true;
      }
    }
    $('input[name="feeling"]').on('change', function(){
      localStorage.setItem('feeling', $(this).val());
    
    });
  });