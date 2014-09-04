$(document).ready(function() {

	// SOUNDCLOUD WIDGET

	var widget = SC.Widget(document.getElementById('soundcloud_widget'));

	widget.bind(SC.Widget.Events.READY,function(){ //When player is ready, attach an event
	    widget.bind(SC.Widget.Events.PLAY,function(){ //When song starts playing
	        widget.seekTo(14320);//90 seconds from the start = 1:30 min
	        widget.unbind(SC.Widget.Events.PLAY); //Remove event, to avoid problems when playing is paused and then restarted
	        setTimeout(function(){init();}, 1000);

	    });
	});
	
    $('button').click(function() {
        widget.toggle();
        // widget.play();
    });



	function init(){

	    console.log('lol');
	    var dollar01 = $('.dollar');
		var dollars = [];
		var pageWith = $(window).width();
		

		for ( var i = 0; i < 10; i++ ) {

			var dollar = dollar01.clone();
			dollars.push(dollar);
			var randomX = Math.floor(Math.random() * pageWith );
			var yspeed = Math.random() * 7 + 1;

			dollar.css({
				left: randomX
			})


			$(document.body).append(dollar);
			drop(dollar, yspeed);


		}
		console.log(dollar);



	    // DROP 1 FUNCTION

		function drop(bill, yspeed) {

		    var currPos = bill.offset();
		    var leftPos = currPos.left;
		    var topPos = currPos.top;
		    var pageHeight = $(window).height();
		    var pageWith = $(window).width();
		    var randomX = Math.floor(Math.random() * pageWith );

		    console.log(randomX);               
		   
		    
		    var zigzag = function()  {

		        console.log('zigzag');
		        
		        bill.transition({ x: leftPos + 60, onComplete: function(){
		            bill.transition({x: leftPos - 60});
		            zigzag();
		            }
		        });
		    }

		    zigzag();

		    var ymovement = function() {

		        var currPos2 = bill.offset().top;
		        if ( currPos2 > pageHeight ) {
		        
		            var pageWith = $(window).width();
		            var randomX = Math.floor(Math.random() * pageWith );
		        
		            bill.css({
		                top: -65,
		                left: randomX
		            })   
		        }
		        else {
		            bill.css({ top: currPos2 + yspeed });
		        }                    
		    }
		    setInterval(function(){ ymovement();}, 1000/60 )

		}




	 }









});

















