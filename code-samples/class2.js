// this line ensures code only runs AFTER the 
// website has loaded
$(document).ready(
  function() {
    // this is where we will add 
    // our custom jquery
    console.log("hello, world!");
    console.log("The text of all paragraphs in the page " + 
        $("p").text());
  }
);