$(function() {
    /* NOTE: hard-refresh the browser once you've updated this */
    $(".typed").typed({
      strings: [
        "stat about-callumcheng<br/>" +
        "><span class='caret'>$</span> job: Full-Stack Tech Trainee<br/> ^100" +
        "><span class='caret'>$</span> skills: HTML, CSS, JavaScript, Node JS, React, Python, Databases, SQL, Web Design<br/> ^300" +
        "><span class='caret'>$</span> hobbies: professional cook, horology enthusiast, Munro Bagger, demon slayer<br/> ^300" +
        "><span class='caret'>$</span> universe: Dimension C-137, Milky-Way, Earth<br/> ^300"
      ],
      showCursor: true,
      cursorChar: '_',
      autoInsertCss: true,
      typeSpeed: 0.001,
      startDelay: 50,
      loop: false,
      showCursor: false,
      onStart: $('.message form').hide(),
      onStop: $('.message form').show(),
      onTypingResumed: $('.message form').hide(),
      onTypingPaused: $('.message form').show(),
      onComplete: $('.message form').show(),
      onStringTyped: function(pos, self) {$('.message form').show();},
    });
    $('.message form').hide()
  });
  