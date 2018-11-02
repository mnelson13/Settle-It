$(document).ready(function(){
    // Materialize jquery for Modals
    $('.modal').modal();
    // Materialize jquery for Collapsable
    $('.collapsible').collapsible();





  //Main Page

  //voting
  let votes;

  $(document.body).on("click", ".voteA", function(){
    let id = $(this).data("settleId");

    $.get("/api/getOne/" + id, function(data){
      votes = data.Side_A_Points + 1

    }).then(function(){
      let newVotes = {
        votes: votes
      }
      $.ajax("api/settles/votes/sideA/" + id,{
        type: "PUT",
        data: newVotes
      }).then(function(){
        console.log("udated id: " + id);
        location.reload();
        //code to update votes on DOM, but not reload whole page??
      })
    })
  })

  $(document.body).on("click", ".voteB", function(){
    let id = $(this).data("settleId");

    $.get("/api/getOne/" + id, function(data){
      votes = data.Side_B_Points + 1

    }).then(function(){
      let newVotes = {
        votes: votes
      }
      $.ajax("api/settles/votes/sideB/" + id,{
        type: "PUT",
        data: newVotes
      }).then(function(){
        console.log("udated id: " + id);
        location.reload();
        //code to update votes on DOM, but not reload whole page??
      })
    })
  })


  //Account Page










  //Create Page  

$("#newSettle").on("submit",function(event){
  event.preventDefault();

  let newSettle = {
    Topic: $("#topic").val.trim(),
    Side_A: $("#sideA").val.trim(),
    //User_A: $("").val.trim(); //need to find a way to pull user A info using passport
    User_B: $(".userB"),

  }


  $.post("/api/settles", newSettle)
    .then(function(){
      console.log("added a new settle");
      location.reload();
    })

})


  


});