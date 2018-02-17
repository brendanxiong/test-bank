var subjectAreas = ['Arabic','Astronomy','Chemistry','Communication Studies', 'Comoputer Science', 'Economics','EE Biology', 'Electrical Engineering','Film and Television','French','GE Clusters', 'Geography','Geology','Global Studies','History','Italian','Life Science','Management','Math','Physics','Program in Computing', 'Psychology','Statistics'];
var subjectTag = ['Arabic','Astronomy','Chemistry','Communication+Studies', 'Comoputer+Science', 'Economics','EE+Biology', 'Electrical+Engineering','Film+and+Television','French','GE+Clusters', 'Geography','Geology','Global+Studies','History','Italian','Life+Science','Management','Math','Physics','Program+in+Computing', 'Psychology','Statistics'];

window.onload = function() {
	searchSubject();
};



function searchSubject(){
	var input, filter, li;
	input = document.getElementById("inputBySubject");
	filter = input.value.toLowerCase();
	subjectList = document.getElementById("subjects");
	subjectList.innerHTML = "";

	var display = [];
	var tags = [];
	var tagNum = 0;	//Keep track of which subjectArea indexes we're displaying
	for(var i=0, len = subjectAreas.length; i < len; i++)
	{
		var subject = subjectAreas[i];
		if(subject.toLowerCase().indexOf(filter) > -1)
		{
			display.push(subject);
			tags.push(tagNum);
		}
		tagNum++;
	}
	
	for(var i=0, len = display.length; i < len; i++)
	{
		subjectList.innerHTML += "<li>" + "<a href='#' class=" + tags[i] + ">" + display[i] + "</a> </li> <br/>";
	}
}

function searchGE(){
	var input, filter,  li;
	input = document.getElementById("inputBySubject");
	filter = input.value.toLowerCase();
	subjectList = document.getElementById("subjects");
	subjectList.innerHTML = "";

	var display = [];
	for(var i=0, len = subjectAreas.length; i < len; i++)
	{
		var subject = subjectAreas[i];
		if(subject.toLowerCase().indexOf(filter) > -1)
		{
			display.push(subject);
		}
	}
	
	for(var i=0, len = display.length; i < len; i++)
	{
		subjectList.innerHTML += "<li>" + "<a href='#'>" + display[i] + "</a> </li> <br/>";
	}
}

function searchFiat(){
	var input, filter,  li;
	input = document.getElementById("inputBySubject");
	filter = input.value.toLowerCase();
	subjectList = document.getElementById("subjects");
	subjectList.innerHTML = "";

	var display = [];
	for(var i=0, len = subjectAreas.length; i < len; i++)
	{
		var subject = subjectAreas[i];
		if(subject.toLowerCase().indexOf(filter) > -1)
		{
			display.push(subject);
		}
	}
	
	for(var i=0, len = display.length; i < len; i++)
	{
		subjectList.innerHTML += "<li>" + "<a href='#'>" + display[i] + "</a> </li> <br/>";
	}
}

function formatTime(time)
{
	if(time != parseInt(time, 10)) return time;
	var timeWord = "";
	var timeOfDay;
	time = parseInt(time, 10);
	if(time >= 1300) {
		time -= 1200;
		timeOfDay = "pm";
	} else {
		timeOfDay = "am";
	}
	if(time > 999)	// 4 digits
	{
		timeWord += String(Math.floor(time/1000)) % 10 + String(Math.floor(time/100) % 10) + ":" + String(Math.floor(time/10) % 10) + time % 10;
	} else {
		timeWord += String(Math.floor(time/100)) % 10 + ":" + String(Math.floor(time/10) % 10) + time % 10;
	}

	timeWord += timeOfDay;

	return timeWord;
}

var dict;
$.getJSON('https://www.jasonbase.com/things/8W0L', function(data) {
	dict = eval(data);
});

function showClass(className){
	var tempdict = dict[className];
	document.getElementById("classInfos").innerHTML = "<div class='col-sm-2'><p>Class</p></div><div class='col-sm-2'><p>Location</p></div><div class='col-sm-2'><p>Instructor</p></div><div class='col-sm-2'><p>Start Time</p></div><div class='col-sm-2'><p>End Time</p></div><div class='col-sm-2'><p>Day(s)</p></div>";
	for(var key in tempdict){

		document.getElementById("classInfos").innerHTML += "<div class='row className'><p>" + key + "-" + tempdict[key]["name"] +"</p></div>";
		for(var i =0; i < tempdict[key]["section"].length;i++){
			var sec=tempdict[key]["section"][i];
			var location=tempdict[key]["location"][i];
			var instructor=tempdict[key]["instructor"][i];
			var Stime=formatTime(tempdict[key]["time"][i][0]);
			var Etime=formatTime(tempdict[key]["time"][i][1]);
			var day = tempdict[key]["day"][i];
			document.getElementById("classInfos").innerHTML += "<div class='row class'> <div class='col-sm-2'><a id='"+key+'lec'+i+"' onclick=\"add(this.id)\">Add</a><p>" + sec + "</p></div><div class='col-sm-2'><p>" + location + "</p></div><div class='col-sm-2'><p>" + instructor + "</p></div><div class='col-sm-2'><p>" + Stime + "</p></div><div class='col-sm-2'><p>" + Etime + "</p></div><div class='col-sm-2'><p>" + day + "</p></div></div>";

			}

		
		var discussion=tempdict[key]["discussion"];
		if(discussion.length!==0){
			if(typeof discussion["section"] === 'undefined') return 0;
			for(var j =0; j < discussion["section"].length;j++){
				var sec=discussion["section"][j];
				var location=discussion["location"][j];
				var instructor=discussion["instructor"][j];
				var Stime=formatTime(discussion["time"][j][0]);
				var Etime=formatTime(discussion["time"][j][1]);
				var day = discussion["day"][j];
				document.getElementById("classInfos").innerHTML += "<div class='row dis'> <div class='col-sm-2'><a id='"+key+'dis'+i+"' onclick=\"add(this.id)\">Add</a><p>" + sec + "</p></div><div class='col-sm-2'><p>" + location + "</p></div><div class='col-sm-2'><p>" + instructor + "</p></div><div class='col-sm-2'><p>" + Stime + "</p></div><div class='col-sm-2'><p>" + Etime + "</p></div><div class='col-sm-2'><p>" + day + "</p></div></div>";
		}

		}
	}
}


function add(id){
	var parent = document.getElementById(id).parentNode.parentNode;
	
	document.getElementById("right").innerHTML+="<div class='row'>"+parent.innerHTML+"</div>";
	$('#'+id).parent().parent().hide();

}
$(document).ready(function(){
	attacheventhandlers();
});
function attacheventhandlers(){
	$('#subjects').on('click', '.0',function() {showClass('Arabic');});
$('#subjects').on('click', '.1',function() {showClass('Astronomy');});
$('#subjects').on('click', '.2',function() {showClass('Chemistry');});
$('#subjects').on('click', '.3',function() {showClass('Communication+Studies');});
$('#subjects').on('click', '.4',function() {showClass('Computer+Science');});
$('#subjects').on('click', '.5',function() {showClass('Economics');});
$('#subjects').on('click', '.6',function() {showClass('EE+Biology');});
$('#subjects').on('click', '.7',function() {showClass('Electrical+Engineering');});
$('#subjects').on('click', '.8',function() {showClass('Film+and+Television');});
$('#subjects').on('click', '.9',function() {showClass('French');});
$('#subjects').on('click', '.10',function() {showClass('GE+Clusters');});
$('#subjects').on('click', '.11',function() {showClass('Geography');});
$('#subjects').on('click', '.12',function() {showClass('Geology');});
$('#subjects').on('click', '.13',function() {showClass('Global+Studies');});
$('#subjects').on('click', '.14',function() {showClass('History');});
$('#subjects').on('click', '.15',function() {showClass('Italian');});
$('#subjects').on('click', '.16',function() {showClass('Life+Science');});
$('#subjects').on('click', '.17',function() {showClass('Management');});
$('#subjects').on('click', '.18',function() {showClass('Math');});
$('#subjects').on('click', '.19',function() {showClass('Physics');});
$('#subjects').on('click', '.20',function() {showClass('Program+in+Computing');});
$('#subjects').on('click', '.21',function() {showClass('Psychology');});
$('#subjects').on('click', '.22',function() {showClass('Statistics');});

}

