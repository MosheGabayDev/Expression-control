<style>
    .Exp{
        font-size: 63%;
    }
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
  const words = [];
  var ic = 0;
  var oldText;
  $('.elementor-size-default, .elementor-item, .elementor-heading-title, .elementor-icon-list-text, li, a').each(function() {
    var text = $(this).text();
    if (text != oldText){
      var oldText = text;
      wordArray = text.split(' ');
      var wordArray = wordArray.filter(function (el) {
        return el != "";
      });
      var english = /^[A-Za-z]*$/;
      for (let i = 0; i < wordArray.length ; i++) {
        if (english.test(wordArray[i]) && wordArray[i] != ""){
          var html = $(this).html();
          var regExp = new RegExp("\\b(" + wordArray[i] + ")\\b", "gm");
          var a = $(this).get(0).tagName.toLowerCase();
          $(this).html(html.replace(regExp, "<span class='Exp'>$1</span>"));
        }
      }
      ic++;
    }
  });
});
</script>
