"use strict";
/*globals $:false */

function getContacts(contacts)
{
 addHeader();
 var tr = "";
 contacts.forEach(function(contact){
  tr = $('<tr>');
  tr.append("<td>" + contact.first_name + "</td>");
  tr.append("<td>" + contact.last_name + "</td>");
  tr.append("<td>" + contact.email + "</td>");
  // tr.append(`<td><button type='button' id ='edit' class='btn btn-primary'>Edit</  button></td><input type='hidden' thecontact_id='${contact.id}'</td>`);
  // tr.append(`<td><button type='button' id ='delete' class='btn btn-warning'>Delete</  button><input type='hidden' thecontact_id='${contact.id}'</td>`);
  
  $('#list_all').append(tr);
  });  
}

function addHeader(){

 var tr= "";
 $('#list_all tr').remove();
 tr = $('<tr>');
 tr.append("<th>First Name</th>");
 tr.append("<th>Last Name</th>");
 tr.append("<th>Email Address</th>");
 tr.append("<th></th>");
 tr.append("<th></th>");
 $('#list_all').append(tr);
}


$(function() {
  $("#all_lister").on('click', function() {
    $.ajax({
      type: "GET",
      url: "/list_all",
      dataType: "json",
      success: function(contacts){
        console.log(contacts);
        getContacts(contacts);    
      }
    });
  });


  $("#search_button").on('click', function() {
    var name = $('#name').val();
    var email = $('#email').val();
    $.ajax({
       dataType: "json",
       type: "GET",
       url: "/search/?name="+name,
       success: function(found){
        getContacts(found);    
        console.log(found);
      }
     });
   });

   
    $("#find_button").on('click', function() {
      var id = $('#ID').val();
    $.ajax({
        dataType: "json",
        type: "GET",
        url: "/show/"+id,
        success: function(contact){
          
          var tr= "";
          addHeader();
          tr = $('<tr>');
          tr.append("<td>" + contact.first_name + "</td>");
          tr.append("<td>" + contact.last_name + "</td>");
          tr.append("<td>" + contact.email + "</td>");
          $('#list_all').append(tr);   
        }
     });
   });


     $("#add_new_button").on('click', function() {
      console.log("say what");
      var first_name = $('#first_name').val();
      var last_name = $('#last_name').val();
      var email  = $('#email').val();
    $.ajax({      
        dataType: "json",
        type: "POST",
        data:  {first_name: first_name, last_name: last_name , email: email},
        url: "/new",
        success: function(updated){
           var tr= "";
          $('#list_all tr').remove();
          tr = $('<tr>');
          tr.append("<td> New user was added with id : " + updated.id + "</td>");
          $('#list_all').append(tr);
         }
     });
     $("#add_new")[0].reset();
   });


  //     $("#delete").on('click', function() {
  //     var id = $('#thecontact_id').val();
  //     console.log(id);
  // });






});
 
