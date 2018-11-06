$(document).ready(function(){
    // Materialize jquery for Modals
    $('.modal').modal();
    // Materialize jquery for Collapsable
    $('.collapsible').collapsible();

    $('select').formSelect();

    $('input#topic, textarea#sideA').characterCounter();

    $('select').formSelect();






  //Main Page =========================================================

  //voting
  let votes;

  $(document.body).on("click", ".voteA", function(){
    let id = $(this).data("settleid");

    $.get("/api/getOne/" + id, function(data){
      votes = data.Side_A_Points + 1

    }).then(function(){
      let newVotes = {
        Side_A_Points: votes
      }
      $.ajax("api/settles/" + id,{
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
    let id = $(this).data("settleid");

    $.get("/api/getOne/" + id, function(data){
      votes = data.Side_B_Points + 1

    }).then(function(){
      let newVotes = {
        Side_B_Points: votes
      }
      $.ajax("api/settles/" + id,{
        type: "PUT",
        data: newVotes
      }).then(function(){
        console.log("udated id: " + id);
        location.reload();
        //code to update votes on DOM, but not reload whole page??
      })
    })
  })


  //Sign Up
  $(document.body).on("click", "#signup", function(){
    let email = $("#email").val().trim();
    let password = $("#newPassword").val().trim();
    let userName = $("#newUsername").val().trim();
    console.log("Email: " + email);
    console.log("password: " + password);
    console.log("username: " + userName)

    let newUser = {
      email: email,
      password: password,
      userName: userName
    }
    $.post("/api/Users", newUser)
      .then(function(){
        console.log("added a new User");
      });
  })

  //Log in
  $(document.body).on("click", "#login", function(){
    let userName = $("#username").val().trim();
    let password = $("#password").val().trim();
    
    let login = {
      username : userName,
      password: password
    };
    $.post("/login", login)
      .then(function(data){
        console.log("logged in: " + data);
      })
  });


  //Account Page ========================================================
  $(document.body).on("submit", ".addSideBForm", function(event){
    event.preventDefault();

    let settleid = $(this).attr("id");
    let sideBText = $("#settle" + settleid).val().trim();
    console.log(settleid);
    console.log(sideBText);

    let sideB = {
      Side_B: sideBText
    }
 
    $.ajax("api/settles/" + settleid, {
      type: "PUT",
      data: sideB
    }).then(function(){
      console.log("updated id:" + settleid);
      location.reload();
    })

 })





  //Create Page =========================================================
  let userB;
  
  $('#userB').on("change",function(){
    userB = $("#userB option:selected").attr('data-id');
    console.log(userB);
  });

$("#newSettle").on("submit",function(event){
  event.preventDefault();
  let userid;

  $.get("/testuser", function(data){
    console.log("THIS IS WHERE THE DATA LIVES =============== " + data);
    userid = data.user.id
  }).then(function(){
    console.log(userid)
    let newSettle = {
      Topic: $("#topic").val(),
      Side_A: $("#sideA").val(),
      User_A: userid,
      User_B: userB
    }
    $.post("/api/Settle", newSettle)
      .then(function(){
        console.log("added a new settle");
        location.reload();
      }
    )
  });
});


  


});

