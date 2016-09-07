/*
This is empty on purpose! Your code to build the resume will go here.
 */

"use strict";



var populateData = function(elemStr, data) {
    var placeholder = "%data%";
    return elemStr.replace(placeholder, data);
}

var bio = {
    name : "John Doe",
    role : "Front-End Dev",
    contacts : {
        mobile: "1 (111)-1111",
        email: "abc@xyz.com",
        github: "github.blah.com",
        twitter: "@blah",
        location: "123 ABC, CA"
    },

    welcomeMessage: "Hi",
    skills: ["Awesomeness", "B", "Cryogenic sleep", "saving the universe"],
    biopic: "images/fry.jpg",
    display: function(){
        var $header = $("#header");
        $header.prepend(populateData(HTMLheaderRole, this.role));
        $header.prepend(populateData(HTMLheaderName, this.name));
        var HTMLcontacts =  populateData(HTMLmobile, this.contacts.mobile)   +
                            populateData(HTMLemail, this.contacts.email)     +
                            populateData(HTMLgithub, this.contacts.github)   +
                            populateData(HTMLtwitter, this.contacts.twitter) +
                            populateData(HTMLlocation, this.contacts.location);

        $("#topContacts").append(HTMLcontacts);
        $("#footerContacts").append(HTMLcontacts);
        $header.append(populateData(HTMLbioPic, this.biopic));
        $header.append(populateData(HTMLwelcomeMsg, this.welcomeMessage));
        $header.append(HTMLskillsStart);
        var HTMLskillsFinal = "";
        for(var i = 0, len = this.skills.length; i < len; i++) {
            HTMLskillsFinal += populateData(HTMLskills, this.skills[i])
        }
        $("#skills").append(HTMLskillsFinal);
    }
};

bio.display();

var education = {
    schools: [
    {
        name: "University of Waterloo",
        location: "Waterloo, Canada",
        degree: "Bachelor of Computer Science",
        majors: ["Software Engineering"],
        dates: "2011 - 2016",
        url: "https://uwaterloo.ca/"
    },
    {
        name: "Wilfrid Laurier University",
        location: "Waterloo, Canada",
        degree: "Bachelor of Business Administration",
        majors: ["Marketing"],
        dates: "2011 - 2016",
        url: "https://www.wlu.ca/lazaridis-school-of-business-and-economics/"
    }],

    onlineCourses: [
        {
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            dates: "Aug - Sep 2016",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],

    display: function() {

        for(var i = 0, len = schools.length; i < len; i++) {

        }
    }
};

var work = {
    jobs: [
        {
            employer: "Palette",
            title: "Software Developer",
            location: "Kitchener, Canada",
            dates: "Sep - Dec 2015",
            description: "stuff and things"
        }
    ],

    display: function() {
        var $experience = $("#workExperience");

        for(var i = 0, len = this.jobs.length; i < len; i++) {
            var HTMLworkFinal = populateData(HTMLworkEmployer, this.jobs.employer)  +
                                populateData(HTMLworkTitle, this.jobs.title)        +
                                populateData(HTMLworkDates, this.jobs.dates)        +
                                populateData(HTMLworkLocation, this.jobs.location)  +
                                populateData(HTMLworkDescription, this.jobs.description)   +
            $experience.append(HTMLworkStart.replace("><", HTMLworkFinal));
        }

    }
};

work.display();

var projects = {
    projects: [
        {
            title: "A Thing",
            dates: "2011 - 2016",
            description: "Asdasd",
            images: [
                "url1"
            ]
        }
    ],

    display: function() {

    }
};


