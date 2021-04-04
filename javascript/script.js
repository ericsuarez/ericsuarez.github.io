var app = document.getElementById('title');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(1500)
  .deleteAll()
  .typeString('eric.ramos@github:~$ sudo su')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('#')
  .start();
  
  