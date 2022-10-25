//$('selector').action    (syntax of jQuery code)

$(document).ready(function () {
     /$('p').click();   //clicks on p and is an element selector
    //$('p').click(function(){
    //console.log('This is an example of element selector',this)
    //});   //do this when we click on p

    //  $('p').click(function(){
    //  console.log('Paragraph gets hidden')
    //  $(this).hide();
    //  });   //do this for hiding the content when clicked. 

    //$('#id1').click(function(){
    //   console.log('This is an example of id selector')   //id selector example
    //});

    //$('.para').click(function(){
    //   console.log('This is an example of class selector')     //class selector example
    //});

    // *** Events in jQuery ***
    // Mouse events = click, dblclick, mouseenter, mouseleave
    // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload

    // *** on method ***
    //$('p').on('click',function(){            
    //    console.log('you clicked here');
    //});          //we can also write click:function()

    //$('#wiki').hide(1000,function(){
    //    console.log('File hidden successfully');
    //});   //to hide the content and 1000 represents 1 sec
    //$('#wiki').show(1000,function(){
    //    console.log('File shown successfully');
    //});   //to show the content and 1000 represents 1 sec

    //$('#but').click(function(){
    //      $('#wiki').toggle(1000);  //shows data and hides data accordingly
    //});   //when clicked on the button first it will hide data and then show data again when clicked

    // *** Slide methods *** - speed and callback parameters are optional
    //$('#wiki').slideUp(2000,function(){
    //    console.log('done');
    //});            //slide goes up
    //$('#wiki').slideDown(2000);  //slide goes down
    //$('#wiki').slideToggle(2000);

    // *** Animate functionin jQuery ***
    //$('#wiki').animate({
    //    opacity:0.5,
    //    height:'150px',//
    //    width:'300px'},
    //   2000);

    // *** Queue in jQuery *** - Gets executed one at a time//
    //$('#wiki').animate({opacity:0.3},4000);
    //$('#wiki').animate({opacity:0.9},2000);
    //$('#wiki').animate({width:'250px'},1000);


    // *** DOM functions in jQuery ***
    //console.log($('#wiki').text());  //shows the text
    //console.log($('body').html());   //shows the whole body tag
    //console.log($('body').html("I'm Pratyush"));  //changes the content of body
    //console.log($('#txt').val());  //shows the value
    //console.log($('#txt').val('Hello World'));   //shows the entered value
    //$('#wiki').empty();  //clears all the data of the specified class,id or element
    //$('#wiki').remove();  //removes the specified class,id or element
    //$('#wiki').text('Hello');  //displays the entered data
    //$('#wiki').addClass('myclass');  //adds a class
    //$('#wiki').removeClass('myclass');   //deletes a class
    //$('#wiki').css('background-color','yellow');   //for using css
});
