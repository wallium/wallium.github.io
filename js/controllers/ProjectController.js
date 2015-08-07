app.controller('ProjectController', ['$scope', function($scope){
	$scope.projects = [{
		active: "active",
		number: "0",
		name: "Flash Aid",
		image: "images/Flash Aid.png",
		description: "I worked in a team of 4 to create this at HackDuke Fall 2014. This Android app crowdsources first responders to emergency medical situations. It allows people to send out a call for help in emergency medical situations, and nearby registered first responders are notified and given Google Maps directions to the location of the emergency. We were awarded the Grand Prize in the Health & Wellness track of the hackathon.",
		tech: "Android SDK, Python, Flask, MongoDB"
	},{
		number: "1",
		image: "images/website.jpg",
		name: "Personal Website",
		description: "This is the website you're on right now! It's mostly built with HTML/CSS, Bootstrap, and JQuery. Using AngularJS really wasn't very necessary, but I wanted a chance to practice using it a bit.",
		tech: "HTML, CSS, Bootstrap, JQuery, AngularJS"
	},{
		number: "2",
		image: "images/ece bot.jpg",
		description: "This is a robot I built with a partner for my Fundamentals of Electrical Engineering course. It uses various sensors to follow a line, determine its position relative to a magnet, gather data on a container of water, and communicate this information to other bots and humans with an XBee module and LED display.",
		tech: "Arduino, various sensors and receivers"
	}];
}])