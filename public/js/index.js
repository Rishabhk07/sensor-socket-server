/**
 * Created by rishabhkhanna on 23/03/17.
 */
$(function () {
   var circle = $('.circle');
    var socket = io();
    console.log("js called");
    socket.on('car' , function (data) {
        console.log(data);
    })
});
