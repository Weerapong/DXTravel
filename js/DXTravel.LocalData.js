!function() {
    var MS_PER_DAY = DXTravel.MS_PER_DAY,
        MS_PER_MONTH = MS_PER_DAY * 30.5,
        now = Math.round($.now() / MS_PER_DAY) * MS_PER_DAY;

    var knownPeople = {

        "dave_mendlen": {
            fbId: "",
            name: "Dave Mendlen",
            email: "davem@devexpress.com",
            imageUrl: "images/tablet-user-avatar.jpg"
        },

        "sophie_hartman": {
            fbId: "100004178139767",
            name: "Sophie Hartman",
            email: "sophie_hartman@example.com",
            imageUrl: "http://profile.ak.fbcdn.net/hprofile-ak-snc4/276338_100004178139767_77382461_q.jpg"
        },

        "ken_hartman": {
            fbId: "100004119221396",
            name: "Ken Hartman",
            email: "ken_hartman@example.com",
            imageUrl: "http://profile.ak.fbcdn.net/hprofile-ak-ash2/275668_100004119221396_1215809788_q.jpg"
        },

        "gary_rubio": {
            fbId: "100004177359911",
            name: "Gary Rubio",
            email: "gary_rubio@example.com",
            imageUrl: "http://profile.ak.fbcdn.net/hprofile-ak-ash2/186799_100004177359911_2146145528_q.jpg"
        },

        "katelyn_lopez": {
            fbId: "100004114241452",
            name: "Katelyn Lopez",
            email: "katelyn_lopez@example.com",
            imageUrl: "http://profile.ak.fbcdn.net/hprofile-ak-snc4/276062_100004114241452_1899286611_q.jpg"
        }
    };

    var appointments = [
        {
            trip_id: "ebde7e74-2929-c2c6-ec30-e869107f5e03c",
            name: "Pack bags",
            address: "Seattle",
            date: new Date(now - MS_PER_DAY * 24 / 18),
            user: knownPeople["ken_hartman"],
            pending: false
        },
        {
            trip_id: "ebde7e74-2929-c2c6-ec30-e869107f5e03c",
            name: "Arrive at New York",
            address: "John F. Kennedy International Airport, JFK Access Road, New York, NY, United States",
            date: new Date(now + MS_PER_DAY * 1.68),
            user: knownPeople["ken_hartman"],
            pending: false
        },
        {
            trip_id: "ebde7e74-2929-c2c6-ec30-e869107f5e03c",
            name: "Arrive at Dream Hotel",
            address: "Dream Hotel, West 55th Street, New York, NY, United States",
            date: new Date(now + MS_PER_DAY * 1.71),
            user: knownPeople["ken_hartman"],
            pending: false
        },
        {
            trip_id: "ebde7e74-2929-c2c6-ec30-e869107f5e03c",
            name: "Check-in to Dream Hotel",
            address: "Dream Hotel, West 55th Street, New York, NY, United States",
            date: new Date(now + MS_PER_DAY * 1.712),
            user: knownPeople["ken_hartman"],
            pending: false
        },
        {
            trip_id: "ebde7e74-2929-c2c6-ec30-e869107f5e03c",
            name: "Check-out from Dream Hotel",
            address: "Dream Hotel, West 55th Street, New York, NY, United States",
            date: new Date(now + MS_PER_DAY * 7.222),
            user: knownPeople["ken_hartman"],
            pending: false
        }
    ];

    var travelers = [
        {
            trip_id: "ebde7e74-2929-c2c6-ec30-e869107f5e03c",
            user: knownPeople["dave_mendlen"],
            owner: true
        },
        {
            trip_id: "1068cafd-4b10-5983-b1d1-a95610b18f0322e",
            user: knownPeople["dave_mendlen"],
            owner: true
        },
        {
            trip_id: "3381c96b-7387-8018-3537-82e5a9bfa2e2",
            user: knownPeople["dave_mendlen"],
            owner: true
        },
        {
            trip_id: "00c10123-7124-445f-178e-fe2ae10c99fc19",
            user: knownPeople["dave_mendlen"],
            owner: true
        }
    ];

    var trips = [
        // Past

        {
            id: "6edaad11-0984-db8e-a043-e4a561044010857",            
            location: "Bryce Canyon, UT",
            startDate: new Date(now - 48 * MS_PER_MONTH + 1 * MS_PER_DAY),
            endDate: new Date(now - 48 * MS_PER_MONTH + 9 * MS_PER_DAY)
        },

        {
            id: "fd056310-d394-cb14-8df6-219d828104a586",
            location: "Austin, TX",
            startDate: new Date(now - 35 * MS_PER_MONTH + 11 * MS_PER_DAY),
            endDate: new Date(now - 35 * MS_PER_MONTH + 25 * MS_PER_DAY)
        },

        {
            id: "3d51541d-fcf3-6e6d-df49-371d1beba76d",
            location: "Savannah, GA",
            startDate: new Date(now - 33 * MS_PER_MONTH + 5 * MS_PER_DAY),
            endDate: new Date(now - 33 * MS_PER_MONTH + 12 * MS_PER_DAY)
        },

        {
            id: "163a53bb-a29a-15b4-3a10-eda81d13cc9e5",
            location: "Northern California",
            startDate: new Date(now - 23 * MS_PER_MONTH + 2 * MS_PER_DAY),
            endDate: new Date(now - 23 * MS_PER_MONTH + 15 * MS_PER_DAY)
        },

        {
            id: "cfb7a893-a6ec-0121-05b0-6c1790953b57d",
            location: "Grand Canyon National Park",
            startDate: new Date(now - 14 * MS_PER_MONTH + 8 * MS_PER_DAY),
            endDate: new Date(now - 14 * MS_PER_MONTH + 11 * MS_PER_DAY)
        },

        {
            id: "3c49c99f-4641-6521-3105-76955475e2b34",
            location: "Palm Springs, CA",
            startDate: new Date(now - 11 * MS_PER_MONTH + 3 * MS_PER_DAY),
            endDate: new Date(now - 11 * MS_PER_MONTH + 7 * MS_PER_DAY)
        },

        {
            id: "6930bf8a-b7c1-a2f4-7c10-4dc1cde3b79ce",
            location: "Los Angeles, CA",
            startDate: new Date(now - 3 * MS_PER_MONTH + 1 * MS_PER_DAY),
            endDate: new Date(now - 3 * MS_PER_MONTH + 10 * MS_PER_DAY)
        },


        // Upcoming

        {
            id: "ebde7e74-2929-c2c6-ec30-e869107f5e03c",
            location: "New York, NY",
            startDate: new Date(now + MS_PER_DAY),
            endDate: new Date(now + MS_PER_DAY * 7),
            flights: [
                {
                    number: "UA100",
                    confirmNumber: "ERTSDF",                    
                    date: new Date(now + MS_PER_DAY * 1.52),
                    from: "SEA",
                    to: "JFK",
                    terminal: "A",
                    gate: "15",
                    seat: "37B"
                },
                {
                    number: "UA200",
                    confirmNumber: "ERTSDF",                    
                    date: new Date(now + MS_PER_DAY * 7.3),
                    from: "EWR",
                    to: "SEA",
                    terminal: "B",
                    gate: "51",
                    seat: "37B"
                }
            ]
        },
        {
            id: "1068cafd-4b10-5983-b1d1-a95610b18f0322e",
            location: "San Fransico, CA",
            startDate: new Date(now + MS_PER_MONTH + 7 * MS_PER_DAY),
            endDate: new Date(now + MS_PER_MONTH + 14 * MS_PER_DAY)
        },
        {
            id: "3381c96b-7387-8018-3537-82e5a9bfa2e2",
            location: "New York, NY",
            startDate: new Date(now + 8 * MS_PER_MONTH + 10 * MS_PER_DAY),
            endDate: new Date(now + 8 * MS_PER_MONTH + 18 * MS_PER_DAY)
        },
        {
            id: "00c10123-7124-445f-178e-fe2ae10c99fc19",
            location: "Sarasota, FL",
            startDate: new Date(now + 16 * MS_PER_MONTH + 12 * MS_PER_DAY),
            endDate: new Date(now + 16 * MS_PER_MONTH + 20 * MS_PER_DAY)
        }
    ];

    var suggestedLocations = [
        "Las Vegas, NV",
        "Fredonia, AZ",
        "Sarasota, FL"
    ];
    
    var attractions = {
        "new_york": [
            {
                name: "Manhattan Skyline",
                type: "Landmarks/ Points of Interest",
                activities: "Helicopter rides",
                reviewCount: 1689,
                address: "New York City, NY",
                imageUrl: "http://demos.devexpress.com/DXTREME/DXTravel_static/NyAttraction1.jpg",
                smallImageUrl: "http://demos.devexpress.com/DXTREME/DXTravel_static/NyAttraction1_sm.jpg",
                infoUrl: "http://www.tripadvisor.com/Attraction_Review-g60763-d267031-Reviews-Manhattan_Skyline-New_York_City_New_York.html"
            },
            {
                name: "Jersey Boys",
                type: "Performances",
                activities: "None",
                reviewCount: 1592,
                address: "245 West 52nd (between Broadway and 8th Avenue), August Wilson Theatre, New York City, NY",
                imageUrl: "http://demos.devexpress.com/DXTREME/DXTravel_static/NyAttraction2.jpg",
                smallImageUrl: "http://demos.devexpress.com/DXTREME/DXTravel_static/NyAttraction2_sm.jpg",
                infoUrl: "http://www.jerseyboysinfo.com/broadway/"
            },
            {

                name: "Frick Collection",
                type: "Art Museums",
                activities: "Arts and crafts",
                reviewCount: 939,
                address: "1 E. 70th St., Fifth Ave., New York City, NY 10021",
                imageUrl: "http://demos.devexpress.com/DXTREME/DXTravel_static/NyAttraction3.jpg",
                smallImageUrl: "http://demos.devexpress.com/DXTREME/DXTravel_static/NyAttraction3_sm.jpg",
                infoUrl: "http://www.frick.org/"
            },
            {
                name: "Metropolitan Museum of Art",
                type: "Art Museums, Museums",
                activities: "Dining",
                reviewCount: 4152,
                address: "1000 Fifth Avenue, New York City, NY 10028-0198",
                imageUrl: "http://demos.devexpress.com/DXTREME/DXTravel_static/NyAttraction4.jpg",
                smallImageUrl: "http://demos.devexpress.com/DXTREME/DXTravel_static/NyAttraction4_sm.jpg",
                infoUrl: "http://store.metmuseum.org/"
            },
            {
                name: "The Lion King at the Minskoff Theatre",
                type: "Performances",
                activities: "None",
                reviewCount: 1458,
                address: "200 W. 45th St., (at Broadway), New York City, NY 10036",
                imageUrl: "http://demos.devexpress.com/DXTREME/DXTravel_static/NyAttraction5.jpg",
                smallImageUrl: "http://demos.devexpress.com/DXTREME/DXTravel_static/NyAttraction5_sm.jpg",
                infoUrl: "http://www.lionking.com/"
            }
        ]
    };

    DXTravel.LOCAL_DATA = {
        trips: trips,
        suggestedLocations: suggestedLocations,
        attractions: attractions,
        appointments: appointments,
        travelers: travelers
    };

}();