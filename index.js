var TopClient = require("top-client");
var settings = require("./lib/settings.json");

var hook = process.argv[2];

if(hook!="commit-msg"){
	console.log("This is only going to work with commit-msg");
}
else{

	var msgFile = process.argv[3];

	console.log(msgFile);
	process.exit(1);

	// var tc = new TopClient("d463c591-7cca-4fe9-8295-433731ff2d30", settings.token_path);

	// var opts = {
	// 	url: "https://api.twitter.com/1.1/account/settings.json",
	// 	method: "POST"
	// }

	// tc.proxy(opts, {"start_sleep_time": 1}, function(err, resp, body){
	// 	console.log("error", err);
	// 	console.log("body", body);
	// });

}