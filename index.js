var aboutme_travelerClicked = true;
var aboutme_developerClicked = true;
var aboutme_brotherClicked = true;
var aboutme_athleteClicked = true;
var aboutme_cinematographerClicked = true;
var aboutme_studentClicked = true;

var projects_gropdemoClicked = true;
var projects_mazedemoClicked = true;
var projects_nndemoClicked = true;
var projects_thissitedemoClicked = true;
var projects_dsdemoClicked = true;

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (iOS) {
	$(document).ready(function(){

		$("#content").css("left", "0");
		$("#content").css("right", "0");
		$("#content").css("bottom", "0");

		$(".col-sm").css("overflow", "hidden");

		$(".subContent").css("margin", "10px");
		$(".col-sm").css("margin", "30px");
		$(".col-sm").css("margin-top", "5px");
		$(".col-sm").css("margin-bottom", "5px");

		$(".navBarCols").css("margin", "5px");



		$('html').append("<img style='position: absolute; left: -10px; top: 300px; height: 100px; width: 100px' src='assets/pressit.png'>")

		$('html').append("<img style='position: absolute; left: 0px; top: 45px; height: 100px; width: 100px' src='assets/scrollhere.png'>")

		$("#aboutme_traveler_video").remove()
		$("#aboutme_traveler_p").remove()
		$("#aboutme_traveler").append("<img style='width: 100%; height: 80%' id='aboutme_traveler_video' src='assets/aboutme/photos/japan.png'><p id='aboutme_traveler_p'> Traveler (27 Countries So Far) </p>")

		$("#aboutme_developer_video").remove()
		$("#aboutme_developer_p").remove()
		$("#aboutme_developer").append("<img style='width: 100%; height: 80%' id='aboutme_developer_video' src='assets/aboutme/photos/developer.png'><p id='aboutme_developer_p'> Developer </p>")

		$("#aboutme_brother_video").remove()
		$("#aboutme_brother_p").remove()
		$("#aboutme_brother").append("<img style='width: 100%; height: 80%' id='aboutme_brother_video' src='assets/aboutme/photos/brother.png'><p id='aboutme_brother_p'> Brother </p>")

		$("#aboutme_athlete_video").remove()
		$("#aboutme_athlete_p").remove()
		$("#aboutme_athlete").append("<img style='width: 100%; height: 80%' id='aboutme_athlete_video' src='assets/aboutme/photos/athlete.png'><p id='aboutme_athlete_p'> Athlete </p>")

		$("#aboutme_cinematographer_video").remove()
		$("#aboutme_cinematographer_p").remove()
		$("#aboutme_cinematographer").append("<img style='width: 100%; height: 80%' id='aboutme_cinematographer_video' src='assets/aboutme/photos/cinematographer.png'><p id='aboutme_cinematographer_p'> Cinematographer </p>")

		$("#aboutme_student_video").remove()
		$("#aboutme_student_p").remove()
		$("#aboutme_student").append("<img style='width: 100%; height: 80%' id='aboutme_student_video' src='assets/aboutme/photos/student.png'><p id='aboutme_student_p'> Student - Junior at The University of Maryland </p>")

		$("#projects_gropdemo_video").remove()
		$("#projects_gropdemo_p").remove()
		$("#projects_gropdemo").append("<img style='width: 100%; height: 80%' id='projects_gropdemo_video' src='assets/projects/photos/gropdemo.png'><p id='projects_gropdemo_p'> Grop (Social Media) App </p>")

		$("#projects_mazedemo_video").remove()
		$("#projects_mazedemo_p").remove()
		$("#projects_mazedemo").append("<img style='width: 100%; height: 80%' id='projects_mazedemo_video' src='assets/projects/photos/mazedemo.png'><p id='projects_mazedemo_p'> Dijkstra\'s Maze Solver </p>")

		$("#projects_nndemo_video").remove()
		$("#projects_nndemo_p").remove()
		$("#projects_nndemo").append("<img style='width: 100%; height: 80%' id='projects_nndemo_video' src='assets/projects/photos/nndemo.png'><p id='projects_nndemo_p'> Game Played by Neural Network </p>")

		$("#projects_thissitedemo_video").remove()
		$("#projects_thissitedemo_p").remove()
		$("#projects_thissitedemo").append("<img style='width: 100%; height: 80%' id='projects_thissitedemo_video' src='assets/projects/photos/thissitedemo.png'><p id='projects_thissitedemo_p'> This Wesbite </p>")

		$("#projects_dsdemo_video").remove()
		$("#projects_dsdemo_p").remove()
		$("#projects_dsdemo").append("<img style='width: 100%; height: 80%' id='projects_dsdemo_video' src='assets/projects/photos/dsdemo.png'><p id='projects_dsdemo_p'> Exploring Gun Violence with Data Science </p>")
	
		$("#aboutme_traveler").click(function(){
  	if (aboutme_travelerClicked){
  		$("#aboutme_traveler_video").remove()
    	$("#aboutme_traveler_p").remove()
    	$("#aboutme_traveler").append("<p id='aboutme_traveler_newp'> My most recent experience outside the country was in Japan over winter break. It was a fun time even though sushi is my worst enemy. Last summer I was in Ecuador for my internship (2 months) Press the logo to see where I worked</p>")
  		$("#aboutme_traveler").append("<a id='aboutme_traveler_link' target='_blank' href='https://www.yourprojectx.com/sec'> <img src='https://media.licdn.com/dms/image/C4D0BAQG3onU7KgO4hw/company-logo_200_200/0?e=2159024400&v=beta&t=pOZvChklNFi3j0IdFtIUGpS63HAmGdFbeQNBoCVKhPg'> </a>")
  	}else {
    	$("#aboutme_traveler_newp").remove()
    	$("#aboutme_traveler_link").remove()
    	$("#aboutme_traveler").append("<img style='width: 100%; height: 80%' id='aboutme_traveler_video' src='assets/aboutme/photos/japan.png'><p id='aboutme_traveler_p'> Traveler (27 Countries So Far) </p>")
  	}
    aboutme_travelerClicked = !aboutme_travelerClicked;
  });


  $("#aboutme_developer").click(function(){
  	if (aboutme_developerClicked){
  		$("#aboutme_developer_video").remove()
    	$("#aboutme_developer_p").remove()
    	$("#aboutme_developer").append("<p id='aboutme_developer_newp'>My first \"program\" was a glitchy tank game on Scratch back in 7th grade. Can\'t tell if I\'ve gotten any better. Currently working at Verizon Connect as a Software Engineer Intern. Press on my LinkedIn (That video was after an all-nighter at the Georgia Tech Hackathon)</p>")
  		$("#aboutme_developer").append("<a id='aboutme_developer_link' target='_blank' href='https://www.linkedin.com/in/seth-kujawa-611b56145/'> <img style='width: 100px; height: 100px' src='https://eleganttech.dk/wp-content/uploads/2018/09/linkedin.png'> </a>")
  	}else {
    	$("#aboutme_developer_newp").remove()
    	$("#aboutme_developer_link").remove()
    	$("#aboutme_developer").append("<img style='width: 100%; height: 80%' id='aboutme_developer_video' src='assets/aboutme/photos/developer.png'><p id='aboutme_developer_p'> Developer </p>")
  	}
    aboutme_developerClicked = !aboutme_developerClicked;
  });

  $("#aboutme_brother").click(function(){
  	if (aboutme_brotherClicked){
  		$("#aboutme_brother_video").remove()
    	$("#aboutme_brother_p").remove()
    	$("#aboutme_brother").append("<p id='aboutme_brother_newp'> Pledged during my second semester of college and I will never regret it. Check out our branch\'s website</p>")
    	$("#aboutme_brother").append("<a id='aboutme_brother_link' target='_blank' href='https://www.akpsi-umd.org/'> <img style='width: 250px; height: 100px' src='https://akpsi.org/wp-content/uploads/2017/01/AlphaKappaPsi_Horizontal-Website.png'> </a>")
  	}else {
    	$("#aboutme_brother_newp").remove()
    	$("#aboutme_brother_link").remove()
    	$("#aboutme_brother").append("<img style='width: 100%; height: 80%' id='aboutme_brother_video' src='assets/aboutme/photos/brother.png'><p id='aboutme_brother_p'> Brother </p>")
  	}
    aboutme_brotherClicked = !aboutme_brotherClicked;
  });

  $("#aboutme_athlete").click(function(){
  	if (aboutme_athleteClicked){
  		$("#aboutme_athlete_video").remove()
    	$("#aboutme_athlete_p").remove()
    	$("#aboutme_athlete").append("<p id='aboutme_athlete_newp'> Yeah... intramurals will never compare to varsity soccer. I\'ll join any sport you have in mind except the 800 meter. Winter track was a nightmare</p>")
  	}else {
    	$("#aboutme_athlete_newp").remove()
    	$("#aboutme_athlete").append("<img style='width: 100%; height: 80%' id='aboutme_athlete_video' src='assets/aboutme/photos/athlete.png'><p id='aboutme_athlete_p'> Athlete </p>")
  	}
    aboutme_athleteClicked = !aboutme_athleteClicked;
  });

  $("#aboutme_cinematographer").click(function(){
  	if (aboutme_cinematographerClicked){
  		$("#aboutme_cinematographer_video").remove()
    	$("#aboutme_cinematographer_p").remove()
    	$("#aboutme_cinematographer").append("<p id='aboutme_cinematographer_newp'>Ever since my TV production teacher in 9th grade had to watch my garbage videos, I\'ve loved making them. I plan to populate the video section below very soon</p>")
  	}else {
    	$("#aboutme_cinematographer_newp").remove()
    	$("#aboutme_cinematographer").append("<img style='width: 100%; height: 80%' id='aboutme_cinematographer_video' src='assets/aboutme/photos/cinematographer.png'><p id='aboutme_cinematographer_p'> Cinematographer </p>")
  	}
    aboutme_cinematographerClicked = !aboutme_cinematographerClicked;
  });

  	$("#aboutme_student").click(function(){
  	if (aboutme_studentClicked){
  		$("#aboutme_student_video").remove()
    	$("#aboutme_student_p").remove()
    	$("#aboutme_student").append("<p id='aboutme_student_newp'>GO TERPS. We always strive ahead only because the actual Terrapin creature is physically incapable of walking backwards. Ex: I\'m ready to go home after my second final, but my knees just don\'t bend that way. Currently taking my upper levels in CS and just graduated from the Entrepreneurship and Innovation Honors College. (Really good at spelling entrepreneurship)</p>")
  		$("#aboutme_student").append("<a id='aboutme_student_link' target='_blank' href='http://www.eip.umd.edu/'> <img style='width: 75px; height: 100px' src='data:image/png;base64,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'> </a>")	
  	}else {
    	$("#aboutme_student_newp").remove()
    	$("#aboutme_student_link").remove()
    	$("#aboutme_student").append("<img style='width: 100%; height: 80%' id='aboutme_student_video' src='assets/aboutme/photos/student.png'><p id='aboutme_student_p'> Student - Junior at The University of Maryland </p>")
  	}
    aboutme_studentClicked = !aboutme_studentClicked;
  });

  $("#projects_gropdemo").click(function(){
  	if (projects_gropdemoClicked){
  		$("#projects_gropdemo_video").remove()
    	$("#projects_gropdemo_p").remove()
    	$("#projects_gropdemo").append("<p id='projects_gropdemo_newp'>I\'m really into iOS development. This is a generic social media app that I challenged my self to build last summer. Functions ok, but definitely needs improvement. It\'s called GROP because it\'s for GROUPS that still need U (Wow that\'s lame) The code isn\'t up yet, but for now you can check out this really old app I made for my dining hall.</p> <a id='projects_gropdemo_link' target='_blank' href='https://github.com/seth0808/Diner2.0'>GitHub</a>")
  	}else {
    	$("#projects_gropdemo_newp").remove()
    	$("#projects_gropdemo_link").remove()
    	$("#projects_gropdemo").append("<img style='width: 100%; height: 80%' id='projects_gropdemo_video' src='assets/projects/photos/gropdemo.png'><p id='projects_gropdemo_p'> Grop (Social Media) App </p>")
  	}
    projects_gropdemoClicked = !projects_gropdemoClicked;
  });

  $("#projects_mazedemo").click(function(){
  	if (projects_mazedemoClicked){
  		$("#projects_mazedemo_video").remove()
    	$("#projects_mazedemo_p").remove()
    	$("#projects_mazedemo").append("<p id='projects_mazedemo_newp'>In my first semester we learned Dijkstra\'s algorithm. I told my friend I could probably use it solve mazes and he said I couldn\'t. </p> <a id='projects_mazedemo_link' target='_blank' href='https://github.com/seth0808/MazeSolver'>GitHub</a>")
  	}else {
    	$("#projects_mazedemo_newp").remove()
    	$("#projects_mazedemo_link").remove()
    	$("#projects_mazedemo").append("<img style='width: 100%; height: 80%' id='projects_mazedemo_video' src='assets/projects/photos/mazedemo.png'><p id='projects_mazedemo_p'> Dijkstra\'s Maze Solver </p>")
  	}
    projects_mazedemoClicked = !projects_mazedemoClicked;
  });

  $("#projects_nndemo").click(function(){
  	if (projects_nndemoClicked){
  		$("#projects_nndemo_video").remove()
    	$("#projects_nndemo_p").remove()
    	$("#projects_nndemo").append("<p id='projects_nndemo_newp'>Watched a TON of YouTube videos, decided I could put something together, frustrated by the machine learning libraries, and built something without one. My goal was to get the neural net to solve the game by itself. I tried to use something call neural evolution of augmenting topologies. I will be taking a machine learning course this semester so I can find all the flaws in this program. </p> <a id='projects_nndemo_link' target='_blank' href='https://github.com/seth0808/Neural-Network'>GitHub</a>")
  	}else {
    	$("#projects_nndemo_newp").remove()
    	$("#projects_nndemo_link").remove()
    	$("#projects_nndemo").append("<img style='width: 100%; height: 80%' id='projects_nndemo_video' src='assets/projects/photos/nndemo.png'><p id='projects_nndemo_p'> Game Played by Neural Network </p>")
  	}
    projects_nndemoClicked = !projects_nndemoClicked;
  });

  $("#projects_thissitedemo").click(function(){
  	if (projects_thissitedemoClicked){
  		$("#projects_thissitedemo_video").remove()
    	$("#projects_thissitedemo_p").remove()
    	$("#projects_thissitedemo").append("<p id='projects_thissitedemo_newp'>\"Wait he doesn\'t get to fill up a project space with this site.\" Well buddy this is actually the third version of my personal website. Check out the first and second. The first one has an insane function that would simulate the weather in the background of the site depending on your zip code. Took me forever to make and I decided it was too much for the site. \"Why doesn\'t he use React for this site?\" I really want to but that nice star wars effect in the background is putting up a fight against my react components</p> <a target='_blank' id='projects_thissitedemo_link_one' href='https://github.com/seth0808/Personal-Site'>First</a> <p id='projects_thissitedemo_link_divider'> _ </p> <a target='_blank' id='projects_thissitedemo_link_two' href='https://github.com/seth0808/Personal-Site2.0'>Second</a>")
  	}else {
    	$("#projects_thissitedemo_newp").remove()
    	$("#projects_thissitedemo_link_one").remove()
    	$("#projects_thissitedemo_link_two").remove()
    	$("#projects_thissitedemo_link_divider").remove()
    	$("#projects_thissitedemo").append("<img style='width: 100%; height: 80%' id='projects_thissitedemo_video' src='assets/projects/photos/thissitedemo.png'><p id='projects_thissitedemo_p'> This Wesbite </p>")
  	}
    projects_thissitedemoClicked = !projects_thissitedemoClicked;
  });

  $("#projects_dsdemo").click(function(){
  	if (projects_dsdemoClicked){
  		$("#projects_dsdemo_video").remove()
    	$("#projects_dsdemo_p").remove()
    	$("#projects_dsdemo").append("<p id='projects_dsdemo_newp'> I don\'t remember sleeping while making this project. They put the deadline in between finals. But now I think what I found is pretty interesting, so check it out</p> <a id='projects_dsdemo_link' href='https://seth0808.github.io/data_science_320_final/'>Data Science Final</a>")
  	}else {
    	$("#projects_dsdemo_newp").remove()
    	$("#projects_dsdemo_link").remove()
    	$("#projects_dsdemo").append("<img style='width: 100%; height: 80%' id='projects_dsdemo_video' src='assets/projects/photos/dsdemo.png'><p id='projects_dsdemo_p'> Exploring Gun Violence with Data Science </p>")
  	}
    projects_dsdemoClicked = !projects_dsdemoClicked;
});
	});

}else {

$(document).ready(function(){
  $("#aboutme_traveler").click(function(){
  	if (aboutme_travelerClicked){
  		$("#aboutme_traveler_video").remove()
    	$("#aboutme_traveler_p").remove()
    	$("#aboutme_traveler").append("<p id='aboutme_traveler_newp'> My most recent experience outside the country was in Japan over winter break. It was a fun time even though sushi is my worst enemy. Last summer I was in Ecuador for my internship (2 months) Press the logo to see where I worked</p>")
  		$("#aboutme_traveler").append("<a id='aboutme_traveler_link' target='_blank' href='https://www.yourprojectx.com/sec'> <img src='https://media.licdn.com/dms/image/C4D0BAQG3onU7KgO4hw/company-logo_200_200/0?e=2159024400&v=beta&t=pOZvChklNFi3j0IdFtIUGpS63HAmGdFbeQNBoCVKhPg'> </a>")
  	}else {
    	$("#aboutme_traveler_newp").remove()
    	$("#aboutme_traveler_link").remove()
    	$("#aboutme_traveler").append("<video id='aboutme_traveler_video' autoplay muted loop><source src='assets/aboutme/japan.mp4' type='video/mp4'></video><p id='aboutme_traveler_p'> Traveler (27 Countries So Far) </p>")
  	}
    aboutme_travelerClicked = !aboutme_travelerClicked;
  });


  $("#aboutme_developer").click(function(){
  	if (aboutme_developerClicked){
  		$("#aboutme_developer_video").remove()
    	$("#aboutme_developer_p").remove()
    	$("#aboutme_developer").append("<p id='aboutme_developer_newp'>My first \"program\" was a glitchy tank game on Scratch back in 7th grade. Can\'t tell if I\'ve gotten any better. Currently working at Verizon Connect as a Software Engineer Intern. Press on my LinkedIn (That video was after an all-nighter at the Georgia Tech Hackathon)</p>")
  		$("#aboutme_developer").append("<a id='aboutme_developer_link' target='_blank' href='https://www.linkedin.com/in/seth-kujawa-611b56145/'> <img style='width: 100px; height: 100px' src='https://eleganttech.dk/wp-content/uploads/2018/09/linkedin.png'> </a>")
  	}else {
    	$("#aboutme_developer_newp").remove()
    	$("#aboutme_developer_link").remove()
    	$("#aboutme_developer").append("<video id='aboutme_developer_video' autoplay muted loop><source src='assets/aboutme/developer.mp4' type='video/mp4'></video><p id='aboutme_developer_p'> Developer </p>")
  	}
    aboutme_developerClicked = !aboutme_developerClicked;
  });

  $("#aboutme_brother").click(function(){
  	if (aboutme_brotherClicked){
  		$("#aboutme_brother_video").remove()
    	$("#aboutme_brother_p").remove()
    	$("#aboutme_brother").append("<p id='aboutme_brother_newp'> Pledged during my second semester of college and I will never regret it. Check out our branch\'s website</p>")
    	$("#aboutme_brother").append("<a id='aboutme_brother_link' target='_blank' href='https://www.akpsi-umd.org/'> <img style='width: 250px; height: 100px' src='https://akpsi.org/wp-content/uploads/2017/01/AlphaKappaPsi_Horizontal-Website.png'> </a>")
  	}else {
    	$("#aboutme_brother_newp").remove()
    	$("#aboutme_brother_link").remove()
    	$("#aboutme_brother").append("<video id='aboutme_brother_video' autoplay muted loop><source src='assets/aboutme/brother.mp4' type='video/mp4'></video><p id='aboutme_brother_p'> Brother </p>")
  	}
    aboutme_brotherClicked = !aboutme_brotherClicked;
  });

  $("#aboutme_athlete").click(function(){
  	if (aboutme_athleteClicked){
  		$("#aboutme_athlete_video").remove()
    	$("#aboutme_athlete_p").remove()
    	$("#aboutme_athlete").append("<p id='aboutme_athlete_newp'> Yeah... intramurals will never compare to varsity soccer. I\'ll join any sport you have in mind except the 800 meter. Winter track was a nightmare</p>")
  	}else {
    	$("#aboutme_athlete_newp").remove()
    	$("#aboutme_athlete").append("<video id='aboutme_athlete_video' autoplay muted loop><source src='assets/aboutme/athlete.mp4' type='video/mp4'></video><p id='aboutme_athlete_p'> Athlete </p>")
  	}
    aboutme_athleteClicked = !aboutme_athleteClicked;
  });

  $("#aboutme_cinematographer").click(function(){
  	if (aboutme_cinematographerClicked){
  		$("#aboutme_cinematographer_video").remove()
    	$("#aboutme_cinematographer_p").remove()
    	$("#aboutme_cinematographer").append("<p id='aboutme_cinematographer_newp'>Ever since my TV production teacher in 9th grade had to watch my garbage videos, I\'ve loved making them. I plan to populate the video section below very soon</p>")
  	}else {
    	$("#aboutme_cinematographer_newp").remove()
    	$("#aboutme_cinematographer").append("<video id='aboutme_cinematographer_video' autoplay muted loop><source src='assets/aboutme/cinematographer.mp4' type='video/mp4'></video><p id='aboutme_cinematographer_p'> Cinematographer </p>")
  	}
    aboutme_cinematographerClicked = !aboutme_cinematographerClicked;
  });

  $("#aboutme_student").click(function(){
  	if (aboutme_studentClicked){
  		$("#aboutme_student_video").remove()
    	$("#aboutme_student_p").remove()
    	$("#aboutme_student").append("<p id='aboutme_student_newp'>GO TERPS. We always strive ahead only because the actual Terrapin creature is physically incapable of walking backwards. Ex: I\'m ready to go home after my second final, but my knees just don\'t bend that way. Currently taking my upper levels in CS and just graduated from the Entrepreneurship and Innovation Honors College. (Really good at spelling entrepreneurship)</p>")
  		$("#aboutme_student").append("<a id='aboutme_student_link' target='_blank' href='http://www.eip.umd.edu/'> <img style='width: 75px; height: 100px' src='data:image/png;base64,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'> </a>")	
  	}else {
    	$("#aboutme_student_newp").remove()
    	$("#aboutme_student_link").remove()
    	$("#aboutme_student").append("<video id='aboutme_student_video' autoplay muted loop><source src='assets/aboutme/student.mp4' type='video/mp4'></video><p id='aboutme_student_p'> Student </p>")
  	}
    aboutme_studentClicked = !aboutme_studentClicked;
  });

  $("#projects_gropdemo").click(function(){
  	if (projects_gropdemoClicked){
  		$("#projects_gropdemo_video").remove()
    	$("#projects_gropdemo_p").remove()
    	$("#projects_gropdemo").append("<p id='projects_gropdemo_newp'>I\'m really into iOS development. This is a generic social media app that I challenged my self to build last summer. Functions ok, but definitely needs improvement. It\'s called GROP because it\'s for GROUPS that still need U (Wow that\'s lame) The code isn\'t up yet, but for now you can check out this really old app I made for my dining hall.</p> <a id='projects_gropdemo_link' target='_blank' href='https://github.com/seth0808/Diner2.0'>GitHub</a>")
  	}else {
    	$("#projects_gropdemo_newp").remove()
    	$("#projects_gropdemo_link").remove()
    	$("#projects_gropdemo").append("<video id='projects_gropdemo_video' autoplay muted loop><source src='assets/projects/gropdemo.mp4' type='video/mp4'></video><p id='projects_gropdemo_p'> Grop (Social Media) App </p>")
  	}
    projects_gropdemoClicked = !projects_gropdemoClicked;
  });

  $("#projects_mazedemo").click(function(){
  	if (projects_mazedemoClicked){
  		$("#projects_mazedemo_video").remove()
    	$("#projects_mazedemo_p").remove()
    	$("#projects_mazedemo").append("<p id='projects_mazedemo_newp'>In my first semester we learned Dijkstra\'s algorithm. I told my friend I could probably use it solve mazes and he said I couldn\'t. </p> <a id='projects_mazedemo_link' target='_blank' href='https://github.com/seth0808/MazeSolver'>GitHub</a>")
  	}else {
    	$("#projects_mazedemo_newp").remove()
    	$("#projects_mazedemo_link").remove()
    	$("#projects_mazedemo").append("<video id='projects_mazedemo_video' autoplay muted loop><source src='assets/projects/mazedemo.mp4' type='video/mp4'></video><p id='projects_mazedemo_p'> Dijkstra's Maze Solver </p>")
  	}
    projects_mazedemoClicked = !projects_mazedemoClicked;
  });

  $("#projects_nndemo").click(function(){
  	if (projects_nndemoClicked){
  		$("#projects_nndemo_video").remove()
    	$("#projects_nndemo_p").remove()
    	$("#projects_nndemo").append("<p id='projects_nndemo_newp'>Watched a TON of YouTube videos, decided I could put something together, frustrated by the machine learning libraries, and built something without one. My goal was to get the neural net to solve the game by itself. I tried to use something call neural evolution of augmenting topologies. I will be taking a machine learning course this semester so I can find all the flaws in this program. </p> <a id='projects_nndemo_link' target='_blank' href='https://github.com/seth0808/Neural-Network'>GitHub</a>")
  	}else {
    	$("#projects_nndemo_newp").remove()
    	$("#projects_nndemo_link").remove()
    	$("#projects_nndemo").append("<video id='projects_nndemo_video' autoplay muted loop><source src='assets/projects/nndemo.mp4' type='video/mp4'></video><p id='projects_nndemo_p'> Game Played by Neural Network </p>")
  	}
    projects_nndemoClicked = !projects_nndemoClicked;
  });

  $("#projects_thissitedemo").click(function(){
  	if (projects_thissitedemoClicked){
  		$("#projects_thissitedemo_video").remove()
    	$("#projects_thissitedemo_p").remove()
    	$("#projects_thissitedemo").append("<p id='projects_thissitedemo_newp'>\"Wait he doesn\'t get to fill up a project space with this site.\" Well buddy this is actually the third version of my personal website. Check out the first and second. The first one has an insane function that would simulate the weather in the background of the site depending on your zip code. Took me forever to make and I decided it was too much for the site. \"Why doesn\'t he use React for this site?\" I really want to but that nice star wars effect in the background is putting up a fight against my react components</p> <a target='_blank' id='projects_thissitedemo_link_one' href='https://github.com/seth0808/Personal-Site'>First</a> <p id='projects_thissitedemo_link_divider'> _ </p> <a target='_blank' id='projects_thissitedemo_link_two' href='https://github.com/seth0808/Personal-Site2.0'>Second</a>")
  	}else {
    	$("#projects_thissitedemo_newp").remove()
    	$("#projects_thissitedemo_link_one").remove()
    	$("#projects_thissitedemo_link_two").remove()
    	$("#projects_thissitedemo_link_divider").remove()
    	$("#projects_thissitedemo").append("<video id='projects_thissitedemo_video' autoplay muted loop><source src='assets/projects/thissitedemo.mp4' type='video/mp4'></video><p id='projects_thissitedemo_p'> This Website </p>")
  	}
    projects_thissitedemoClicked = !projects_thissitedemoClicked;
  });

  $("#projects_dsdemo").click(function(){
  	if (projects_dsdemoClicked){
  		$("#projects_dsdemo_video").remove()
    	$("#projects_dsdemo_p").remove()
    	$("#projects_dsdemo").append("<p id='projects_dsdemo_newp'> I don\'t remember sleeping while making this project. They put the deadline in between finals. But now I think what I found is pretty interesting, so check it out</p> <a id='projects_dsdemo_link' href='https://seth0808.github.io/data_science_320_final/'>Data Science Final</a>")
  	}else {
    	$("#projects_dsdemo_newp").remove()
    	$("#projects_dsdemo_link").remove()
    	$("#projects_dsdemo").append("<video id='projects_dsdemo_video' autoplay muted loop><source src='assets/projects/dsdemo.mp4' type='video/mp4'></video><p id='projects_dsdemo_p'> Exploring Gun Violence with Data Science </p>")
  	}
    projects_dsdemoClicked = !projects_dsdemoClicked;
  });

});
}



