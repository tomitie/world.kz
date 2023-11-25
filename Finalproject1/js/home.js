i = 0;
$(document).ready(function(){
  $("d").keypress(function(){
    $("span").text(i += 1);
  });
  $("button").click(function(){
    $("d").keypress();
  });
});

$(document).ready(function(){
    $("f").mouseover(function(){
      $("f").css("background-color", "yellow");
    });
    $("f").mouseout(function(){
      $("f").css("background-color", "white");
    });
  });

  $(document).ready(function(){
    $("w").mouseover(function(){
      $("w").css("background-color", "green");
    });
    $("w").mouseout(function(){
      $("w").css("background-color", "white");
    });
  });

  $(document).ready(function(){
    $("r").mouseover(function(){
      $("r").css("background-color", "blue");
    });
    $("r").mouseout(function(){
      $("r").css("background-color", "white");
    });
  });