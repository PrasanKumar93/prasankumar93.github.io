import profileImage from './images/profile_image.png';

var profileData = {
    ProfileImage: profileImage,
    LastUpdatedOn: 'Oct 1, 2018',
    Name: 'Test',
    Address: 'Designation at Company Name',

    Email: 'test@gmail.com',
    ProfileLinkedIn: 'https://in.linkedin.com/in',
    ProfileTwitter: 'https://twitter.com',
    ProfileGooglePlus: 'https://plus.google.com',
    ProfileLinkedInTitle: 'test on LinkedIn',
    ProfileTwitterTitle: '@test on Twitter',
    ProfileGooglePlusTitle: '+test on Google+',
    ProfileGmailTitle: 'email to test@gmail.com',

    Summary: [{
        Content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    }, {
        Content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    }],
    TechnicalSkills: [
      {
          Header: 'Client',
          Skills: ['ABC', 'XYZ']
      },
      {
          Header: 'Server',
          Skills: ['PQR']
      },
      {
          Header: 'Database',
          Skills: ['DEF']
      },
      {
          Header: 'Others',
          Skills: ['QRS']
      }
    ],
    Education: [{
        Course: 'B.Tech(Information Technology)',
        Year: 'XXXX',
        Institute: 'XYZ Engineering College',
        Address: 'XYZ, INDIA'
    },
    {
        Course: 'CLASS 12 (PCMC - Physics, Chemistry, Mathematics, Computers)',
        Year: 'XXXX',
        Institute: 'ABC Public School',
        Address: 'ABC, INDIA'
    },
    {
        Course: 'CLASS 10',
        Year: 'XXXX',
        Institute: 'PQR Public School',
        Address: 'PQR, INDIA'
    }],
    Experience: [
       {
           Description: 'XYZ Company(abc-xyz)',
           Projects: [
               {
                   Title: 'Project Title',
                   Details: 'Project Description',
                   Technologies: 'XYZ, PQR, LMN',
                   Responsibilities: [
                       'Worked on ABC feature.',
                   ]
               }
           ]
       },
       {
           Description: 'PQR Company (abc-xyz)',
           Projects: [
              {
                  Title: 'Project Title',
                  Details: 'Project Description',
                  Technologies: 'XYZ, PQR, LMN',
                  Responsibilities: [
                      'Worked on ABC feature.',
                  ],
                  SpecialAchievements:['Won PQR award']
              }
           ]
       }
    ],
    Others: {
        Gender: 'Female',
        MartialStatus: 'Unmarried',
        Languages: 'English, Hindi',
        DOB: 'Mon DD, YYYY'
    }
}

export { profileData}
