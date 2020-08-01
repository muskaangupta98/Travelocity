
  $(document).ready(function(){
    $('.sidenav').sidenav();
     $('.slider').slider({ 
        full_width: true,
        indicators:true,
        height : 400, // default - height : 400
        interval: 3000 // default - interval: 6000
      
    });
  });

  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Aruba": null,
        "Cancun Mexico": null,
        "Hawaii": null,
        "Florida": null,
        "California": null,
        "Jamaica": null,
        "Europe": null,
        "The Bahamas": null,


      
      },
    });
  });

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
     

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });