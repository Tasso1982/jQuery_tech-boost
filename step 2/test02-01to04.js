(function($, window) {
  $(function() {
    // この中に処理を書きます
    $('#index').find('li').each(function() {
      // ループ内の処理
      alert($(this).text());
      alert($(this).text().length);
    });
    // 1. <h2>を非表示(hide)ではなく、削除してみましょう。
    $('h2').remove();
    // 3. ul#indexの最後に<li>メソッド</li>を追加してみましょう。
    $('ul').append('<li>メソッド</li>');
  });
})(jQuery, window);
