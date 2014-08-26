function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}


var main = function(dom,start,finish){
$(dom)
  .prop('number', start)
  .animateNumber(
    {
      number: finish
    },
    20000
  );

 

}

var moves = function(){
  var animations = [ 'shake', 'hop', 'spin','grow', 'hooray' ];
  $('.box').on('click', function () {
        var animation = animations[randomInt(0, animations.length - 1)];
        var box = $(this);
        box.addClass(animation);
        setTimeout(function () {
            box.removeClass(animation);
        }, 1000);
    });
}

var drag = function() {
    $(".draggable").draggable();
}


var progressBarCrazy = function(){

    $(".progress").mouseover(function () {
        num = Math.random()*1000
        $(".meter").animate({width: num+"%"});
    });

    $(".progress").mouseout(function () {     
        num = Math.random()*1000   
        $(".meter").animate({width: num+"%"});
    });   
}


var progressBar = function(dom,finish){   
    if (finish > 100){    
        $(".meter."+dom).animate({width: "100%"},2000); 
    } else{
        $(".meter."+dom).animate({width: finish+"%"},2000); 
    }    
}



var move = function(){
	
	$(".move").hover(function() {
	    $(this).animate({ marginTop:10* Math.random() });
	    $(this).animate({ marginLeft:20* Math.random() });
	},function(event) {
    	$(this).animate({ marginTop:-10* Math.random() });
    	$(this).animate({ marginLeft:-20* Math.random() });
    }); 

}

var changer = function(){
	var words = ["nifty","groovy","far out", "crazy"]; // add as many as you like
    var idx = Math.floor(words.length * Math.random());  // randomizer
    $('#change').text(words[idx]); // replaces the contents of "change"
    var time = Math.floor(500 * Math.random() + 3000);  // in milliseconds
    setTimeout(changer,time);  // lather, rinse, repeat
}

var reveler = function(){
    $("#websites-bt").click(function(){
      $(".websites").toggle();     
    });

    $("#ideas-bt").click(function(){
      $(".ideas").toggle();      
    });
}

function pulse() {
    $('.fa-heart').animate({
        
        height: 22       
    }, 700, function() {
        $('.fa-heart').animate({
           
            height: 27            
        }, 700, function() {
            pulse();
        });
    }); 
};

pulse();

