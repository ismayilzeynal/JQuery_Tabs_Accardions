// tabs
$(".tablinks").click(function(e){
    let tabLinkDataId = $(e.currentTarget).data('id');
    $(".tabcontent").hide();
    $("#"+tabLinkDataId).show();
})

// accardion
$(".accordion").click(function(e){
    let accDataId = $(e.currentTarget).data('id');
    $("#"+accDataId).toggle();
})