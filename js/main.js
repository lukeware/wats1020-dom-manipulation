//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    // Create a function to listen for clicks on the "login" button.

        $('#login-form a').on('click', function(){	
          $('#login-form').hide();	   							//  When a user clicks the "login" button, hide the login form elements on the page.
            var userGreeting = 'Welcome, ' + ' ' + userInfo.firstName + ' ' + userInfo.lastName; 
            $('.user-info').html(userGreeting).fadeIn();		//  Fill the user's first and last name into `div.user-info`.
        });
    
  

    // Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
        $('.view-details').on('click', function(event){	
          var targetElement = event.target;
          var container = targetElement.parentElement.parentElement;  //  When user clicks a "view details" button, find the parent of that element.
          $(container).find('.details').each(function(index, el){		//  Within that parent, find all the elements that have the class `details`.
            if ($(el).is(':visible')){								//  Toggle visibility of all the elements within that parent with the class `details`.
              $(el).fadeOut();
              targetElement.innerText = 'View Details';

            } else {
              $(el).fadeIn();
              targetElement.innerText = 'Hide Details';			//  Change the text of the "view details" button to read "hide details".
            }
          });
        });

    // Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.

        $('button.vote').on('click', function(){		//  Set up an event listener on the buttons with the `vote` class.
          var clickVote = $(this).data('vote');
        
      // When a button is clicked, look at the `data-vote` attribute to determine what the user is voting for ("great" or "greatest").	
          //  Increment the counter for whichever vote talley is affected.
          if (clickVote == 'great'){					
            voteCounts.great++;
            voteCounts.total++;
          }
          else if (clickVote == 'greatest'){
            voteCounts.greatest++;
            voteCounts.total++;
          }

        
          var greatPercent = voteCounts.great / voteCounts.total * 100;				//  Determine the respective percentages (out of 100) for each progress bar.
            $('.great-progress').attr('style', 'width: ' + greatPercent + '%');		//  Modify the `width` attribute on each progress bar to set the updated percentage.
          
          var greatestPercent = voteCounts.greatest / voteCounts.total * 100;
            $('.greatest-progress').attr('style', 'width: ' + greatestPercent + '%');
        
      });

});
