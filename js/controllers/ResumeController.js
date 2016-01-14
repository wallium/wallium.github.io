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

	$scope.CScourses = [
		"CS 201: Data Structures and Algorithms",
		"ECE 110: Fundamentals of Electrical and Computer Engineering",
		"EGR 103: Computational Methods in Engineering",
		"CS 230: Discrete Math for Computer Science",
		"CS 250: Computer Architecture",
		"CS 270: Intro to AI",
		"CS 308: Software Design/Implementation",
		"CS 330: Design/Analysis of Algorithms"
	];

	$scope.STAcourses = [
		"MATH 212: Multivariable Calculus",
		"MATH 216: Linear Algebra",
		"STAT 230: Probability",
		"STAT 210: Regression Analysis",
		"STAT 250: Statistics"
	];

	$scope.languages = "Java, JavaScript, HTML/CSS, Python, MATLAB, R, Scheme";
	$scope.tools = "Git/Github, Unix, JavaFX, Bootstrap, JQuery, AngularJS, MeteorJS";

	$scope.jobs = [{
		place: "Duke University CS Department",
		title: "Undergraduate Teaching Assistant",
		description: "I am a teaching assistant for CompSci 201: Data Structures and Algorithms. I lead a recitation section, grade assignments, and host helper hours for the course.",
		duration: "January 2015 - present"
	},{
		place: "Kids4Coding",
		title: "Lead Instructor",
		description: "I developed lesson plans for and taught two separate summer camp courses to kids in grades 6-9. Topics included HTML, CSS, and JavaScript.",
		duration: "May 2015 - July 2015"
	},{
		place: "Trinity Technology Services",
		title: "AV Technician",
		description: "I managed a service desk that provided support for technical issues on the Duke campus. Some job duties included supporting classroom technologies, responding to help calls, and maintaining organization with ticketing software.",
		duration: "September 2014 - May 2015"
	}
	];
}])