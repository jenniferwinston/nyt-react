// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');


var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	runQuery: function(location){

		console.log(location);

		//Figure out the geolocation
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				return response.data.results[0].formatted;
		})

	}

}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;