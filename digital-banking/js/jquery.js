var answer = $('.answer');

for(i = 0; i < answer.length; i++) {
  answer[i].addEventListener('onclick', function(){
    this.classList.add('active');
  })
}