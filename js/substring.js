


/* w3school  */
function paragr1() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn1");
  let dots = document.getElementById('dots')

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}



let p2 = document.querySelector('.p2')
let text2 = `
   My goal is to become a leader and recognized expert in a I.T. field. I admire computerized information technology because I believe it’s going to play even greater role in our life than it does now , beyond one wildest imagination.
`

p2.innerHTML = text2.substring(0,49) + ' ... ' + '<button onclick="paragr2()" id="btn2">Read More</button>'

function paragr2() {
  const btn2 = document.getElementById('btn2')
  const modal = document.querySelector('.modal-box')

  if(btn2.textContent === 'Read More'){
    p2.innerHTML = text2.substring(0,313) + ' <button onclick="paragr2()" id="btn2">Read Less</button>'
    modal.style.left = '100px'
    modal.textContent = 'Open'
  } else {
    p2.innerHTML = text2.substring(0,49) + ' ... ' + '<button onclick="paragr2()" id="btn2">Read More</button>'
    modal.style.left = '-200px'
    modal.textContent = 'Close'
    modal.style.transitionDelay = '0.4s'
    
  }
}

