// Temporarily prevent scrolling
$('body').css({'overflow':'hidden'});
  $(document).bind('scroll',function () {
       window.scrollTo(0,0);
});
// Fetch state and goal from URL
var url = window.location.href;
var indexOfState = url.indexOf("?state=");
var indexOfGoal = url.indexOf("&goal=");
if (indexOfState<0||indexOfGoal<0){
  throwError();
}
else{
  var state = url.substring(indexOfState+7,indexOfGoal).replace("%20"," ");
  var goal = url.substring(indexOfGoal+6);
  if (!validState(state)||!validGoal(goal)){
    throwError();
  }
  else {
    loadTransition(state,goal);
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
  if (state=="Alabama"||state=="Alaska"||state=="Arizona"||state=="Arkansas"||state=="California"||state=="Colorado"||state=="Connecticut"||state=="Delaware"||state=="District of Columbia"||state=="Florida"||state=="Georgia"||state=="Hawaii"||state=="Idaho"||state=="Illinois"||state=="Indiana"||state=="Iowa"||state=="Kansas"||state=="Kentucky"||state=="Louisiana"||state=="Maine"||state=="Maryland"||state=="Massachusetts"||state=="Michigan"||state=="Minnesota"||state=="Mississippi"||state=="Missouri"||state=="Montana"||state=="Nebraska"||state=="Nevada"||state=="New Hampshire"||state=="New Jersey"||state=="New Mexico"||state=="New York"||state=="North Carolina"||state=="North Dakota"||state=="Ohio"||state=="Oklahoma"||state=="Oregon"||state=="Pennsylvania"||state=="Rhode Island"||state=="South Carolina"||state=="South Dakota"||state=="Tennessee"||state=="Texas"||state=="Utah"||state=="Vermont"||state=="Virginia"||state=="Washington"||state=="West Virginia"||state=="Wisconsin"||state=="Wyoming") {
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

function loadTransition(state,goal){
  setTimeout(function(){
    // Fade the #loading-caption and #loading-gif
    $("#loading-caption").fadeOut(400);
    $("#loading-gif").fadeOut(400, function(){
      // Then make them disappear
      document.getElementById("loading-caption").remove();
      document.getElementById("loading-gif").remove();
      // Then bring up the EVC logo
      setTimeout(function(){
        $("#evc-logo").fadeIn(1250, function(){
          setTimeout(function(){
            $("#evc-logo").fadeOut(1250, function(){
              // menu-toggle not needed yet
              // document.getElementById("menu-toggler").style.display = "block";
              switch(goal){
                case "Register%20to%20vote":
                  loadRegisterToVote(state);
                  break;
                case "Request%20absentee%20ballot":
                  alert('Goal is absentee');
                  break;
                case "See%20deadlines%20for%20my%20state":
                  alert('Goal is deadlines');
                  break;
                case "See%20who%27s%20on%20my%20ballot":
                  alert('Goal is ballot');
                  break;
                case "See%20general%20overview%20of%20the%20process":
                  alert('Goal is general overview');
                  break;
                default:
                  throwError();
                  break;
              }
            });
          }, 500);
        });
      }, 500);
    });
  }, 500);
}

// TO-DO: Add a little blurb about being registered in two states
function loadRegisterToVote(state){
  // Hide the loading stuff
  document.getElementById("loading-masthead").remove();
  // If state is not Connecticut, ask where to register, otherwise skip this step
  if (state!="Connecticut"){
    // Change the first instruction
    document.getElementById("ins-1").innerHTML = "Where would you like to register to vote?";
    // Change the button of the home state
    document.getElementById("ins-1-btn-a").innerHTML = state;
    // Show the content
    document.getElementById("content-header").style.display = "block";
    $("#ins-1").fadeIn(750, function(){
      $("#ins-1-btn-a").fadeIn(750, function(){
        $("#ins-1-btn-b").fadeIn(750);
      });
    });
  }
}

function loadRegisterToVoteHelper(res){
  if (res=="Home"){
    alert("User wants to register to vote in "+state);
  }
  else if (res=="Connecticut"){
    alert("User wants to register to vote in Connecticut");
  }
  else{
    throwError();
  }
}

// Don't allow scrolling just yet
// $(document).unbind('scroll');
// $('body').css({'overflow':'visible'});
