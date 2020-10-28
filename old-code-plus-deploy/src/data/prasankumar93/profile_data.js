import profileImage from './images/prasan_1.jpg';

var profileData = {
    ProfileImage: profileImage,
    LastUpdatedOn: 'Oct 3, 2018',
    Name: 'Prasan Kumar',
    Address: 'Sr.Software Engineer at Antares Systems Ltd, Bangalore, INDIA',

    Email: 'prasankumar93@gmail.com',
    ProfileLinkedIn: 'https://in.linkedin.com/in/prasankumar93',
    ProfileTwitter: 'https://twitter.com/prasankumar93',
    ProfileGooglePlus: 'https://plus.google.com/+prasankumar93',
    ProfileLinkedInTitle: 'prasankumar93 on LinkedIn',
    ProfileTwitterTitle: '@prasankumar93 on Twitter',
    ProfileGooglePlusTitle: '+prasankumar93 on Google+',
    ProfileGmailTitle: 'email to prasankumar93@gmail.com',

    Summary: [{
        Content: 'A full stack software developer with 7 years of experience in using Microsoft and Web technologies. '
    }, {
        Content: 'Good problem solving, analytical and debugging skills.'
    }, {
        Content: 'Dedicated, Innovative and self-motivated team player with an ability to easily assimilate new ideas and concepts.'
    }],
    TechnicalSkills: [
        {
            Header: 'Client',
            Skills: ['HTML', 'CSS', 'JAVASCRIPT (ES6/7)', 'JQuery', 'AngularJS (v1)', 'AureliaJS']
        },
        {
            Header: 'Server',
            Skills: ['C# (.Net 4.6)', 'ASP.NET WebAPI', 'LINQ', 'Entity Framework 6', 'ADO.NET', 'ASP.Net Core 2*']
        },
        {
            Header: 'Database',
            Skills: ['SqlServer']
        },
        {
            Header: 'Others',
            Skills: ['SVN / GIT']
        }
    ],
    Experience: [{
        Description: 'Sr. Software engineer at Antares Systems Ltd, Bangalore (Nov 2014 to present)',
        Projects: [{
            Title: 'Internal Statistics & Multi Department Pages (April 2017 - present)',
            Details: 'An internal product to track e-tendering statistics like web crawler status, active tenders (total and day wise), document conversion status and other debug information. Multiple templates (responsive) & components for department pages',
            Technologies: 'HTML, CSS, JavaScript, Aurelia, ASP.NET Web API, LINQ, Entity Framework 6 , SQL Server 2008',
            Responsibilities: [
              'Initiator to use new client side frameworks like Aurelia (ES6/7).',
              'Created custom elements like  custom video player,  input tags, file uploader, alerts & other commonly required elements',
              'Created theming (user customizable) in product using CSS variables',
              'Implemented localization / Internationalization using Aurelia i18n library.',
              'For non-responsive pages, rendering different view (HTML) for mobile and desktop but keeping same View Model (JavaScript).  ',
              'User access control on client side pages and functionality.',
              'Core screens development like tender and crawler statistics.'
            ]
        }, {
            Title: 'Bid Factory (Nov 2014 – April 2017)',
            Details: 'This software product provides e-tendering and bid preparation solutions. Core features include aggregated tenders crawled from government departments, tender document search, document highlighting and bid management.',
            Technologies: 'HTML (Indexed DB for client storage), CSS, JavaScript, Angular JS, Mozilla PDF.js(as pdf loader), ASP.NET Web API, LINQ, Entity Framework 6 , SQL Server 2008',
            Responsibilities: [
              'Core module development like Epitool (tender resolver), Episteme (tender preparation)  using Angular JS (front end) and c#.net (back end)',
              'Created PDF viewer using Mozilla PDF.js',
              'Document Highlighting in JavaScript using rangy library.',
              'ATOM payment gateway integration in packages and subscription module.',
              'Create reusable custom HTML elements (angular directives) for product.',
              'Develop client side storage mechanism using Indexed DB.',
              'User Session Management by custom API token mechanism.',
              'Review client & server code of other team members'
            ]
        }]}, 
        {
          Description: 'Streamline Healthcare Solutions, LLC (Jun 2013 – Nov 2014)',
            Projects:[
                {
                    Title: 'Smart care Web (Jun 2013 to Oct 2014)',
                    Details: 'This software product provides all behavioral healthcare solutions.It covers all services required for mentally challenged patients.',
                    Technologies: 'ASP.NET 3.5 (Web Forms), JavaScript,  JQuery, C#, ADO.NET (Typed Datasets), SQL Server 2008',
                    Responsibilities: [
                      'Development of Client orders module.',
                      'Initiator and lead of cross browser compatibility development.'
                    ],
                    SpecialAchievements: ['Won Innovation award on Annual Day for architectural contribution and cross browser compatibility.']
                }
            ]
        }, {
          Description:'Asclepius consulting technologies  (Aug 2011 – May 2013)',
            Projects: [
                {
                    Title: 'CHARAK  (Aug 2011 to May 2013)',
                    Details: 'This software includes all hospital management solutions. Core modules include Pharmacy store, Patient management, Lab and Radiology, Billing, Diet and Kitchen management, HR Management, Capital Asset Management, Blood bank, White board and Reports.',
                    Technologies: 'Asp.net 2.0, JavaScript , EXTJS 2.0, ADO.net, C# , SQL server 2005',
                    Responsibilities: [
                      'Module development of Pharmacy store which includes pharmacy Indent, Purchase order, GRN, Transfer to store, Patient Issue / Return.',
                      'Module development of Diet and Kitchen management.'
                    ]
                }
            ]
        }],
    Education: [{
        Course: 'B.Tech(Information Technology)',
        Year: '2011',
        Institute: 'T.P.I.S.T College of Engineering (JNTU Kakinada University).',
        Address: 'Andhra Pradesh, INDIA'
    },
    {
        Course: 'CLASS 12 (PCMC - Physics, Chemistry, Mathematics, Computers)',
        Year: '2007',
        Institute: 'Sadvidya composite PU College',
        Address: 'Mysore, Karnataka, INDIA'
    },
    {
        Course: 'CLASS 10',
        Year: '2005',
        Institute: 'St. Catherine High School',
        Address: 'Bangalore,  Karnataka, INDIA'
    }],
    Others: {
        Gender: 'Male',
        MartialStatus: 'Married',
        Languages: 'English, Hindi, Telugu, Kannada, Marwadi(/rajasthani)',
        DOB: 'Feb 13, 1990'
    }
}

export { profileData}
