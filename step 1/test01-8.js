var answer = parseInt(prompt('面積を割り出します。円の半径を入力してください'));
if(!isNaN(answer)) {
  alert((answer) * 3.14);
} else {
    alert('数値以外が入力されています')
}
