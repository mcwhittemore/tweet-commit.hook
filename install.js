var TopClient = require("top-client");
var settings = require("./lib/settings.json");

console.log(settings);

var tc = new TopClient("d463c591-7cca-4fe9-8295-433731ff2d30");

tc.commandLineOAuth(function(err, user_keys){
	if(err){
		console.log(err);
	}
	else{
		console.log(settings.token_path);
		tc.saveTokens(settings.token_path, function(err){
			if(err){
				console.log(err);
				process.exit(1);
			}
			else{
				process.stdin.pause();
			}
		});
	}
});