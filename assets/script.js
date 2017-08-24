$(function(){

	//----------------------behance

	var key = 'yOSgShDojEotjrG7Fj1rSHchUlUNy6xD';
	var url1 = 'http://behance.net/v2/users/boothehamster/projects?api_key='+key;

	var p1 = $.ajax({
	    url: url1,
	    dataType: "jsonp"
	});

	var p5 = $.ajax({
	    url: url1,
	    dataType: "jsonp"
	});

	//----------------------foursquare

	var v = '?v=20170101';
	var c_id= '&client_id=RPGUL25RSMX1OOV0ZFGA3OGD0IF5XKQB0SA4RWEC1VIHWTHF';
	var c_s = '&client_secret=UY2ZX5BNM03Z0SIHI4CPLHI4PMAW1PS01ZLK2D2NOV14DVL4';
	var xtra= v + c_id + c_s;
	var url2 = 'https://api.foursquare.com/v2/venues/explore'+xtra + '&near=Auckland%2C%20New%20Zealand&nearGeoId=72057594040121669&q=Food'
	
	

	//------------------promises

	var p4 = p1.then(function(r1){
		console.log('p1')
		console.log(r1)
		var p2 = $.ajax({
		    url: url2,
		    dataType: "jsonp"
		
		});
		return p2
	}).then(function(r2){
		console.log('p2')
		console.log(r2)
		var p3 = $.ajax({
		    url: url2,
		    dataType: "jsonp"
		
		});
		return p3
	});

	$.when( p4, p5 ).done(function ( r4, r5 ) {

		console.log('p4 and p5')
	    console.log( r4 );
	    console.log( r5 );
	});
	



});

