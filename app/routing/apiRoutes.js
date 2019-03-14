const friendsData = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

	app.post("/api/friends", function(req, res) {
		// console.log(req.body);
		res.json(compatibility(req.body));
		friendsData.push(req.body);
	});

	function compatibility(user) {
		let surveyScoreTotal = function(obj) {
			obj.scores.forEach(function(score) {
				total += parseInt(socre);
			});
			return total;
		}

		let bestFriend = friendsData[0];
		let friendScore = surveyScoreTotal(user);
		let userScore = surveyScoreTotal(user);
		let difference = Math.abs(friendScore - userScore);

		for (var i = 1; i < friendsData.length; i++) {
			difference = difference;
			friendScore = surveyScoreTotal(friendsData[i]);
			difference = Math.abs(friendScore - userScore);

			if (difference > surveyScoreTotal) {
				bestFriend = friendsData[i];
			} else {
				difference = difference;
			}
		}

		return bestFriend;
	}
}