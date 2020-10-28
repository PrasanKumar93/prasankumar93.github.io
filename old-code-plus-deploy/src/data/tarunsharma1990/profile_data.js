import profileImage from './images/tarun_1.jpg';

var profileData = {
    ProfileImage: profileImage,
    LastUpdatedOn: 'Oct 3, 2018',
    Name: 'Tarun Sharma',
    Address: 'Software Engineer at Antares Systems Ltd, Bangalore, INDIA',

    Email: 'sharmatarun2008@gmail.com',
    ProfileLinkedIn: 'https://www.linkedin.com/in/tarunsharma1990/',
    ProfileTwitter: 'https://twitter.com/sharmatarun1990',
    ProfileGooglePlus: 'https://plus.google.com/+TarunSharma2008',
    ProfileLinkedInTitle: 'tarunsharma1990 on LinkedIn',
    ProfileTwitterTitle: '@sharmatarun1990 on Twitter',
    ProfileGooglePlusTitle: '+TarunSharma2008 on Google+',
    ProfileGmailTitle: 'email to sharmatarun2008@gmail.com',

    Summary: [{
        Content: 'A frontend developer with 2 years of experience'
    }, 
    {
        Content: 'To continuously pursue learning and develop skills so as to contribute to the growth and achieving the goals of organization, which will help me to explore myself fully and realize my potential.'
    }],
    TechnicalSkills: [
        {
            Header: 'Client',
            Skills: ['HTML', 'CSS', 'JAVASCRIPT (ES6/7)', 'JQuery', 'AureliaJS']
        },
        {
            Header: 'Server',
            Skills: ['C#', 'ADO.NET']
        },
        {
            Header: 'Database',
            Skills: ['SqlServer']
        },
        {
            Header: 'Others',
            Skills: ['SVN / GIT*']
        }
    ],
    Experience: [{
        Description: 'Software engineer at Antares Systems Ltd, Bangalore (Jan 2017 to present)',
        Projects: [{
            Title: 'Internal Statistics & Multi Department Pages (April 2017)',
            Details: 'An internal product to track e-tendering statistics like web crawler status, active tenders (total and day wise), document conversion status and other debug information. Multiple templates (responsive) & components for department pages',
            Technologies: 'HTML, CSS, JavaScript, Aurelia',
            Responsibilities: [
              'Use new client side frameworks like Aurelia (ES6/7).',
              'Created custom elements like  custom video player,  input tags, file uploader, alerts & other commonly required elements',
              'Created theming (user customizable) in product using CSS variables',
              'Implemented localization / Internationalization using Aurelia i18n library.',
              'For non-responsive pages, rendering different view (HTML) for mobile and desktop but keeping same View Model (JavaScript).  ',
            ]
        }, {
            Title: 'BF Lite (Oct 2017 - March 2018)',
            Details: 'This software product provides e-tendering and bid preparation solutions. Core features include aggregated tenders crawled from government departments, tender document search, document highlighting and bid management.',
            Technologies: 'HTML, CSS, JavaScript, Aurelia, Mozilla PDF.js(as pdf loader), ASP.NET Web API, LINQ, Entity Framework 6 , SQL Server 2008',
            Responsibilities: [
              'Design In HTML',
              'Created custome components like Navbar, Data Table, Alert Element, Toggle Button Element'
            ]
        }]}],
    Education: [{
        Course: 'B.Tech(Computer Science)',
        Year: '2013',
        Institute: 'Jodhpur Institute of Engineering & Technology (JIET)',
        Address: 'Rajasthan, INDIA'
    },
    {
        Course: 'CLASS 12 (PCMC - Physics, Chemistry, Mathematics, Computers)',
        Year: '2009',
        Institute: 'Mayur Nobles Academy',
        Address: 'Barmer, Rajasthan, INDIA'
    },
    {
        Course: 'CLASS 10',
        Year: '2006',
        Institute: 'Adarsh Vidhya Mandir',
        Address: 'Barmer,  Rajasthan, INDIA'
    }],
    Others: {
        Gender: 'Male',
        MartialStatus: 'Married',
        Languages: 'English, Hindi, Marwadi(/rajasthani)',
        DOB: 'Sep 23, 1990'
    }
}

export { profileData}
