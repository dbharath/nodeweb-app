$(document).ready(function(){

  $('#form-signup-btn').click(function(event){
    event.preventDefault();
      $.post("/user/signupdetails",$('#form-signup').serialize(),function(response) {
        if(!response.error) {
          $('#container').html(response);
        } else {
          $('#error').html(response.error);
        }
      });
    return false;
  });

  $('#form-signin-btn').click(function(ev){
    ev.preventDefault();
      $.post("/user/signin",$('#form-signin').serialize(),function(res){
        if(!res.msg){
          $('#container').html(res);
        } else {
          $('#div_error').html(res.msg);
        }
      });
    return false;
  });
  /*
  $('.follow-btn').unbind('click');
  $('.follow-btn').live('click',function(e){
    e.preventDefault();
    var id = $(this).attr('id');
     $.post("/user/follow",{'id':id},function(res){
       if(!res.error){
          $('#user-follow').html(res.message);
       } else {
          $('#div_error').html(res.error);
       }
     });
  });
  $('#upload-status-btn').click(function(evnt){
     evnt.preventDefault();
     $.post("/user/updateStatus",{'textArea':$('#textId').val()},function(res){
        if(!res.error){
          $('#user-follow').html(res.status);
        } else {
          $('#error').html(res.err);
        }
     });
  });
  */
});
