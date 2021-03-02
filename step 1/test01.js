var answer = prompt('数字を入力してください');
if(!isNaN(answer)){

  if( (answer % 2) == 0 ) {
    alert('偶数です');
  } else {
    alert('奇数です');
  }

} else {
  alert('数値以外が入力されています')
}
