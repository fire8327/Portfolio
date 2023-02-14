for (let i = 0; i < 5; i++) {
    $( `#hobby${i}` ).hover(function() {
        for (let j = 0; j < 5; j++) {
            $(`#arrow${j}`).addClass("opacity-0");
            $(`#list${j}`).addClass("opacity-0");
            $(`#list${j}`).removeClass("z-50");
        }
        $(`#arrow${i}`).removeClass("opacity-0");
        $(`#list${i}`).removeClass("opacity-0");
        $(`#list${i}`).addClass("z-50");
    });
}