$(document).ready(function () {

    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        move: false,
        show: {
            effect: 'clip',
            duration: 800,
        },
        hide: {
            effect: 'blind',
            duration: 500,
        },
        // width:600,
        // height:300,

    });
    $("#dialog2").dialog({
        autoOpen: false,
        modal: true,
        move: false,
        show: {
            effect: 'clip',
            duration: 800,
        },
        hide: {
            effect: 'blind',
            duration: 500,
        },
        // width:600,
        // height:300,

    });

    $('#authBtn').click(function () {
        $("#dialog").dialog('open');
        $("#dialog2").dialog('close');
    })


    $('.registerBtn').click(function(){
        $("#dialog2").dialog('open');
        $("#dialog").dialog('close');
    })

});