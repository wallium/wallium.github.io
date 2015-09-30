app.controller('ResumeController', ['$scope', function($scope){
	$scope.courses = [{
		name: "CS 201: Data Structures and Algorithms",
		grade: "A"
	},{
		name: "EGR 103: Computation Methods in Engineering",
		grade: "A"
	},{
		name: "MATH 212: Multivariable Calculus",
		grade: "A"
	},{
		name: "ECE 110: Fundamentals of Electrical and Computer Engineering",
		grade: "A"
	},{
		name: "MATH 216: Linear Algebra & Differential Equations",
		grade: "A"
	},{
		name: "STAT 230: Probability",
		grade: "A-"
	},{
		name: "STAT 250: Statistics",
		grade: "--"
	},{
		name: "CS 308: Software Design/Implementation",
		grade: "--"
	},{
		name: "CS 230: Discrete Math for Computer Science",
		grade: "--"
	}
	];

	$scope.languages = "Java, Python, MATLAB, JavaScript, HTML/CSS, Arduino, R";
	$scope.tools = "Bootstrap, JQuery, AngularJS, MeteorJS, Flask, JavaFX, Eclipse, Android Studio";

	$scope.jobs = [{
		place: "Kids4Coding",
		title: "Lead Instructor",
		description: "I developed lesson plans for and taught two separate summer camp courses to kids in grades 6-9. Topics included HTML, CSS, and JavaScript.",
		duration: "May 2015 - July 2015"
	},{
		place: "Duke University CS Department",
		title: "Undergraduate Teaching Assistant",
		description: "I am a teaching assistant for CompSci 201: Data Structures and Algorithms. I lead a recitation section, grade assignments, and host helper hours for the course.",
		duration: "January 2015 - present"
	},{
		place: "Trinity Technology Services",
		title: "AV Technician",
		description: "I managed a service desk that provided support for technical issues on the Duke campus. Some job duties included supporting classroom technologies, responding to help calls, and maintaining organization with ticketing software.",
		duration: "September 2014 - May 2015"
	}
	];
}])