var answer = prompt('数字を入力してください');
if(!isNaN(answer)){

  if( (answer) >= 0 ) {
    alert('正の数です');
  } else {
    alert('負の数です');
  }

} else {
  alert('数値を入力してください')
}
