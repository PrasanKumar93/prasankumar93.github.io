import profileImage from './images/gunjan_profile.jpg';

var profileData = {
    ProfileImage: profileImage,
    LastUpdatedOn: 'Oct 1, 2018',
    Name: 'Gunjan Chanana',
    Address: 'Front End Developer at Antares Systems Ltd, Bangalore, INDIA',

    Email: 'gc.chanana@gmail.com',
    ProfileLinkedIn: 'https://in.linkedin.com/in/gunjanchanana',
    ProfileTwitter: 'https://twitter.com/ChananaGunjan',
    ProfileGooglePlus: 'https://plus.google.com/u/0/+GunjanChanana',
    ProfileLinkedInTitle: 'gunjanchanana on LinkedIn',
    ProfileTwitterTitle: '@ChananaGunjan on Twitter',
    ProfileGooglePlusTitle: '+GunjanChanana on Google+',
    ProfileGmailTitle: 'email to gc.chanana@gmail.com',

    Summary: [{
        Content: 'A Front End developer with 3 years of experience working with Web technologies. '
    }, {
        Content: 'Focused and have abilities of learning things quickly'
    }],
    TechnicalSkills: [
        {
            Header: 'Client',
            Skills: ['HTML', 'CSS', 'JAVASCRIPT (ES6)', 'AngularJS (v1)', 'AureliaJS']
        },
        {
            Header: 'Server',
            Skills: ['Core Java']
        },
        {
            Header: 'Others',
            Skills: ['GIT*']
        }
    ],
    Education: [{
        Course: 'B.Tech(Computer Science)',
        Year: '2015',
        Institute: 'Manav Rachna College of Engineering',
        Address: 'Faridabad, Haryana, INDIA'
    },
    {
        Course: 'CLASS 12 (PCMC - Physics, Chemistry, Mathematics, Computers)',
        Year: '2011',
        Institute: 'Shri Krishna Pranami Public School',
        Address: 'Hansi, Haryana, INDIA'
    },
    {
        Course: 'CLASS 10',
        Year: '2009',
        Institute: 'S.D. Modern Public School',
        Address: 'Hansi, Haryana, INDIA'
    }],
    Experience: [
        {
            Description: 'Front End Developer at Antares Systems Ltd, Bangalore (April 2018-present)',
            Projects: [
                {
                    Title: 'Multi Department Pages',
                    Details: 'Multiple templates (responsive) & components for department pages',
                    Technologies: 'HTML, CSS, JavaScript(ES6), Aurelia',
                    Responsibilities: [
                        'Developed custom components like Image Slider, Text Flipper, Table.',
                        'Designed various Pages.',
                        'Integrated LazySizes library for Image Optimization.',
                        'Integrated html2canvas to get image of page for printing.'
                    ]
                }
            ]
        },
        {
            Description: 'Application Development Analyst at Accenture Solutions Pvt. Ltd, Bangalore (Nov. 2015- March 2018)',
            Projects: [
                {
                    Title: 'mSPortal',
                    Details: 'mSPortal is Master Portal which provides consolidated data of each user using different Microservices.',
                    Technologies: 'Angular4, HTML5, CSS3, Javascript, AngularJs',
                    Responsibilities: [
                        'Worked on Backend connectivity of the product.',
                        'Developed Accounts module using AngularJs.',
                    ]
                },
                {
                    Title: 'ODS Portal',
                    Details: 'ODS Portal is a web application designed in AngularJs, used by COX customers, which provides them the best suited cloud solution based on their requirements.',
                    Technologies: 'Angular JS, HTML5, CSS3, BootStrap',
                    Responsibilities: [
                        'Designed User Interface',
                        'Developed modules like Service Offerings, Request service, Assessment etc.',
                        'Worked on Routing of the product'
                    ]
                },
                {
                    Title: 'Webex: iPortal',
                    Details: 'Cisco users used Internal Portal to manage the information, orders and payment of the customers purchasing their Webex product.',
                    Technologies: 'Angular JS, HTML5, CSS3, Java',
                    Responsibilities: [
                        'Worked on enhancements like Role Optimization for existing product',
                        'Developed modules like Accounts, Orders using AngularJs while revamping the product'
                    ],
                    SpecialAchievements: ['Won ACE award for actively learning Future Ready Skills.']
                }
            ]
        }
    ],
    Others: {
        Gender: 'Female',
        MartialStatus: 'Unmarried',
        Languages: 'English, Hindi',
        DOB: 'Apr 15, 1994'
    }
}

export { profileData}
