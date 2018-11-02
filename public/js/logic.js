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








  //Account Page











  //Create Page  

$("#newSettle").on("submit",function(event){
  event.preventDefault();

  let newSettle = {
  
  }


  $.post("/api/settles", newSettle)
    .then(function(){
      console.log("added a new settle");
      location.reload();
    })

})


  


});