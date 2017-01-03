var failureHandler = function (data) {
    console.log('Process failed.');
}
var completeHandler = function (data) {
    console.log("Process completed.");
}
var successHandler = function (data) {
    console.log(data);
    var parent = $("#Marbles");
    parent.html("");
    data.forEach(function (item) {
        console.log(item.color);
        var newDiv = $("<div>").html(item.Id + " " + item.color);
        parent.append(newDiv);
    });
}

var dynamicHandler = function () {
    $.ajax({
        url: '/api/marble/',
        success: successHandler,
        failure: failureHandler,
        complete: completeHandler
    });
}

var randomHandler = function (data) {
    console.log(data);
    var parent = $("#randomMarble");
    parent.html("");
    var item = data[Math.floor(Math.random() * (data.length))];
    var newDiv = $("<div>").html(item.Id + " " + item.color);
    parent.append(newDiv);
}

var createMarble = function () {

    var dom = {
        Id: $("#newId").val() , 
        color: $("#marbleColor").val(),
    }

    $.ajax({
        type: 'POST',
        url: '/api/marble/',
        data: JSON.stringify(dom),
        success: successHandler,
        failure: failureHandler,
        complete: completeHandler,
        contentType: "application/json",
        dataType: "json"

    });
}

var getRandomMarble = function () {
    $.ajax({
        type: 'GET',
        url: '/api/marble/',
        success: randomHandler,
        failure: failureHandler,
        complete: completeHandler,
        contentType: "application/json",
    });
}

var reevalLabel = function () {
    var newerId = parseInt($("#newId").html()) + 1;
    $("#newId").html(newerId);
}

$("#Action0").on("click", dynamicHandler);
$("#Action1").on("click", createMarble);
$("#Action1").on("click", reevalLabel);
$("#Action2").on("click", getRandomMarble);
