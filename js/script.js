`use strict`


// let item = $(`h3`);
// console.log(item);


$(document).ready(function() {

    $(`.item1`).click(function () {

        // if ( $(this).hasClass('open')) {
        //     $(this).removeClass('open');
        //     console.log($(this));
        //     $(`p.p1`).slideUp(300);
        // } else {
        //     $(this).addClass('open');
        //     console.log($(this));
        //     $(`p.p1`).slideDown(300);

        // }

        $(this).toggleClass('open');
        $(`p.p1`).slideToggle();

        // let item = $(this);
        

        // $(`p.p1`).slideToggle(`fast`, function() {
        //     console.log(`animation complete`);
        //     item.toggleClass('open');
        // });
    });
    
    
    
    $(`.item2`).click(function () {
    
        $(this).toggleClass('open');
        $(`p.p2`).slideToggle();
    
    });
    
    
    $(`.item3`).click(function () {
    
        $(this).toggleClass('open');
        $(`p.p3`).slideToggle();

    });
    
    
    
    
    $(`.item4`).click(function () {
    
            $(this).toggleClass('open');
        $(`p.p4`).slideToggle();
    
    });
    
    
})


