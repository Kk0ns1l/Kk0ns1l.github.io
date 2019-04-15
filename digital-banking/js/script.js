document.onload = function() {
    var safe = getElementsByClassName('safe');
    safe.style.display = 'none';
}

var answer = document.getElementsByClassName("answer");
var modalSub = document.getElementById("subscribeModal");
var btnSub = document.getElementById("subscribeBtn");

function topFunction() {
  document.documentElement.scrollTop = 0;
}

for (i = 0; i < answer.length; i++) {
    answer[i].onclick = function() {
        if (this.classList.contains('active')){
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null; 
            content.classList.remove('active');
        } else {
            content.style.maxHeight = content.scrollHeight + 40 + "px";
            content.classList.add('active');
        }
    }
}

btnSub.onclick = function() {
    event.preventDefault();
    modalSub.style.visibility = "visible";
    modalSub.style.display = "block";
}

modalSubNone = function() {
    modalSub.style.visibility = "hidden";
}
var timeId = setTimeout(modalSubNone, 10000);