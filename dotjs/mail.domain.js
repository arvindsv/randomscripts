// vim: sw=2 ts=2 expandtab
$(document).ready(function() {
    var username = "DOMAIN\\YOURUSERNAME";
    var password = "YOURPASSWORD";

    if($("#password").length > 0 && $("#trInvCrd").length == 0) {
      $("#rdoPrvt").click();

      if(!$("#chkBsc").is(":checked")) {
        $("#chkBsc").attr("checked", true)[0].onclick();
      }

      $("#username").val(username);
      $("#password").val(password);
      $(":submit").click();
    }
});

$(document).ready(function() {
  var colorOfInbox = $('a[name="lnkFldr"][title="Inbox"]').parent('td').css('background-color');
  var isInInbox = (typeof colorOfInbox != "undefined") && (colorOfInbox != "rgba(0, 0, 0, 0)");

  if (isInInbox) {
    setInterval(function(){ window.location.reload(); }, 60000);

    $('table#tblSch tbody tr').append('<td><span id="timeLeftForReload" style="margin-left: 20px; color: rgb(0, 0, 255);">60</span> seconds.</td>');
    setInterval(function() {
      var currentNumberOfSecondsShown = $('#timeLeftForReload').text();
      $('#timeLeftForReload').text(currentNumberOfSecondsShown - 1);
    }, 1000);
  }
});
