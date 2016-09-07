/*
This is empty on purpose! Your code to build the resume will go here.
 */
(function() {
    "use strict";


    var populateData = function(elemStr, data) {
        var placeholder = "%data%";
        return elemStr.replace(placeholder, data);
    };

    var bio = {
        name: "John Doe",
        role: "Front-End Dev",
        contacts: {
            mobile: "1 (111)-1111",
            email: "abc@xyz.com",
            github: "github.blah.com",
            twitter: "@blah",
            location: "123 ABC, CA"
        },

        welcomeMessage: "Hi",
        skills: ["Awesomeness", "B", "Cryogenic sleep", "saving the universe"],
        biopic: "images/fry.jpg",
        display: function() {
            var $header = $("#header");
            $header.prepend(populateData(HTMLheaderRole, this.role));
            $header.prepend(populateData(HTMLheaderName, this.name));
            var HTMLcontacts = populateData(HTMLmobile, this.contacts.mobile) +
                populateData(HTMLemail, this.contacts.email) +
                populateData(HTMLgithub, this.contacts.github) +
                populateData(HTMLtwitter, this.contacts.twitter) +
                populateData(HTMLlocation, this.contacts.location);

            $("#topContacts").append(HTMLcontacts);
            $("#footerContacts").append(HTMLcontacts);
            $header.append(populateData(HTMLbioPic, this.biopic));
            $header.append(populateData(HTMLwelcomeMsg, this.welcomeMessage));
            $header.append(HTMLskillsStart);
            var HTMLskillsFinal = "";
            for (var i = 0, len = this.skills.length; i < len; i++) {
                HTMLskillsFinal += populateData(HTMLskills, this.skills[i]);
            }
            $("#skills").append(HTMLskillsFinal);
        }
    };



    var education = {
        schools: [{
            name: "University of Waterloo",
            location: "Waterloo, Canada",
            degree: "Bachelor of Computer Science",
            majors: ["Software Engineering"],
            dates: "2011 - 2016",
            url: "https://uwaterloo.ca/"
        }, {
            name: "Wilfrid Laurier University",
            location: "Waterloo, Canada",
            degree: "Bachelor of Business Administration",
            majors: ["Marketing"],
            dates: "2011 - 2016",
            url: "https://www.wlu.ca/lazaridis-school-of-business-and-economics/"
        }],

        onlineCourses: [{
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            dates: "Aug - Sep 2016",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }],

        display: function() {
            var $education = $("#education");

            for (var i = 0, len = this.schools.length, HTMLschoolFinal; i < len; i++) {
                HTMLschoolFinal = populateData(HTMLschoolName, this.schools[i].name) +
                    populateData(HTMLschoolDegree, this.schools[i].degree) +
                    populateData(HTMLschoolDates, this.schools[i].dates) +
                    populateData(HTMLschoolLocation, this.schools[i].location);

                for (var j = 0, len2 = this.schools[i].majors.length; j < len2; j++) {
                    HTMLschoolFinal += populateData(HTMLschoolMajor, this.schools[i].majors);
                }

                $education.append(HTMLschoolStart.replace("><", ">" + HTMLschoolFinal + "<"));
            }
            $education.append(HTMLonlineClasses);
            var HTMLcoursesFinal = "";
            for (i = 0, len = this.onlineCourses.length; i < len; i++) {
                HTMLcoursesFinal = populateData(HTMLonlineTitle, this.onlineCourses[i].title) +
                    populateData(HTMLonlineSchool, this.onlineCourses[i].school) +
                    populateData(HTMLonlineDates, this.onlineCourses[i].dates) +
                    populateData(HTMLonlineURL, this.onlineCourses[i].url);
                $education.append(HTMLschoolStart.replace("><", ">" + HTMLcoursesFinal + "<"));
            }
        }
    };

    var work = {
        jobs: [{
            employer: "Palette",
            title: "Software Developer",
            location: "Kitchener, Canada",
            dates: "Sep - Dec 2015",
            description: "stuff and things"
        }],

        display: function() {
            var $experience = $("#workExperience");

            for (var i = 0, len = this.jobs.length, HTMLworkFinal; i < len; i++) {
                HTMLworkFinal = populateData(HTMLworkEmployer, this.jobs[i].employer) +
                    populateData(HTMLworkTitle, this.jobs[i].title) +
                    populateData(HTMLworkDates, this.jobs[i].dates) +
                    populateData(HTMLworkLocation, this.jobs[i].location) +
                    populateData(HTMLworkDescription, this.jobs[i].description);
                $experience.append(HTMLworkStart.replace("><", ">" + HTMLworkFinal + "<"));
            }

        }
    };


    var projects = {
        projects: [{
            title: "A Thing",
            dates: "2011 - 2016",
            description: "Asdasd",
            images: [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }],

        display: function() {
            var $projects = $("#projects");
            for (var i = 0, len = this.projects.length, HTMLprojectFinal; i < len; i++) {
                HTMLprojectFinal = populateData(HTMLprojectTitle, this.projects[i].title) +
                    populateData(HTMLprojectDates, this.projects[i].dates) +
                    populateData(HTMLprojectDescription, this.projects[i].description);

                for (var j = 0, len2 = this.projects[i].images.length; j < len2; j++) {
                    HTMLprojectFinal += populateData(HTMLprojectImage, this.projects[i].images[j]);
                }

                $projects.append(HTMLprojectStart.replace("><", ">" + HTMLprojectFinal + "<"));
            }
        }
    };

    bio.display();
    work.display();
    projects.display();
    education.display();


    $("#mapDiv").append(googleMap);

})();