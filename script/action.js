$(document).ready(function () {









  ///sec3 뒤에 sec4이 오도록 하기
  var sec3_top = $('.sec3').offset().top; // sec3의 top
  var sec3_height = $('.sec3').outerHeight(true); // sec3의 전체 높이 (margin 포함)

  var sec3_bottom = sec3_top + sec3_height; // sec3의 top + height = bottom

  $('.sec4').css({
    'position': 'absolute',
    'top': sec3_bottom + 'px'
  });











  //카드토글
  $('.card').click(function () {
    $(this).toggleClass('is-flipped');
  });









  ///sec4 뒤에 sec5이 오도록 하기
  function positionSec5() {
    var contBoxBottom = $('.sec4 .cont_box').offset().top + $('.sec4 .cont_box').outerHeight();

    $('.sec5').css({
      'position': 'absolute',
      'top': contBoxBottom + 'px',
      'left': '0',
      'width': '100%'
    });
  }










  // 처음 로딩할 때 위치 잡기
  positionSec5();

  // 창 크기 바뀔 때마다 다시 위치 잡기
  $(window).resize(function () {
    positionSec5();
  });










///리뷰 슬라이드
  const $track = $('.review-track');
  const $reviews = $track.children().clone(); // review1~6 복제
  $track.append($reviews); // 복제해서 뒤에 추가








///sec5 뒤에 sec6이 오도록 하기
  function positionSec6() {
    var sec5Bottom = $('.sec5').offset().top + $('.sec5').outerHeight(true);

    $('.sec6').css({
      'position': 'absolute',
      'top': sec5Bottom + 'px',
      'left': 0,
      'width': '100%'
    });
  }

  // 처음 로드할 때 위치 잡기
  positionSec6();

  // 창 크기 변할 때마다 다시 위치 잡기
  $(window).resize(function () {
    positionSec6();
  });

});




