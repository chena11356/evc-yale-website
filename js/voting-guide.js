var url = window.location.href;
var indexOfState = url.indexOf("?state=");
var indexOfGoal = url.indexOf("&goal=");
if (indexOfState<0||indexOfGoal<0){
  throwError();
}
else{
  var state = url.substring(indexOfState+7,indexOfGoal);
  var goal = url.substring(indexOfGoal+6);
  if (!validState(state)||!validGoal(goal)){
    throwError();
  }
  else {
    loadTransition();
  }
}

function throwError(){
  bootbox.alert('Something went wrong. Redirecting you to main page...').find('.modal-content').css({
  'margin-top': function (){
      var w = $( window ).height();
      var b = $(".modal-dialog").height();
      // should not be (w-h)/2
      var h = (w-b)/3;
      return h+"px";
  }
  });
  setTimeout(function(){ window.open("..","_self") }, 3000);
}

function validState(state){
  if (state=="Alabama"||state=="Alaska"||state=="Arizona"||state=="Arkansas"||state=="California"||state=="Colorado"||state=="Connecticut"||state=="Delaware"||state=="District%20of%20Columbia"||state=="Florida"||state=="Georgia"||state=="Hawaii"||state=="Idaho"||state=="Illinois"||state=="Indiana"||state=="Iowa"||state=="Kansas"||state=="Kentucky"||state=="Louisiana"||state=="Maine"||state=="Maryland"||state=="Massachusetts"||state=="Michigan"||state=="Minnesota"||state=="Mississippi"||state=="Missouri"||state=="Montana"||state=="Nebraska"||state=="Nevada"||state=="New%20Hampshire"||state=="New%20Jersey"||state=="New%20Mexico"||state=="New%20York"||state=="North%20Carolina"||state=="North%20Dakota"||state=="Ohio"||state=="Oklahoma"||state=="Oregon"||state=="Pennsylvania"||state=="Rhode%20Island"||state=="South%20Carolina"||state=="South%20Dakota"||state=="Tennessee"||state=="Texas"||state=="Utah"||state=="Vermont"||state=="Virginia"||state=="Washington"||state=="West%20Virginia"||state=="Wisconsin"||state=="Wyoming") {
    return true;
  }
  else {
    return false;
  }
}

function validGoal(goal){
  if (goal=="Register%20to%20vote"||goal=="Request%20absentee%20ballot"||goal=="See%20deadlines%20for%20my%20state"||goal=="See%20who%27s%20on%20my%20ballot"||goal=="See%20general%20overview%20of%20the%20process") {
    return true;
  }
  else {
    return false;
  }
}

function loadTransition(){
  setTimeout(function(){
    // Fade the #loading-caption and #loading-gif
    $("#loading-caption").fadeOut(400);
    $("#loading-gif").fadeOut(400, function(){
      // Then make them disappear
      document.getElementById("loading-caption").style.display="none";
      document.getElementById("loading-gif").style.display="none";
      // Then bring up the EVC logo
      setTimeout(function(){
        $("#evc-logo").fadeIn(1250, function(){
          setTimeout(function(){
            $("#evc-logo").fadeOut(1250, function(){
              document.getElementById("menu-toggler").style.display = "block";
              // TO-DO: Load everything else
            });
          }, 500);
        });
      }, 500);
    });
  }, 500);



}
