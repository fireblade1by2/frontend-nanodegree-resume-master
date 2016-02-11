var bio = {
    "name": "Mohammed Abdulrazzaq",
    "role": "Web Developer",

    "contacts": {
        "mobile": "734-604-5650",
        "email": "alazzaway.mohammed@gmail.com",
        "github": "fireblade1by2",
        "linkedin": "mohammedAbdulrazzaq1by2",
        "twitter": "mohammed1by2",
        "location": "Michigan, USA"
    },

    "welcomeMessage": "Welcome to my resume.",
    "skills": [
        "SDLC", "Web Development", "Research", "Software Development", "Sketching"
    ],
    "bioPic": "images/fry.jpg"
};

var education = {
    "schools": [{
        "name": "Al-ahliyya Amman University - B.Sc",
        "location": "Amman, Jordan",
        "degree": "B.Sc",
        "majors": ["Software Engineering"],
        "dates": 2013,
        "url": "http://www.ammanu.edu.jo/English/HomeP/Home.aspx"
    }],
    "onlineCourses": [{
        "courseTitle": "Front-end web Development",
        "schoolName": "Udacity",
        "courseDates": 2016,
        "onlineUrl": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var work = {
    "jobs": [{
        "employer": "Rhodes Precast Concrete Ltd.",
        "title": "It Offcer",
        "location": "Amman, Jordan",
        "dates": "May 2013 – Sep 2013",
        "description": "Researched and implemented web strategies to enhance web applications, website usability and end user effectiveness using .NET, making the website more accessible for employees. Built dynamic internal reporting web applications using .NET & MS SQL server for 35-40 people to provide reporting capabilities, user management, and application management capabilities Provided custom programming and systems integration including .NET custom functions and overrides; consulted 5-8 team members including defining application requirements"
    }, {
        "employer": "Iraqi Jordanian Red Cross and Crescent",
        "title": "IT Assistant",
        "location": "Amman, Jordan",
        "dates": "Mar 2013 – Apr 2013",
        "description": "Assisted with procurement and implementation of new servers and technology. Used Oracle interface to change settings. Provided technical assistance and supervised server support for 4 users daily. Collaborated with IT specialists as needed to troubleshoot errors, lags, hardware, and server issues. Input patient data using Oracle daily to ensure up to date and accurate information"
    }]
};

var projects = {
    "projects": [{
        "title": "Online Exam Builder (O.E.B)",
        "images": ["images/projectImage/0001.jpg", "images/projectImage/0002.jpg"],
        "dates": "2010 - 2013",
        "description": "Created online application for teachers to create exams quickly and efficiently without installation using only internet access; implemented application using .NET, SQL and HTML, CSS for style"

    }]
};

bio.display = function() {
    var data = '%data%';
    var $header = $('#header');
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $header.prepend(formattedRole);
    $header.prepend(formattedName);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedLinkedIn = HTMLlinkedIn.replace(data, bio.contacts.linkedin);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts").append(formattedGithub, formattedLinkedIn, formattedTwitter, formattedLocation, formattedMobile, formattedEmail);
    $("#footerContacts").append(formattedMobile, formattedGithub, formattedTwitter, formattedEmail, formattedLocation);
    var formattedImg = HTMLbioPic.replace(data, bio.bioPic);
    var formattedWelcomMessage = HTMLWelcomeMsg.replace(data, bio.welcomeMessage);
    $header.append(formattedImg);
    $header.append(formattedWelcomMessage);

    if (bio.skills.length > 0) {
        var data = '%data%';
        var $header = $('#header');
        $($header).append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.display();

work.display = function() {
    for (var job in work.jobs) {
        var data = '%data%';
        var $header = $('#header');
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
};
work.display();

projects.display = function() {
    for (var project in projects.projects) {
        var data = '%data%';
        var $header = $('#header');
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
        $(".project-entry:last").append(formattedprojectTitle);
        var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

education.display = function() {
    for (var edu in education.schools) {
        var data = '%data%';
        var $header = $('#header');
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace(data, education.schools[edu].name);
        //var formattedUrl = HTMLschoolName.replace("#", education.schools[edu].url);
        //var schoolWebsite = formattedschoolName + formattedUrl;
        $(".education-entry:last").append(formattedschoolName);
        var formattedschoolDates = HTMLschoolDates.replace(data, education.schools[edu].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedMajor = HTMLschoolMajor.replace(data, education.schools[edu].majors);
        $(".education-entry:last").append(formattedMajor);
        var formatedschoolLocation = HTMLschoolLocation.replace(data, education.schools[edu].location);
        $(".education-entry:last").append(formatedschoolLocation);
    }
    for (var cor in education.onlineCourses) {
        var data = '%data%';
        var $header = $('#header');
        $("#online").append(HTMLonlineStart);
        var formattedcourseTitle = HTMLonlineTitle.replace(data, education.onlineCourses[cor].courseTitle);
        $(".online-entry:last").append(formattedcourseTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[cor].schoolName);
        $(".online-entry:last").prepend(formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace(data, education.onlineCourses[cor].courseDates);
        $(".online-entry:last").append(formattedonlineDates);
        var formattedonlineUrl = HTMLonlineURL.replace(data, education.onlineCourses[cor].onlineUrl);
        $(".online-entry:last").append(formattedonlineUrl);
    }
};
education.display();

$("#mapDiv").append(googleMap);