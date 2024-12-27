window.onload = function() {
    let list_zone = document.getElementById("inner_list");
    let list_a =list_zone.getElementsByTagName("a"); //모든 a태그를 컨트롤한다

  for(let i = 0; i<list_a.length; i++) {
    list_a[i].onclick=function() {
      let ph = document.getElementById("photo").children[0]; 
      ph.src = this.href;
      return false; //페이지가 이동하지 않게 함, 강제종료
    }
  }

  let b_btn = document.getElementById("next_btn");
  let m_num = 0;
  b_btn.onclick = function() {
    // ^ 객체화시키는 문법, 외우기! 
    if (m_num >= list_a.length-3) return false; m_num++;
    list_zone.style.marginLeft = -100*m_num+"px"; 
    return false;

  }

  let n_btn = document.getElementById("next_btn");
  n_btn.onclick = function() {
    if (m_num <= 0) return false;
    m_num--;
    list_zone.style.marginLeft = -100*m_num+"px";return false;
    //marginLeft를 안바꾸는 이유 : 무조건 왼쪽기준으로 해야해서
  }
}