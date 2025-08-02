sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/bhargav/managebooks/managebooks/test/integration/FirstJourney',
		'com/bhargav/managebooks/managebooks/test/integration/pages/BooksList',
		'com/bhargav/managebooks/managebooks/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/bhargav/managebooks/managebooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);