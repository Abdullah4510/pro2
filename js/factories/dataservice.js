(function() {

    angular
        .module("online_TEST")
        .factory("DataService", DataService);


    function DataService() {


        var dataObj = {
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        return dataObj;
    }


    var correctAnswers = [3, 0, 1, 2, 2];

    var quizQuestions = [{
            type: "text",
            text: "Which of the following is NOT an example of accelerator?",
            possibilities: [{
                    answer: "A keyboard shortcut like Ctrl-S to save"
                },
                {
                    answer: "A Siri shortcut"
                },
                {
                    answer: "A gesture like swipe to delete in iOS"
                },
                {
                    answer: "A menu"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Good abandonment describes a user behavior on what kind of page",
            possibilities: [{
                    answer: "Search-results page"
                },
                {
                    answer: "Product-detail page"
                },
                {
                    answer: "Product-list page"
                },
                {
                    answer: "Homepage"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Compared with users who skip a mobile-app walkthrough tutorial, users who sit through the tutorial will:",
            possibilities: [{
                    answer: "Be faster to perform a task within the app"
                },
                {
                    answer: "Perceive a task within the app as more difficult"
                },
                {
                    answer: "Be less likely to successfully complete a task within the app"
                },
                {
                    answer: "Enjoy the app more"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following is true of the information scent for a webpage?",
            possibilities: [{
                    answer: "It does not vary from user to user."
                },
                {
                    answer: "It stays the same regardless of the user’s goal."
                },
                {
                    answer: "It represents an estimate of how valuable that user will find the page."
                },
                {
                    answer: "It does not depend on label of the link to that page."
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "In UX, the critical-incident technique is:",
            possibilities: [{
                    answer: "A type of expert review in which a usability expert focuses on the top task in a UI"
                },
                {
                    answer: "A type of analysis which focuses on those user errors where users did not realize they got an incorrect answer for a task"
                },
                {
                    answer: "A research method in which users are asked to recall an event with significant outcomes."
                },
                {
                    answer: "An analytics method that tracks the number of fatal failures that took place on a site"
                }
            ],
            selected: null,
            correct: null
        }

    ];



})();