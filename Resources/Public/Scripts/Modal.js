window.getCookie = function(name){
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
};



document.addEventListener('DOMContentLoaded', function () {


  let $pageModal = $('.tx-popups .modal');
  if($pageModal.length >0 ){
    var alreadySeen = window.getCookie('popups_' + $pageModal.attr('id'));
    if (parseInt(alreadySeen) !== 1) {


      $pageModal.modal('show');
      $pageModal.find('.close').click(function () {
        $pageModal.modal('toggle');
      });
      $pageModal.on('hidden.bs.modal', function () {
        document.cookie = 'popups_' + $pageModal.attr('id') + '=1; expires=Fri, 31 Dec ' + (new Date().getFullYear() + 1) + ' 23:59:59 GMT';

      });
    }

  }
  console.log('ASD');
});
