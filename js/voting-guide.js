$(function(){

  // Verifies user selected home state and goal
  $("#start-voting-guide").click(function(e) {
    e.preventDefault();
    if ($("#state-button").text().trim()=="Home State"||$("#goal-button").text().trim()=="Goal"){
      bootbox.alert('Please select a home state and a goal.').find('.modal-content').css({
      'margin-top': function (){
          var w = $( window ).height();
          var b = $(".modal-dialog").height();
          // should not be (w-h)/2
          var h = (w-b)/3;
          return h+"px";
      }
      });
    }
    else {
      alert("GOOOO");
    }
  });

});
