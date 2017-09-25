$().ready(function() {

	function getVendor(id) {
		$.getJSON(
		"http://prs.gregorydoud.net/Vendors/Get/" + id,
		function (vendor) {
			console.log(vendor);
			}

		); 
	} // end getVendor function
	$("button").click(function() {
		var vendorId = $("#inputId").val();
		getVendor(vendorId);
	});

//getting a list of all vendors:

// $.getJSON(
// 	"http://prs.gregorydoud.net/Vendors/List",
// 	function(vendors) {
// 		console.log(vendors);
// 		processVendors(vendors);
// 	}
// 	);
// function processVendors(vendors) {
// 	for(var vendor of vendors) {
// 		console.log(vendor.Name, vendor.Email, vendor.Phone);
// 	}
// }
// $.getJSON(
// 		"http://md5.jsontest.com/?text=I_have_a_headache!",
// 		function(md5data) {
// 			console.log("My Md5 data is: ", md5data["md5"], md5data["original"]);
// 		});

// $.getJSON(
// 		"http://md5.jsontest.com/?text=I_have_a_headache!",
// 		function(md5data) {
// 			console.log(md5data);
// 			debugJSON(md5data);
// 		});

	// $.getJSON(
	// 	"http://headers.jsontest.com",
	// 	function(headerdata) {
	// 		console.log(headerdata);
	// 		debugJSON(headerdata);
	// 	});

	// $.getJSON(
	// 	"http://ip.jsontest.com",
	// 	function (ipdata) {
	// 		console.log("My IP is:", ipdata["ip"]);
	// 	}
	// 	);
	// console.log("This is after the console.log for my ip");

	/*$.getJSON(
		"http://date.jsontest.com", 
		function(json){
			console.log(json);
			debugJSON(json);
	}
	);*/
	
});  //end ready
			// function debugJSON(md5data){
			// console.log("JSON data is: ", md5data["md5"], md5data["original"]);
			// 	}

			// function debugJSON(headerdata){
			// console.log("JSON data is: ", headerdata["Accept-Language"],
			//  headerdata["Host"], headerdata["Accept-Charset"], headerdata["Accept"]);				
			// }

	// function debugJSON(json){
	// 	console.log("JSON data is: ", json["time"], json["millisecond_since_epoch"], json["date"]);
	
	// }