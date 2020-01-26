var Links = {
  setColor: function(color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length) {
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
    // ctrl+/ 주석처리 / $('a') 모든 a태그를 J쿼리로 제어하겠다.
  }
}
var Body = {
  setColor: function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  }, // css('color', color); => 'color' 색상을 color라는 매개변수의
  // 여러개의 프로퍼티를 구분할 때 ,를 적어줘야 한다
  setBackgroundColor: function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}

// 객체(이름이 있는 정리정돈 상자)에 소속된 함수는 메소드라고 함(함수 아님) 객체에 소속된 변수는 프로퍼티라고 한다.
