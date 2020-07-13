$( function() {
  var availableTags = [
    "@gmail.com",
    "@yahoo.com",
    "@hotmail.com",
    "@uncc.edu"
  ];
  $( "#email" ).autocomplete({
    source: availableTags
  });
} );
