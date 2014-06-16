
// SELECT VARIABLES as DOM NODES
var $input = $('#createMsgInput');
var $send = $('#createMsgButton');

// YOUR CODE HERE:
window.URL = "https://api.parse.com/1/classes/chatterbox";

var app = {
  server : 'https://api.parse.com/1/classes/chatterbox',
  init: function(){
    //add click event listener to the message button
    $send.on('click', function(){
    });

  },
  send: function(data){
    $.ajax({
      url : URL,
      type: 'POST',
      data: JSON.stringify(data),
    });
  },
  fetch: function(){
    $.ajax({
      type: 'GET',
      url : app.server,
      contentType: 'application/json',
      sucess: function(data){
        console.log(data);
      },
      error: function(data){
        console.log(data);
      }
    });
  }
};

app.init();
app.fetch();
//app.fetch();

//console.log("yolo")









/*

var Server = function(){
  return {
    create: function(data){
      return $.ajax({
        url : URL,
        type: 'POST',
        data: data
      });
    },
    get: function(){
      return $.ajax({
        url : URL,
        type: 'GET',
      });
    },
    update: function(){

    },
    destroy: function(){

    }
  };
};


 */
