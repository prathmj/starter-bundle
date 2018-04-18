const TEST_API_RESPONSE = {
    "theaters": [
        {
            "id": "657ff99b-d9a5-4883-86c7-1332da863b14",
            "fandango_id": 5826,
            "legacy_id": 628,
            "aa_code": "AAORE",
            "regal_id": null,
            "cinemark_id": null,
            "chain_code": "AAALL",
            "chain_name": "AMC Theatres",
            "chain_slug": "amc-theatres",
            "name": "AMC Empire 25",
            "slug": "amc-empire-25",
            "address_one": "234 West 42nd Street",
            "city": "New York",
            "state": "NY",
            "location_slug": "new-york-ny",
            "zip": "10036",
            "country": "USA",
            "phone": "212-398-2597",
            "timezone": "EST",
            "latitude": 40.756843,
            "longitude": -73.989179,
            "screen_count": null,
            "thx": null,
            "stadium_seating": true,
            "kiosk": null,
            "game_room": null,
            "party_room": false,
            "print_at_home": true,
            "cafe": false,
            "preferred_parking": null,
            "wheelchair_accessible": true,
            "all_listening_devices": true,
            "reserved_seating": true,
            "is_referable": true,
            "active": true,
            "attributes": [
                {
                    "Code": "amcindependent",
                    "Name": "AMC independent",
                    "Description": "AMC independent is our renewed commitment to advancing independent film. Now, you can see more distinct and unconventional films at our theatres around the country. We’re bringing you more of what you want -- a diverse line-up of films that excite, encourage and engage. Over 20% of our theatres are committed to showing independent films throughout the year, including AMC-exclusive releases. We hope that you enjoy these new stories that we are bringing to the screen, and more importantly, to your local theatres."
                },
                {
                    "Code": "orderhotfoods",
                    "Name": "Hot Foods",
                    "Description": "An expanded menu of options, featuring chicken tenders, pizza, mozzarella sticks, french fries and more."
                },
                {
                    "Code": "digitalprojection",
                    "Name": "Digital Projection",
                    "Description": "This theatre features digital projection in all auditoriums."
                },
                {
                    "Code": "stadiumseating",
                    "Name": "Stadium Seating",
                    "Description": "This theatre features stadium seating in all auditoriums."
                },
                {
                    "Code": "theatrerentals",
                    "Name": "Theatre Rentals",
                    "Description": "Theatre rentals are available at this theatre. Please email your contact information to Rentals@amctheatres.com for information on pricing and availability."
                },
                {
                    "Code": "assistedlisteningdevices",
                    "Name": "Assisted Listening Devices",
                    "Description": "This theatre offers assisted listening devices. Contact the guest services desk at the theatre for more information."
                },
                {
                    "Code": "wheelchairaccess",
                    "Name": "Wheelchair Access",
                    "Description": "This theatre is wheelchair-accessible in all auditoriums."
                },
                {
                    "Code": "distractionfreeenvironment",
                    "Name": "Age Policy for R-Rated Movies After 6 p.m.",
                    "Description": "This theatre does not allow children, ages 6 and under, to attend R-rated movies after 6 p.m. For R-rated showtimes starting before 6 p.m., children ages 6 and under may only be admitted with a parent or legal guardian."
                },
                {
                    "Code": "nooutsidefoodandbeverage",
                    "Name": "No Outside Food and Beverage",
                    "Description": "Please refrain from bringing outside food and beverage items into the theatre."
                },
                {
                    "Code": "agepolicyforrratedfilms",
                    "Name": "Age Policy for R-Rated Films",
                    "Description": "Under 17 requires accompanying parent or adult guardian (age 21 or older). Guests 25 years and under must show ID.\nWe restrict children younger than 6 from attending R-Rated films after 6pm to improve the experience for everyone. To bring your children younger than 6 to R-Rated films, please visit us before 6pm."
                },
                {
                    "Code": "pricingnotice",
                    "Name": "Pricing Notice",
                    "Description": "AMC reserves the right to exercise special pricing options for unique in-theatre experiences."
                },
                {
                    "Code": "refundpolicy",
                    "Name": "Refund Policy",
                    "Description": "No refunds after printed showtime."
                },
                {
                    "Code": "militarypricingafternoon",
                    "Name": "Manhattan Military Pricing",
                    "Description": "Every day starting at noon.  Present a valid Military ID at the box office."
                },
                {
                    "Code": "specialengagements",
                    "Name": "Special Engagements",
                    "Description": "Some types of passes may be restricted for Special Engagements or New Releases and thus subject to a surcharge. Be sure to read the back of your pass for more details."
                },
                {
                    "Code": "closedcaption",
                    "Name": "Closed Caption",
                    "Description": "Closed captioning devices available at this theatre.  Contact the guest services desk at the theatre for more information."
                },
                {
                    "Code": "descriptivevideo",
                    "Name": "Audio Description",
                    "Description": "Audio Description devices available at this theatre. Contact the guest services desk at the theatre for more information."
                },
                {
                    "Code": "printathome",
                    "Name": "Mobile Ticketing",
                    "Description": "Skip the box office and go straight to the ticket drop with our mobile ticketing solution when buying tickets online."
                },
                {
                    "Code": "dolbycinemaatamcprime",
                    "Name": "Dolby Cinema at AMC",
                    "Description": "Powerful images and sound technologies combine with cutting-edge, reserved recliners to transform each show into a completely captivating cinematic event."
                },
                {
                    "Code": "seniorpricing",
                    "Name": "Senior Pricing",
                    "Description": "If you're 60 or over, save on your movie ticket any day, starting at 12pm. Just show a valid ID at the box office."
                },
                {
                    "Code": "studentpricingafternoon",
                    "Name": "Manhattan Student Pricing",
                    "Description": "Every day, starting at 12pm, show your valid student ID at the box office and save on your ticket."
                },
                {
                    "Code": "reservedseating",
                    "Name": "Reserved Seating",
                    "Description": "Select your seat when you buy your tickets online, on our mobile app or at the theatre."
                },
                {
                    "Code": "hundredplusdrinkchoices",
                    "Name": "Coca-Cola Freestyle",
                    "Description": "Select from 100+ drink choices.  Whether you're craving a classic Coca-Cola, a Sprite Peach, or a Dasani Lime for your show,  we’ve got you covered."
                },
                {
                    "Code": "featurefare",
                    "Name": "Feature Fare",
                    "Description": "We're elevating the movie menu, offering better quality and variety with new loaded hot dogs, stone-fired flatbread pizzas, gluten-free snacks, and so much more!"
                },
                {
                    "Code": "imax",
                    "Name": "IMAX at AMC",
                    "Description": "An epic battle deserves an epic viewing experience."
                },
                {
                    "Code": "reald3d",
                    "Name": "RealD 3D",
                    "Description": "Feast your eyes on the mind-blowing RealD 3D experience at AMC. Using a new digital approach, you can watch movies with amazing depth and clarity, without sacrificing comfort."
                },
                {
                    "Code": "reclinerseating",
                    "Name": "AMC Signature Recliners",
                    "Description": "This auditorium has recliner seats."
                }
            ],
            "distance": 723.55964700935,
            "events": [],
            "movies": [
                {
                    "id": "5396a04c-c2e8-4943-bef7-4ce11fd51d2a",
                    "legacy_id": 20090262,
                    "alt_film_id": 168977,
                    "fandango_id": null,
                    "title": "Rampage",
                    "slug": "rampage",
                    "description": "Primatologist Davis Okoye shares an unshakable bond with George, an extraordinarily intelligent, silverback gorilla that's been in his care since birth. When a rogue genetic experiment goes wrong, it causes George, a wolf and a reptile to grow to a monstrous size. As the mutated beasts embark on a path of destruction, Okoye teams up with a discredited genetic engineer and the military to secure an antidote and prevent a global catastrophe.",
                    "short_description": "Three gigantic, mutated beasts embark on a path of destruction when a genetic experiment goes wrong.",
                    "run_time": 6420,
                    "mpaa_rating": "PG-13",
                    "production_companies": "ASAP Entertainment, New Line Cinema, Aspect, Wrigley Pictures",
                    "weekend_box_office": 34500000,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-04-13T00:00:00",
                    "canonical_release": "2018-04-13T00:00:00",
                    "display_release": null,
                    "screenings_count": 65828,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2016-11-12T15:00:05",
                    "updated_at": "2018-04-14T15:00:08",
                    "releases": {
                        "wide": [
                            {
                                "id": "2fd0effd-d2ff-406c-b86d-86e4c685bcb2",
                                "release_date": "2018-04-13",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Warner Bros. Pictures"
                            }
                        ],
                        "original": [
                            {
                                "id": "45ccdafd-1b20-4ed0-9bfb-0992814115e9",
                                "release_date": "2018-04-13",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Warner Bros. Pictures"
                            }
                        ],
                        "year": [
                            {
                                "id": "a4b9e531-dabb-434a-965d-8169fb106a0e",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "1962c6d9-42b0-4588-8a0c-3dd4872c2615",
                            "url": "http://www.metacritic.com/movie/rampage?ftag=MCD-06-10aaa1c",
                            "meta_score": 45,
                            "meta_count": 43,
                            "user_score": 6.5,
                            "user_count": 44,
                            "season": null,
                            "date": "2018-04-13"
                        }
                    ],
                    "attachments": [
                        {
                            "id": "c75c39e3-5e10-45ca-8ba7-23e2590d5d55",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/mv5botkzntg5nji5mv5bml5banbnxkftztgwmzm4njkxndm_1510879995.v1sy1000cr006741000al.jpg",
                            "category": "poster"
                        }
                    ],
                    "images": [
                        {
                            "id": "0a69be6b-51bc-4d63-b9c6-51efe1da6ee6",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/13499890/p13499890_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Rampage (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "1cc60401-e52f-49f3-b4bf-d50752b8e67b",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/13499890/p13499890_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Rampage (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "2593b05f-cf5b-4b1d-a512-8e174f874cce",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/13499890/p13499890_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Rampage (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "3183883c-75b9-4221-a6b1-669e04c83729",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/13499890/p13499890_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Rampage (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "5882de5a-1f17-4ede-8153-dd6fb2e4d5f2",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/13499890/p13499890_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Rampage (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "92bb48c6-cd89-4f00-98d1-c0c8cc71d2da",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/13499890/p13499890_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Rampage (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "a9676558-8a1b-46a5-92a6-ae3021cb120d",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/13499890/p13499890_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Rampage (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "b992c058-b5cd-4920-961a-65b32c512123",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949240",
                            "screening": "2018-04-17T10:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": "reclinerseating",
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "5e53ef48-aff4-4d07-93be-f55e5505e47e",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949137",
                            "screening": "2018-04-17T10:15:00",
                            "3d": null,
                            "imax": "imax",
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "51844703-77ac-4ff8-ac34-0b276d202280",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377615",
                            "screening": "2018-04-17T10:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "5b3135c8-67fe-47b6-971d-1acc95ba02fd",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949241",
                            "screening": "2018-04-17T12:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": "reclinerseating",
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "6a476f3c-7d94-484f-a7a5-fa0f94ea4e9e",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377616",
                            "screening": "2018-04-17T13:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "de5e016b-0b1e-4fdb-8bef-74b192981acf",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949242",
                            "screening": "2018-04-17T15:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": "reclinerseating",
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "48898402-5348-45dd-bff0-7f6ac4880b74",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377605",
                            "screening": "2018-04-17T16:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "3460d848-5f98-4689-bd13-3ea938e0d357",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949243",
                            "screening": "2018-04-17T18:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": "reclinerseating",
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "75cf26fb-8997-478a-b6d8-6f365eff8cc4",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377606",
                            "screening": "2018-04-17T19:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "cb808b30-fe30-4c11-b517-6af5d0ea6428",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949138",
                            "screening": "2018-04-17T19:45:00",
                            "3d": null,
                            "imax": "imax",
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "468813f6-182b-4142-b594-742df30a038c",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949244",
                            "screening": "2018-04-17T21:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": "reclinerseating",
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "2031533b-c8f7-41b3-967c-1adacccd058c",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377607",
                            "screening": "2018-04-17T21:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "77eb4daf-6074-40d8-8294-7858f501ceb9",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949186",
                            "screening": "2018-04-17T22:15:00",
                            "3d": "reald3d",
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "9004b77e-b589-4522-9118-90b43ca1646d",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949139",
                            "screening": "2018-04-17T22:30:00",
                            "3d": null,
                            "imax": "imax",
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "41okXeeHXze1IAAfqMCjX2",
                    "url_id": 20090262,
                    "has_trailers": true
                },
                {
                    "id": "a11a044a-be37-422b-a6c0-8dbbabf8dab9",
                    "legacy_id": null,
                    "alt_film_id": 179044,
                    "fandango_id": null,
                    "title": "A Quiet Place",
                    "slug": "a-quiet-place",
                    "description": "In upstate New York, a couple and their two children must remain silent in their isolated farmhouse to avoid mysterious creatures that use sound to hunt their prey. Using sign language and eye contact to communicate, the family members must rely on one another -- and their wits -- to live to see the next day.",
                    "short_description": "A family must remain silent in its farmhouse to avoid mysterious creatures that use sound to hunt.",
                    "run_time": 5700,
                    "mpaa_rating": "PG-13",
                    "production_companies": "Paramount Pictures, Sunday Night, Platinum Dunes",
                    "weekend_box_office": 32600000,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-04-06T00:00:00",
                    "canonical_release": "2018-04-06T00:00:00",
                    "display_release": null,
                    "screenings_count": 63960,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2017-10-10T15:00:18",
                    "updated_at": "2018-04-11T15:55:10",
                    "releases": {
                        "original": [
                            {
                                "id": "190c0d76-5620-40fb-8b2b-b55eb5832895",
                                "release_date": "2018-04-06",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Paramount Pictures"
                            }
                        ],
                        "screening": [
                            {
                                "id": "31dfa730-8d2e-4524-96b9-dde13934a889",
                                "release_date": "2018-03-09",
                                "type": "screening",
                                "country": "USA",
                                "distributors": null
                            }
                        ],
                        "year": [
                            {
                                "id": "737b842a-5a68-47e9-b058-9948363fa7e1",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ],
                        "wide": [
                            {
                                "id": "7d2d349f-3ebf-4984-be37-4f207dd5e96c",
                                "release_date": "2018-04-06",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Paramount Pictures"
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "a14d4ea8-3438-4e1b-bd9d-7af8bd557ef5",
                            "url": "http://www.metacritic.com/movie/a-quiet-place?ftag=MCD-06-10aaa1c",
                            "meta_score": 82,
                            "meta_count": 54,
                            "user_score": 7.9,
                            "user_count": 272,
                            "season": null,
                            "date": "2018-04-06"
                        }
                    ],
                    "attachments": [
                        {
                            "id": "809fff21-9e80-47a4-92f1-11fd6cc3b3e9",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/mv5bmji0mdmzntq0m15bml5banbnxkftztgwmtm5nzm3ndm_1518548895.v1sy1000cr006741000al.jpg",
                            "category": "poster"
                        }
                    ],
                    "images": [
                        {
                            "id": "36aef0e9-b8ff-4811-ae33-f981212d1e9d",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/14660087/p14660087_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "A Quiet Place (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "0b4e6012-76c3-4393-b32e-1885299f0f8e",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949287",
                            "screening": "2018-04-17T10:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "b349b013-128b-4427-8715-4471f5d45756",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949224",
                            "screening": "2018-04-17T11:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "82040b44-0dad-4316-b16c-29aed6fa9ae2",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949288",
                            "screening": "2018-04-17T13:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "eb62676f-a062-4b5b-8d1f-081a8087d40c",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949225",
                            "screening": "2018-04-17T14:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "d03d2dc0-b062-4d74-9ae9-bcaf670a8c17",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949289",
                            "screening": "2018-04-17T15:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "278cb666-e28b-4629-9f41-fe7eed1bfd90",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949226",
                            "screening": "2018-04-17T16:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "40f4522a-a374-40cf-8117-0f1dc506cd67",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949290",
                            "screening": "2018-04-17T18:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "102ff7aa-110c-402c-9f79-752b11e9d2f0",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377571",
                            "screening": "2018-04-17T19:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "3bd1b1c4-49c3-44d9-b857-09cf80cb8a72",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949291",
                            "screening": "2018-04-17T20:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "9d39c118-ee4d-4bed-81c9-6f931d0d5249",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377572",
                            "screening": "2018-04-17T21:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "3fc03394-44c1-474a-bded-660857f3fe3a",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949292",
                            "screening": "2018-04-17T23:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "fc5nXexahuoi3aPWHZezt4",
                    "url_id": "fc5nXexahuoi3aPWHZezt4",
                    "has_trailers": true
                },
                {
                    "id": "50e07773-3e51-4894-acf2-1f110e3d4be7",
                    "legacy_id": null,
                    "alt_film_id": 179042,
                    "fandango_id": null,
                    "title": "Blockers",
                    "slug": "blockers",
                    "description": "Julie, Kayla and Sam are three high school seniors who make a pact to lose their virginity on prom night. Lisa, Mitchell and Hunter are three overprotective parents who flip out when they find out about their daughters' plans. They soon join forces for a wild and chaotic quest to stop the girls from sealing the deal -- no matter what the cost.",
                    "short_description": "Three parents try to prevent their respective daughters from losing their virginity on prom night.",
                    "run_time": 6120,
                    "mpaa_rating": "R",
                    "production_companies": "DMG Entertainment, Good Universe, Universal Pictures",
                    "weekend_box_office": 10295000,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-04-06T00:00:00",
                    "canonical_release": "2018-04-06T00:00:00",
                    "display_release": null,
                    "screenings_count": 44752,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2017-10-10T15:00:18",
                    "updated_at": "2018-04-17T15:00:10",
                    "releases": {
                        "screening": [
                            {
                                "id": "1a5d9884-2f93-4979-a71c-fb14294873b4",
                                "release_date": "2018-03-10",
                                "type": "screening",
                                "country": "USA",
                                "distributors": null
                            }
                        ],
                        "wide": [
                            {
                                "id": "1e0ec57e-5d00-4789-9dcb-a7d26bec4d39",
                                "release_date": "2018-04-06",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Universal Pictures"
                            }
                        ],
                        "year": [
                            {
                                "id": "a5a91355-54de-4af3-a1b8-a5589acf5a4a",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ],
                        "original": [
                            {
                                "id": "d7252161-c684-4e5d-bdec-b61bd6168e5e",
                                "release_date": "2018-04-06",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Universal Pictures"
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "4f1c53ef-7e16-4f5a-9267-83b7e7770c9a",
                            "url": "http://www.metacritic.com/movie/blockers?ftag=MCD-06-10aaa1c",
                            "meta_score": 69,
                            "meta_count": 45,
                            "user_score": 6.5,
                            "user_count": 33,
                            "season": null,
                            "date": "2018-04-06"
                        }
                    ],
                    "attachments": [
                        {
                            "id": "9eb51032-cd6e-41f9-b5dc-d01f96097f25",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/blockers-124156_1519158428.jpg",
                            "category": "poster"
                        }
                    ],
                    "images": [
                        {
                            "id": "1ae8d410-b879-47cf-9924-94ee371b31dd",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/14659754/p14659754_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Blockers (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "e0e7e5f4-b8be-46aa-a765-e15b9b3993d6",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/14659754/p14659754_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Blockers (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "33980fa2-e74d-4147-9e51-7f5d631c3eff",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949455",
                            "screening": "2018-04-17T10:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "2c2bb81f-cd3b-4ad5-bd67-a002b423f771",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949257",
                            "screening": "2018-04-17T12:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "91b3dbed-db22-4a0a-a3f6-f19e35c0d611",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949377",
                            "screening": "2018-04-17T13:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "72fe23e2-694c-4992-ba0c-8732dfaeb70b",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949258",
                            "screening": "2018-04-17T15:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "08c6a197-1af9-4a80-bb78-2d94419297c5",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949456",
                            "screening": "2018-04-17T16:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "36dd55ff-9d16-4c31-a5e7-e8caeb221e1b",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949378",
                            "screening": "2018-04-17T19:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "875fc2c6-f231-4ace-a675-f1fbfb8f133f",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949259",
                            "screening": "2018-04-17T21:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "592ef333-c9e4-4189-85f8-ecd3550c727d",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949457",
                            "screening": "2018-04-17T22:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "fpFT54d1brNqer4vlzxbS2",
                    "url_id": "fpFT54d1brNqer4vlzxbS2",
                    "has_trailers": true
                },
                {
                    "id": "f3185271-cf76-4f11-80a7-6ac4ad50d291",
                    "legacy_id": null,
                    "alt_film_id": 180899,
                    "fandango_id": null,
                    "title": "Blumhouse's Truth or Dare",
                    "slug": "blumhouses-truth-or-dare",
                    "description": "Olivia, Lucas and a group of their college friends travel to Mexico for one last getaway before graduation. While there, a stranger convinces one of the students to play a seemingly harmless game of truth or dare with the others. Once the game starts, it awakens something evil -- a demon which forces the friends to share dark secrets and confront their deepest fears. The rules are simple but wicked -- tell the truth or die, do the dare or die, and if you stop playing, you die.",
                    "short_description": "A seemingly harmless game of truth or dare turns deadly for a group of college friends in Mexico.",
                    "run_time": 6000,
                    "mpaa_rating": "PG-13",
                    "production_companies": "Universal Pictures, Blumhouse Productions",
                    "weekend_box_office": 19080000,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-04-13T00:00:00",
                    "canonical_release": "2018-04-13T00:00:00",
                    "display_release": "2018-04-13",
                    "screenings_count": 43389,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2017-11-14T15:40:17",
                    "updated_at": "2018-04-17T15:00:10",
                    "releases": {
                        "original": [
                            {
                                "id": "15c9f516-96c8-4a74-9725-e73890112767",
                                "release_date": "2018-04-13",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Universal Pictures"
                            }
                        ],
                        "wide": [
                            {
                                "id": "af298f1d-da95-44e3-aefa-8387007c9e1b",
                                "release_date": "2018-04-13",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Universal Pictures"
                            }
                        ],
                        "year": [
                            {
                                "id": "eb7b73a9-85fd-49f5-a85c-4d9b26b0f4f5",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "f221e4b2-3599-428c-a45e-8d3e8f9d264e",
                            "url": "http://www.metacritic.com/movie/blumhouses-truth-or-dare?ftag=MCD-06-10aaa1c",
                            "meta_score": 36,
                            "meta_count": 30,
                            "user_score": 4.7,
                            "user_count": 15,
                            "season": null,
                            "date": "2018-04-13"
                        }
                    ],
                    "attachments": [],
                    "images": [
                        {
                            "id": "4e8979b5-7344-46ea-8c02-e9aaa2970be0",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/14814469/p14814469_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Blumhouse's Truth or Dare (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "1b5bde66-2634-4d4c-9873-5947e4f37056",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377502",
                            "screening": "2018-04-17T10:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "14670819-2bfc-415b-823f-63e84aa0cb6c",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949209",
                            "screening": "2018-04-17T11:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "1b6812e7-ca42-4af1-a456-76336aee82f1",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377503",
                            "screening": "2018-04-17T12:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "e9ad0985-fddf-44fe-8f07-31052f286c85",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949210",
                            "screening": "2018-04-17T13:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "501c1fb5-85fa-4724-9120-5222817970d5",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377504",
                            "screening": "2018-04-17T15:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "7479644b-3d02-4296-a5cd-fac94b7a4e14",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949211",
                            "screening": "2018-04-17T16:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "219e03d5-9aaa-4084-bad0-e7ea9114b29b",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377505",
                            "screening": "2018-04-17T17:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "d29dec83-9d19-490a-904d-7d73a516975f",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949351",
                            "screening": "2018-04-17T18:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "ed1b5151-a0b9-499f-bfb6-1f0379918536",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377506",
                            "screening": "2018-04-17T20:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "53411b62-dd53-4e5d-8f99-e0c311034456",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949352",
                            "screening": "2018-04-17T21:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "9257ea1a-d824-4609-b2e7-90c055f35d72",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377495",
                            "screening": "2018-04-17T22:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "Zxrwixjj2v2lrfFYYXFiO7",
                    "url_id": "Zxrwixjj2v2lrfFYYXFiO7",
                    "has_trailers": false
                },
                {
                    "id": "7613189c-a4c6-4d01-b7af-e504282e20cf",
                    "legacy_id": 20082472,
                    "alt_film_id": 161783,
                    "fandango_id": null,
                    "title": "Ready Player One",
                    "slug": "ready-player-one",
                    "description": "In 2045, the planet is on the brink of chaos and collapse, but people find salvation in the OASIS, an expansive virtual reality universe created by James Halliday. When Halliday dies, he promises his immense fortune to the first person to discover a digital Easter egg that's hidden somewhere in the OASIS. When young Wade Watts joins the contest, he finds himself becoming an unlikely hero in a reality-bending treasure hunt through a fantastical world of mystery, discovery and danger.",
                    "short_description": "A teen searches for a hidden treasure in an expansive virtual reality universe in 2045.",
                    "run_time": 8400,
                    "mpaa_rating": "PG-13",
                    "production_companies": "Reliance Entertainment, De Line Pictures, Village Roadshow Pictures, Amblin Entertainment, Warner Bros. Pictures",
                    "weekend_box_office": 11205000,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-03-29T00:00:00",
                    "canonical_release": "2018-03-29T00:00:00",
                    "display_release": null,
                    "screenings_count": 38321,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2016-09-26T16:38:46",
                    "updated_at": "2018-04-17T15:00:10",
                    "releases": {
                        "wide": [
                            {
                                "id": "48a30b32-d1e0-409c-bab5-8f2e6ba54824",
                                "release_date": "2018-03-29",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Warner Bros. Pictures"
                            }
                        ],
                        "screening": [
                            {
                                "id": "512b0dd0-85b5-4ab7-81f9-961c9c8f3755",
                                "release_date": "2018-03-11",
                                "type": "screening",
                                "country": "USA",
                                "distributors": null
                            }
                        ],
                        "original": [
                            {
                                "id": "5cfa6ec1-5435-4667-bb04-6b9e68dc0039",
                                "release_date": "2018-03-29",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Warner Bros. Pictures"
                            }
                        ],
                        "year": [
                            {
                                "id": "a36a67d7-6d6a-464b-ab94-1b0cdaafb50a",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "da01431e-899e-482d-8d6a-a2f717967f2c",
                            "url": "http://www.metacritic.com/movie/ready-player-one?ftag=MCD-06-10aaa1c",
                            "meta_score": 64,
                            "meta_count": 55,
                            "user_score": 7.6,
                            "user_count": 561,
                            "season": null,
                            "date": "2018-03-29"
                        }
                    ],
                    "attachments": [
                        {
                            "id": "7e00442e-f50d-4290-a9d5-5dfefeac16b0",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/rpomainvertdom2764x4096master_1518548823.jpg",
                            "category": "poster"
                        }
                    ],
                    "images": [
                        {
                            "id": "0551a108-cf9d-4d40-87a3-4a5f0752af09",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/12806300/p12806300_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Ready Player One (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "6fe5cd0e-a1b6-4ec6-9db2-b88e1df5f336",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/12806300/p12806300_p_v7_ab.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Ready Player One (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "756600f6-4255-454d-981a-9a96654889ba",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/12806300/p12806300_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Ready Player One (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "96c2c204-e906-497d-972e-d8a7e99b8df7",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/12806300/p12806300_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Ready Player One (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "c7d26512-ead7-4bc6-ace6-eaa55893bffc",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/12806300/p12806300_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Ready Player One (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "d6343240-00f5-451b-b685-6a14823330d5",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/12806300/p12806300_p_v7_ab.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Ready Player One (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "e8d8257a-f716-4d13-b5df-89e5fae177ed",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/12806300/p12806300_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Ready Player One (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "a4f9d8e7-5f42-4f4f-9505-d9feb4e68aee",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949389",
                            "screening": "2018-04-17T11:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "606fc7ca-3668-4d23-a304-2c6b8d5a1f22",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949140",
                            "screening": "2018-04-17T13:15:00",
                            "3d": "imax3d",
                            "imax": "imax3d",
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "1e2310ef-1d5b-4acb-a450-de612246d02a",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949360",
                            "screening": "2018-04-17T14:00:00",
                            "3d": "reald3d",
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "a5022281-6a47-489b-823e-49b6c32fce79",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949141",
                            "screening": "2018-04-17T16:30:00",
                            "3d": "imax3d",
                            "imax": "imax3d",
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "fd1239e4-9618-48ed-adc3-4f417be22883",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949393",
                            "screening": "2018-04-17T17:00:00",
                            "3d": "reald3d",
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "0ae57c6b-f46c-4ea5-9a14-b662e20bd4c2",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949171",
                            "screening": "2018-04-17T18:30:00",
                            "3d": "reald3d",
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "9fdfbc5b-af51-4db2-aeee-48216ac8ff5c",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949361",
                            "screening": "2018-04-17T20:00:00",
                            "3d": "reald3d",
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "b0b935ff-b39e-425d-8bf2-3fe42ab3f447",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949199",
                            "screening": "2018-04-17T21:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "35484592-9bb4-45d6-8e55-0224981fedb5",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949390",
                            "screening": "2018-04-17T23:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "9fmJXPjjAWFNqMH91wona3",
                    "url_id": 20082472,
                    "has_trailers": true
                },
                {
                    "id": "586e0655-956f-439e-98e1-a82b033846be",
                    "legacy_id": null,
                    "alt_film_id": 178324,
                    "fandango_id": null,
                    "title": "Isle of Dogs",
                    "slug": "isle-of-dogs",
                    "description": "When, by executive decree, all the canine pets of Megasaki City are exiled to a vast garbage-dump called Trash Island, 12-year-old Atari sets off alone in a miniature Junior-Turbo Prop and flies across the river in search of his bodyguard-dog, Spots. There, with the assistance of a pack of newly-found mongrel friends, he begins an epic journey that will decide the fate and future of the entire Prefecture.",
                    "short_description": "Banished dogs try to help a 12-year-old boy find his beloved pet on an island that's a garbage dump.",
                    "run_time": 6060,
                    "mpaa_rating": "PG-13",
                    "production_companies": "American Empirical Pictures, Studio Babelsberg",
                    "weekend_box_office": 5000000,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-04-06T00:00:00",
                    "canonical_release": "2018-03-23T00:00:00",
                    "display_release": null,
                    "screenings_count": 26819,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2017-09-14T17:41:02",
                    "updated_at": "2018-04-14T15:00:08",
                    "releases": {
                        "expanded": [
                            {
                                "id": "1b411141-d837-4829-bff9-7c32e2a267fb",
                                "release_date": "2018-03-28",
                                "type": "expanded",
                                "country": "USA",
                                "distributors": "Fox Searchlight"
                            }
                        ],
                        "year": [
                            {
                                "id": "1bcf3da2-7aba-4619-8267-1b8452b4285b",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ],
                        "screening": [
                            {
                                "id": "2be573bc-e8f4-4a7e-bb02-e17a8121fccc",
                                "release_date": "2018-02-15",
                                "type": "screening",
                                "country": "DEU",
                                "distributors": null
                            }
                        ],
                        "original": [
                            {
                                "id": "6aed537d-d30e-4f8e-981a-6643173e13e3",
                                "release_date": "2018-03-23",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Fox Searchlight"
                            }
                        ],
                        "limited": [
                            {
                                "id": "967c3fa0-d568-4a3e-b7e6-ae715e06aa06",
                                "release_date": "2018-03-23",
                                "type": "limited",
                                "country": "USA",
                                "distributors": "Fox Searchlight"
                            }
                        ],
                        "wide": [
                            {
                                "id": "eb754728-f283-484f-a75a-eb1c50ca9dbf",
                                "release_date": "2018-04-06",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Fox Searchlight"
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "29db47b8-23de-4d1a-b725-ee52b1693dab",
                            "url": "http://www.metacritic.com/movie/isle-of-dogs?ftag=MCD-06-10aaa1c",
                            "meta_score": 82,
                            "meta_count": 54,
                            "user_score": 7.9,
                            "user_count": 79,
                            "season": null,
                            "date": "2018-03-23"
                        }
                    ],
                    "attachments": [],
                    "images": [
                        {
                            "id": "25ee3155-4b66-4c00-adc4-3732b97af9f5",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/14551155/p14551155_p_v7_ab.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Isle of Dogs (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "51a576e9-1e1c-4075-a2ad-4c448ce960f9",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/14551155/p14551155_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Isle of Dogs (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "ef46730b-b914-4208-a1f3-e02174e360d2",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949305",
                            "screening": "2018-04-17T10:20:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "86f98d55-e3bc-47a7-afde-14e6bf3a4b6e",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949306",
                            "screening": "2018-04-17T12:55:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "fa28680e-3324-4fb6-88d1-d81fe2464f6d",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949307",
                            "screening": "2018-04-17T15:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "1f7ce17b-d3c7-4458-8026-15ecd9ef765c",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949308",
                            "screening": "2018-04-17T18:05:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "5c20257d-2e9e-4475-bc57-c02d5c67c634",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949309",
                            "screening": "2018-04-17T20:40:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "3c6a777e-e168-4fab-8c07-548079d3eaa2",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949310",
                            "screening": "2018-04-17T23:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "WDIeH5qcwDWbD4AwJabrg2",
                    "url_id": "WDIeH5qcwDWbD4AwJabrg2",
                    "has_trailers": false
                },
                {
                    "id": "6d5aea60-8214-48d1-b0f1-af3bde7d30a4",
                    "legacy_id": 20083572,
                    "alt_film_id": 162611,
                    "fandango_id": null,
                    "title": "Black Panther",
                    "slug": "black-panther",
                    "description": "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
                    "short_description": "Black Panther must save his nation and the rest of the world from a powerful old enemy.",
                    "run_time": 8040,
                    "mpaa_rating": "PG-13",
                    "production_companies": "Walt Disney Pictures",
                    "weekend_box_office": 5342000,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-02-16T00:00:00",
                    "canonical_release": "2018-02-16T00:00:00",
                    "display_release": null,
                    "screenings_count": 22755,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2016-09-26T16:39:02",
                    "updated_at": "2018-04-13T16:05:10",
                    "releases": {
                        "year": [
                            {
                                "id": "137a8fb4-b96a-4503-81a4-0e1ced9a4061",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ],
                        "original": [
                            {
                                "id": "28b06fd8-9b32-4422-86a0-05c7a608357f",
                                "release_date": "2018-02-16",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Walt Disney"
                            }
                        ],
                        "wide": [
                            {
                                "id": "49c303e7-5801-44d1-a4b6-f60f4169d0bc",
                                "release_date": "2018-02-16",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Walt Disney"
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "ef84a50e-cce5-48ab-801c-2b25ae41b168",
                            "url": "http://www.metacritic.com/movie/black-panther?ftag=MCD-06-10aaa1c",
                            "meta_score": 88,
                            "meta_count": 55,
                            "user_score": 6.8,
                            "user_count": 1762,
                            "season": null,
                            "date": "2018-02-16"
                        }
                    ],
                    "attachments": [
                        {
                            "id": "026b2d77-6b66-40bc-8b3d-06a3ede1ba16",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/blackpantherpostersm_1500777730.jpg",
                            "category": "poster"
                        }
                    ],
                    "images": [
                        {
                            "id": "172b2932-6105-478d-9004-169b4c95cef6",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/12878741/p12878741_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Black Panther (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "6deec285-3037-40fa-9a48-2126decc5ed1",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/12878741/p12878741_p_v7_ae.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Black Panther (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "71772bed-1ddb-4207-8c26-e6ea00454f77",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/12878741/p12878741_p_v7_ac.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Black Panther: An IMAX 3D Experience (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "7c6e5737-61c3-4937-ae14-df0e34b5da69",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/12878741/p12878741_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Black Panther (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "8a7af463-d423-428a-9072-e4a6c4cb46e8",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/12878741/p12878741_p_v7_ae.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Black Panther (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "98db0792-baf5-4b9f-b60d-863790a605c3",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/12878741/p12878741_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Black Panther (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "9f6f2d19-1f70-43fe-a006-b70fe6911cca",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/12878741/p12878741_p_v7_ad.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Black Panther 3D (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "ae56175e-2bb1-491a-ac76-88a2e98ed867",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/12878741/p12878741_p_v7_ac.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Black Panther: An IMAX 3D Experience (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "af141983-4031-4468-9e6e-bdb20e8537f4",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/12878741/p12878741_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Black Panther (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "b5b2e326-46d8-47ef-9e78-155deaa20d63",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/12878741/p12878741_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Black Panther (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "b807a342-1e24-40d8-a7e0-6ae8bfe55f69",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/12878741/p12878741_p_v7_ad.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Black Panther 3D (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "c9c8dc17-318d-4643-ae66-d54e2b2d01c6",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/12878741/p12878741_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Black Panther (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "6e37d760-b5bb-4576-bf8c-79fafbdb0fa3",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949271",
                            "screening": "2018-04-17T10:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "1616a5a2-ba7b-4bbc-b761-6d8aab80c8ff",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949337",
                            "screening": "2018-04-17T12:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "b741e429-0665-4ea1-9fb8-130aa3e40748",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949338",
                            "screening": "2018-04-17T15:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "37d793ce-4af2-476c-b8a1-a6aba3f40368",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949260",
                            "screening": "2018-04-17T18:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "08fe1219-904a-42aa-b19d-9e30ca053aa9",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949339",
                            "screening": "2018-04-17T22:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "IL38jlh62Sjy5XF0X9iLK3",
                    "url_id": 20083572,
                    "has_trailers": true
                },
                {
                    "id": "d4d98474-ef45-4099-bb28-09ba5b943d7a",
                    "legacy_id": null,
                    "alt_film_id": 184247,
                    "fandango_id": null,
                    "title": "Sgt. Stubby: An American Hero",
                    "slug": "sgt-stubby-an-american-hero",
                    "description": "With World War I looming, Robert Conroy, a young Army private, adopts a stray, stump-tailed terrier. Conroy names his new friend Stubby and gives him a home, a family, and a chance to embark on the adventure that would define a century. The two quickly find themselves in the trenches of France and on the path to history. French soldier Gaston Baptiste befriends the man and dog and accompanies them along their epic journey through harsh conditions and incredible acts of courage.",
                    "short_description": "A stray dog is rescued off the streets by a soldier and goes on to become a hero of World War I.",
                    "run_time": 5100,
                    "mpaa_rating": "PG",
                    "production_companies": null,
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-04-13T00:00:00",
                    "canonical_release": "2018-04-13T00:00:00",
                    "display_release": null,
                    "screenings_count": 18796,
                    "description_updated": null,
                    "has_images": false,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": false,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2018-03-13T15:00:12",
                    "updated_at": "2018-04-14T15:00:08",
                    "releases": {
                        "original": [
                            {
                                "id": "21e8c606-1618-4a0c-8c1e-6368e95a69dc",
                                "release_date": "2018-04-13",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Fun Academy Motion Pictures"
                            }
                        ],
                        "year": [
                            {
                                "id": "9ca4e9bf-f0be-4065-a07b-622473b8b704",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ],
                        "wide": [
                            {
                                "id": "a2f01e60-fc3a-4f12-bd09-18cecba7a221",
                                "release_date": "2018-04-13",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Fun Academy Motion Pictures"
                            }
                        ]
                    },
                    "scores": [],
                    "attachments": [],
                    "images": [],
                    "showtimes": [
                        {
                            "id": "56169410-cb3a-447e-8f88-51fbccb3dbdc",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377579",
                            "screening": "2018-04-17T10:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "2eb9b6c0-d1ee-49c9-8769-ede831d793dd",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377580",
                            "screening": "2018-04-17T12:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "8428e773-9527-4946-8ea6-069023c709ae",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377569",
                            "screening": "2018-04-17T14:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "e21bb6cf-0875-4caf-a357-3156d5cb8c8f",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66377570",
                            "screening": "2018-04-17T16:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "5394949f-7d9f-42fe-99bc-984a1ebca2db",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949185",
                            "screening": "2018-04-17T19:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "EirGTffJwCTl47AdgImdT6",
                    "url_id": "EirGTffJwCTl47AdgImdT6",
                    "has_trailers": false
                },
                {
                    "id": "5421375b-cd4c-40d2-943b-c3fd3b1b74aa",
                    "legacy_id": null,
                    "alt_film_id": 178208,
                    "fandango_id": null,
                    "title": "Chappaquiddick",
                    "slug": "chappaquiddick",
                    "description": "On July 18, 1969, Sen. Ted Kennedy drives his car off of a bridge on Massachusetts' Chappaquiddick Island. The accident results in the death of passenger Mary Jo Kopechne, a 28-year-old campaign strategist who worked for Kennedy. The ongoing investigation into the mysterious and scandalous events forever alters his political legacy -- and ultimately changes the course of presidential history.",
                    "short_description": "Scandal surrounds Sen. Ted Kennedy after a car accident kills his passenger Mary Jo Kopechne.",
                    "run_time": 6060,
                    "mpaa_rating": "PG-13",
                    "production_companies": "DMG Entertainment, Apex Entertainment",
                    "weekend_box_office": 3025000,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-04-06T00:00:00",
                    "canonical_release": "2018-04-06T00:00:00",
                    "display_release": null,
                    "screenings_count": 18281,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2017-09-20T15:45:12",
                    "updated_at": "2018-04-17T15:00:10",
                    "releases": {
                        "screening": [
                            {
                                "id": "60aa17de-e182-493b-93e2-6e347e8a2d06",
                                "release_date": "2017-09-10",
                                "type": "screening",
                                "country": "CAN",
                                "distributors": null
                            }
                        ],
                        "year": [
                            {
                                "id": "81dda16d-590f-42ed-b980-1634f606dfe7",
                                "release_date": "2017",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ],
                        "wide": [
                            {
                                "id": "9b984b8f-d094-4268-8823-0cebe07ea30b",
                                "release_date": "2018-04-06",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Entertainment Studios Motion Pictures"
                            }
                        ],
                        "original": [
                            {
                                "id": "ae88a9d2-04fe-4c01-8418-e6bddfe8866e",
                                "release_date": "2018-04-06",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Entertainment Studios Motion Pictures"
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "4e3fbcb9-af74-4191-859f-b55a30cec847",
                            "url": "http://www.metacritic.com/movie/chappaquiddick?ftag=MCD-06-10aaa1c",
                            "meta_score": 67,
                            "meta_count": 32,
                            "user_score": 7.9,
                            "user_count": 20,
                            "season": null,
                            "date": "2018-04-06"
                        }
                    ],
                    "attachments": [],
                    "images": [
                        {
                            "id": "a3192ca6-0eff-4d6b-b327-9ffe6a7b1e2c",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/14580275/p14580275_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Chappaquiddick (2017)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "af6c62d8-a199-4ef4-9d07-48bfa006f9e4",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/14580275/p14580275_p_v7_ac.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Chappaquiddick (2017)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "fd15caed-8a98-4b23-bfb4-a6cd387160f2",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949322",
                            "screening": "2018-04-17T10:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "ada00db0-ea85-4e26-bb59-674b823136c7",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949391",
                            "screening": "2018-04-17T14:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "34e5407e-e999-48fa-a183-118fdf51b8b5",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949362",
                            "screening": "2018-04-17T17:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "ce2c1d81-7794-441d-97d4-254a8e445e87",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949392",
                            "screening": "2018-04-17T20:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "544735d5-54a1-4cac-9ab9-9441a891535c",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949363",
                            "screening": "2018-04-17T23:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "mX9DKCWuFqpKDcAroBXkY2",
                    "url_id": "mX9DKCWuFqpKDcAroBXkY2",
                    "has_trailers": true
                },
                {
                    "id": "7db164ef-3072-4261-a733-986b62c64e64",
                    "legacy_id": null,
                    "alt_film_id": 170893,
                    "fandango_id": null,
                    "title": "Sherlock Gnomes",
                    "slug": "sherlock-gnomes",
                    "description": "When Gnomeo and Juliet first arrive in London with their friends and family, their biggest concern is getting a new garden ready for spring. When everyone in the garden suddenly goes missing -- there's only one gnome to call -- Sherlock Gnomes. The famous detective and sworn protector of the city shows up with his sidekick Watson to investigate the case. The mystery soon leads the gnomes on a rollicking adventure as they meet all-new ornaments and explore an undiscovered side of London.",
                    "short_description": "Sherlock Gnomes helps Gnomeo and Juliet solve the case of disappearing garden gnomes in London.",
                    "run_time": 5160,
                    "mpaa_rating": "PG",
                    "production_companies": "Rocket Pictures, Paramount Animation, MGM",
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-03-23T00:00:00",
                    "canonical_release": "2018-03-23T00:00:00",
                    "display_release": null,
                    "screenings_count": 15184,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2017-02-04T15:00:10",
                    "updated_at": "2018-04-14T15:00:08",
                    "releases": {
                        "wide": [
                            {
                                "id": "313240d8-0626-4a1b-8de2-33d56f52367c",
                                "release_date": "2018-03-23",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Paramount Pictures"
                            }
                        ],
                        "original": [
                            {
                                "id": "b9c6a1e4-042b-4b9e-ad79-0ed5d35c4e06",
                                "release_date": "2018-03-23",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Paramount Pictures"
                            }
                        ],
                        "year": [
                            {
                                "id": "e83259dd-acca-4fd4-9d3d-fbba753f02f9",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "14dd3b9c-d2db-4c0a-9865-db6eba6982d1",
                            "url": "http://www.metacritic.com/movie/sherlock-gnomes?ftag=MCD-06-10aaa1c",
                            "meta_score": 36,
                            "meta_count": 14,
                            "user_score": 4.5,
                            "user_count": 26,
                            "season": null,
                            "date": "2018-03-23"
                        }
                    ],
                    "attachments": [],
                    "images": [
                        {
                            "id": "443fa64f-6fe1-4ca9-9c9e-afae36f8e3a8",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/13794695/p13794695_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Sherlock Gnomes (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "794b2787-a590-44a5-af6c-6fac8de0241e",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/13794695/p13794695_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Sherlock Gnomes (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "aed38dfc-b68f-48a2-a1cd-782bc08a9303",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/13794695/p13794695_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Sherlock Gnomes (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "fdf79056-ba06-4b7b-b6be-e9a4066f26f6",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/13794695/p13794695_p_v7_ab.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Sherlock Gnomes 3D (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "955ffaf5-9f63-4ae0-89c7-9b221c788149",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949323",
                            "screening": "2018-04-17T12:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "S4MT6AfpNHeQ0nedvp6Bp3",
                    "url_id": "S4MT6AfpNHeQ0nedvp6Bp3",
                    "has_trailers": false
                },
                {
                    "id": "95a3a61a-5172-48a8-949b-d915d62893a4",
                    "legacy_id": null,
                    "alt_film_id": 181581,
                    "fandango_id": null,
                    "title": "The Miracle Season",
                    "slug": "the-miracle-season",
                    "description": "Based on the inspiring true story of the West High School girl's volleyball team. After the tragic loss of star player Caroline \"Line\" Found in an accident, the remaining team players must band together under the guidance of their tough-love coach, Kathy Bresnahan, in hopes of winning the state championship.",
                    "short_description": "High school volleyball players band together after the tragic death of star teammate Caroline Found.",
                    "run_time": 5940,
                    "mpaa_rating": "PG",
                    "production_companies": "LD Entertainment, Apex Entertainment",
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-04-06T00:00:00",
                    "canonical_release": "2018-04-06T00:00:00",
                    "display_release": null,
                    "screenings_count": 14220,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2017-12-15T15:55:13",
                    "updated_at": "2018-04-17T15:00:10",
                    "releases": {
                        "year": [
                            {
                                "id": "5761658f-2140-4fbb-a0a3-360f2891d03a",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ],
                        "original": [
                            {
                                "id": "a775bb93-d374-4570-85f9-33776f983643",
                                "release_date": "2018-04-06",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Elevation Pictures"
                            }
                        ],
                        "wide": [
                            {
                                "id": "ebfec675-5963-4edf-9a26-4047e9bcb848",
                                "release_date": "2018-04-06",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Mirror, LD Entertainment"
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "9d4797bc-b436-4358-b6b4-11a0de6ba3b0",
                            "url": "http://www.metacritic.com/movie/the-miracle-season?ftag=MCD-06-10aaa1c",
                            "meta_score": 44,
                            "meta_count": 13,
                            "user_score": 9,
                            "user_count": 4,
                            "season": null,
                            "date": "2018-04-06"
                        }
                    ],
                    "attachments": [],
                    "images": [
                        {
                            "id": "20a23034-2714-4b9b-abd0-b60100d554ff",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/14953815/p14953815_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "The Miracle Season (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "d2922ad0-6e72-4c31-af47-2e45d76e0ad2",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/14953815/p14953815_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "The Miracle Season (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "b86e45cb-2022-48ca-bcbe-e6ac0ac4a3b5",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949183",
                            "screening": "2018-04-17T14:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "8f0bcf3e-bd93-4038-a0f0-b28cc69fd7f5",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949184",
                            "screening": "2018-04-17T16:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "esq9mlTbHkrL8UNMGxdMY4",
                    "url_id": "esq9mlTbHkrL8UNMGxdMY4",
                    "has_trailers": false
                },
                {
                    "id": "1b7964e2-b0aa-459a-8c75-4bd603a202bc",
                    "legacy_id": null,
                    "alt_film_id": 175387,
                    "fandango_id": null,
                    "title": "Acrimony",
                    "slug": "acrimony",
                    "description": "When Melinda met Robert, she was skeptical of his charming nature but couldn't deny how attracted she was to him. Once they fell in love, Melinda molded herself into everything he wanted her to be. She sacrificed for him, worked to support his grandiose dreams, and put up with him for better or for worse. Then, one day she realized that after all she had done, another woman was reaping the lavish rewards. That's when Melinda lost it, and now she cannot let it go.",
                    "short_description": "A woman becomes enraged after learning the truth about her philandering husband.",
                    "run_time": 7200,
                    "mpaa_rating": "R",
                    "production_companies": "Tyler Perry Company, Lionsgate",
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-03-30T00:00:00",
                    "canonical_release": "2018-03-30T00:00:00",
                    "display_release": null,
                    "screenings_count": 12170,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 7,
                    "down_votes": 1,
                    "created_at": "2017-06-23T15:00:09",
                    "updated_at": "2018-04-12T16:05:13",
                    "releases": {
                        "original": [
                            {
                                "id": "688ccb7b-73a1-4fd2-83db-e8c3a103318f",
                                "release_date": "2018-03-30",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Lionsgate Films"
                            }
                        ],
                        "wide": [
                            {
                                "id": "6971e107-17bb-4edd-9e64-529ba55e856d",
                                "release_date": "2018-03-30",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Lionsgate Films"
                            }
                        ],
                        "year": [
                            {
                                "id": "c9a7cc8d-fa54-4895-948d-caf9f2e64b2f",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ]
                    },
                    "scores": [],
                    "attachments": [],
                    "images": [
                        {
                            "id": "51a9f04c-28de-4807-acca-e0706dfa2896",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/14289024/p14289024_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Acrimony (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "6f35b68e-41bc-403c-b50e-543bf5ea1837",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/14289024/p14289024_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Acrimony (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "efa764a3-536a-4669-b198-92d6e1b97b80",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/14289024/p14289024_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Acrimony (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "b1f91057-0c56-423b-8638-a487785ce654",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949167",
                            "screening": "2018-04-17T10:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "d371ee2c-556d-4760-88ef-9768b756234b",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949196",
                            "screening": "2018-04-17T12:40:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "1fcec579-b188-4daf-9d32-3b53f108e9c5",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949168",
                            "screening": "2018-04-17T15:40:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "73d511af-fa77-4450-8149-24487510a87b",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949197",
                            "screening": "2018-04-17T18:40:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "5ff67d8a-ecdd-495b-b5fe-b900bfed949f",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949169",
                            "screening": "2018-04-17T21:40:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "u22qqzywG8UW4rAeBkGqp",
                    "url_id": "u22qqzywG8UW4rAeBkGqp",
                    "has_trailers": false
                },
                {
                    "id": "17dde819-6237-4e9f-a603-aac684981e29",
                    "legacy_id": null,
                    "alt_film_id": 180152,
                    "fandango_id": null,
                    "title": "Beirut",
                    "slug": "beirut",
                    "description": "In 1980s Beirut, Mason Skiles is a former U.S. diplomat who is called back into service to save a colleague from the group that is possibly responsible for his own family's death. Meanwhile, a CIA field agent who is working under cover at the American embassy is tasked with keeping Mason alive and ensuring that the mission is a success.",
                    "short_description": "A former U.S. diplomat returns to service in order to save a former colleague in Beirut.",
                    "run_time": 6540,
                    "mpaa_rating": "R",
                    "production_companies": "Radar Pictures",
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-04-11T00:00:00",
                    "canonical_release": "2018-04-11T00:00:00",
                    "display_release": null,
                    "screenings_count": 9759,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2017-11-01T15:55:13",
                    "updated_at": "2018-04-13T16:05:10",
                    "releases": {
                        "screening": [
                            {
                                "id": "6b2ecb0d-1c42-4a22-81f2-d780335e81e8",
                                "release_date": "2018-01-22",
                                "type": "screening",
                                "country": "USA",
                                "distributors": null
                            }
                        ],
                        "wide": [
                            {
                                "id": "e685f71d-1f24-45f2-9a6d-29b98f92799f",
                                "release_date": "2018-04-11",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Bleecker Street Media"
                            }
                        ],
                        "original": [
                            {
                                "id": "fb4745c9-6964-448f-8f0f-57150ce7f005",
                                "release_date": "2018-04-11",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Elevation Pictures"
                            }
                        ],
                        "year": [
                            {
                                "id": "fdf8d309-45fe-4162-8b18-25e8559a578f",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "e78a79ac-70ae-4b33-97d3-bdb35eb100b8",
                            "url": "http://www.metacritic.com/movie/beirut?ftag=MCD-06-10aaa1c",
                            "meta_score": 70,
                            "meta_count": 28,
                            "user_score": 6.7,
                            "user_count": 15,
                            "season": null,
                            "date": "2018-04-11"
                        }
                    ],
                    "attachments": [
                        {
                            "id": "b2b64c6f-54fc-4e2d-a9e8-a975a599ba91",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/images_1523482426.jpeg",
                            "category": "poster"
                        }
                    ],
                    "images": [],
                    "showtimes": [
                        {
                            "id": "abb13650-4ade-4a05-9d69-e1ff752ba381",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949182",
                            "screening": "2018-04-17T11:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "070e44f0-0041-416e-89a4-1f4fbcda3a8b",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949170",
                            "screening": "2018-04-17T13:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "715ceac2-3423-4357-9a39-e1a693934230",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949198",
                            "screening": "2018-04-17T15:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "cb3ae866-cb0c-4692-a71a-35e386bacb7f",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949227",
                            "screening": "2018-04-17T19:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "a70a2826-1f2a-4091-9a18-fe7291f56a13",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949228",
                            "screening": "2018-04-17T22:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "fm0SwJKoGPeZAw4prZE2j",
                    "url_id": "fm0SwJKoGPeZAw4prZE2j",
                    "has_trailers": false
                },
                {
                    "id": "9b980359-86d7-4adf-9143-43328da10d13",
                    "legacy_id": 20068384,
                    "alt_film_id": 150442,
                    "fandango_id": null,
                    "title": "Pacific Rim Uprising",
                    "slug": "pacific-rim-uprising",
                    "description": "Jake Pentecost is a once-promising Jaeger pilot whose legendary father gave his life to secure humanity's victory against the monstrous Kaiju. Jake has since abandoned his training only to become caught up in a criminal underworld. But when an even more unstoppable threat is unleashed to tear through cities and bring the world to its knees, Jake is given one last chance by his estranged sister, Mako Mori, to live up to his father's legacy.",
                    "short_description": "A new generation of pilots unite to battle otherworldly monsters that want to destroy humanity.",
                    "run_time": 6660,
                    "mpaa_rating": "PG-13",
                    "production_companies": "Legendary Pictures, DDY",
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-03-23T00:00:00",
                    "canonical_release": "2018-03-23T00:00:00",
                    "display_release": "2018-03-23",
                    "screenings_count": 8254,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2016-09-26T16:35:38",
                    "updated_at": "2018-04-05T15:00:16",
                    "releases": {
                        "wide": [
                            {
                                "id": "39620d25-3334-4ba2-84ad-ca6b5cc8956e",
                                "release_date": "2018-03-23",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Universal Pictures"
                            }
                        ],
                        "original": [
                            {
                                "id": "4eb64252-b6ee-400d-b391-e15c579f821f",
                                "release_date": "2018-03-23",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Universal Pictures"
                            }
                        ],
                        "year": [
                            {
                                "id": "6731d33d-1832-4f22-9104-7683b223f100",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "f6c73329-bdeb-4c1f-a535-91c6ad2343e2",
                            "url": "http://www.metacritic.com/movie/pacific-rim-uprising?ftag=MCD-06-10aaa1c",
                            "meta_score": 44,
                            "meta_count": 44,
                            "user_score": 5.1,
                            "user_count": 152,
                            "season": null,
                            "date": "2018-03-23"
                        }
                    ],
                    "attachments": [
                        {
                            "id": "0578796a-d98e-465b-9f4d-3e37210db13d",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/image001_1516733033.jpg",
                            "category": "poster"
                        },
                        {
                            "id": "30d93466-e91e-4da6-8d5d-4ba040f61d10",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/prutsr1sheet8johnrgb3_1507314837.jpg",
                            "category": "poster"
                        }
                    ],
                    "images": [
                        {
                            "id": "3164bc60-a808-420b-9418-b3f95afb58cc",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/11714869/p11714869_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Pacific Rim: Uprising (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "450ab49e-09e1-4de2-b9c0-1944727dd505",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/11714869/p11714869_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Pacific Rim: Uprising (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "534864ac-c0dd-4167-b269-39e7d4c956ce",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/11714869/p11714869_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Pacific Rim: Uprising (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "632e364a-6521-4ccd-9222-ade6a3b44f49",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/11714869/p11714869_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Pacific Rim: Uprising (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "8cba0c39-8742-43ed-b8ed-5ae1d07710c3",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/11714869/p11714869_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Pacific Rim: Uprising (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "ac071b30-891d-4b00-9286-69b60c217016",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/11714869/p11714869_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Pacific Rim: Uprising (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "b6bf40b0-7ac1-44e6-8726-146a615f5da3",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/11714869/p11714869_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Pacific Rim: Uprising (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "33f3b140-401e-40ab-80c8-45fe40e66f08",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949272",
                            "screening": "2018-04-17T13:40:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "d6eefb9f-d9fb-4bd5-a103-25e26efad033",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949273",
                            "screening": "2018-04-17T16:40:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "a17366a8-3c73-441c-a3c0-4b79d7d5c7c3",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949274",
                            "screening": "2018-04-17T19:40:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "2152f0bc-0aff-4d64-a18e-d01e911ee12d",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949275",
                            "screening": "2018-04-17T22:40:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "jfMwL1PQCLHqloL3cPHbj4",
                    "url_id": 20068384,
                    "has_trailers": true
                },
                {
                    "id": "c6a44811-b1be-47c2-b962-4ebdbac981cb",
                    "legacy_id": null,
                    "alt_film_id": 178983,
                    "fandango_id": null,
                    "title": "Love, Simon",
                    "slug": "love-simon",
                    "description": "Everyone deserves a great love story, but for 17-year-old Simon Spier, it's a little more complicated. He hasn't told his family or friends that he's gay, and he doesn't know the identity of the anonymous classmate that he's fallen for online. Resolving both issues proves hilarious, terrifying and life-changing.",
                    "short_description": "A gay teen doesn't know the identity of the anonymous classmate that he's fallen for online.",
                    "run_time": 6600,
                    "mpaa_rating": "PG-13",
                    "production_companies": "Fox 2000 Pictures, Temple Hill Entertainment",
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-03-16T00:00:00",
                    "canonical_release": "2018-03-16T00:00:00",
                    "display_release": null,
                    "screenings_count": 4871,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2017-10-07T15:35:11",
                    "updated_at": "2018-03-27T15:45:13",
                    "releases": {
                        "wide": [
                            {
                                "id": "4deb9f3f-40ee-4d58-a3f3-bf3984199285",
                                "release_date": "2018-03-16",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "20th Century Fox"
                            }
                        ],
                        "screening": [
                            {
                                "id": "75cd1874-b476-406d-ac09-bb24adb21aed",
                                "release_date": "2018-02-27",
                                "type": "screening",
                                "country": "AUS",
                                "distributors": null
                            }
                        ],
                        "year": [
                            {
                                "id": "c9b71c3e-1689-4edc-9905-521ee9234aac",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ],
                        "original": [
                            {
                                "id": "d6958f6d-1bab-4da3-9487-a1a090def7ff",
                                "release_date": "2018-03-16",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "20th Century Fox"
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "122c8a42-8a06-48d9-8faa-ff6ad0e343e7",
                            "url": "http://www.metacritic.com/movie/love-simon?ftag=MCD-06-10aaa1c",
                            "meta_score": 73,
                            "meta_count": 37,
                            "user_score": 8.3,
                            "user_count": 100,
                            "season": null,
                            "date": "2018-03-16"
                        }
                    ],
                    "attachments": [
                        {
                            "id": "894029bc-7459-4104-addd-472056448bae",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/unnamed2_1516128419.jpg",
                            "category": "poster"
                        }
                    ],
                    "images": [
                        {
                            "id": "b230790c-d954-413e-bb24-8017f6f35869",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/14651974/p14651974_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Love, Simon (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "c6ee4b19-3928-4cb7-8404-d68e4dcdb5dc",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/14651974/p14651974_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Love, Simon (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "e5b60357-af07-4e3b-8e7d-1494af38e3df",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/14651974/p14651974_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Love, Simon (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "b346004b-af1c-4c48-86c1-f917904815d0",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949326",
                            "screening": "2018-04-17T18:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "vFsLY9Hrudb1TRhYRZYp26",
                    "url_id": "vFsLY9Hrudb1TRhYRZYp26",
                    "has_trailers": true
                },
                {
                    "id": "236f0219-092e-4d8f-9fd7-cb7892603e3a",
                    "legacy_id": 20085628,
                    "alt_film_id": 164355,
                    "fandango_id": null,
                    "title": "Tomb Raider",
                    "slug": "tomb-raider",
                    "description": "Lara Croft is the fiercely independent daughter of an eccentric adventurer who vanished years earlier. Hoping to solve the mystery of her father's disappearance, Croft embarks on a perilous journey to his last-known destination -- a fabled tomb on a mythical island that might be somewhere off the coast of Japan. The stakes couldn't be higher as Lara must rely on her sharp mind, blind faith and stubborn spirit to venture into the unknown.",
                    "short_description": "Young Lara Croft searches for a fabled tomb on a mythical island where her father disappeared.",
                    "run_time": 7080,
                    "mpaa_rating": "PG-13",
                    "production_companies": "Square Enix Company, Metro-Goldwyn-Mayer, Warner Bros. Pictures, GK Films",
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-03-16T00:00:00",
                    "canonical_release": "2018-03-16T00:00:00",
                    "display_release": null,
                    "screenings_count": 2235,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2016-09-26T16:39:28",
                    "updated_at": "2018-03-27T15:45:13",
                    "releases": {
                        "year": [
                            {
                                "id": "333e8505-7cc1-4d59-b39d-d4bc64804b45",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ],
                        "original": [
                            {
                                "id": "794c008e-6b15-4219-bcd4-69eaec8d83c3",
                                "release_date": "2018-03-16",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "Warner Bros. Pictures"
                            }
                        ],
                        "wide": [
                            {
                                "id": "933f122a-db09-4ab7-b21a-364a966da990",
                                "release_date": "2018-03-16",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "Warner Bros. Pictures"
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "b2947d6c-8363-454a-94cb-b002e9c842b2",
                            "url": "http://www.metacritic.com/movie/tomb-raider?ftag=MCD-06-10aaa1c",
                            "meta_score": 48,
                            "meta_count": 53,
                            "user_score": 6.8,
                            "user_count": 327,
                            "season": null,
                            "date": "2018-03-16"
                        }
                    ],
                    "attachments": [
                        {
                            "id": "1b0183c5-3009-469e-8bab-b710d180323f",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/tr-ik-00013r_1500744684.jpg",
                            "category": "poster"
                        },
                        {
                            "id": "1f430102-3661-47cb-9428-df45d3fb5353",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/tombradierposter32_1512861389.jpg",
                            "category": "poster"
                        },
                        {
                            "id": "dfc7a8f3-d2d1-4e92-b1a3-01cd3a49bc50",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/mv5bmtu1odi1ndg2nf5bml5banbnxkftztgwotm2nzg1mzi_1505886808.v1sy1000cr006741000al.jpg",
                            "category": "poster"
                        }
                    ],
                    "images": [
                        {
                            "id": "8931d6e0-be4f-4b95-add2-ddc18fd5d5c4",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/13061659/p13061659_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Tomb Raider (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "8ff981bc-d82c-4532-b265-7e528b7e1f37",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/13061659/p13061659_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Tomb Raider (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "a9656969-06e1-496e-a199-183b632de60c",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/13061659/p13061659_p_v7_ab.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Tomb Raider 3D (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "b0c10f5e-5ddf-4e68-ab37-adea8d5e3733",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/13061659/p13061659_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Tomb Raider (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "b67249d7-ebcd-48ae-8f94-06fc2f59fa67",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/13061659/p13061659_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Tomb Raider (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "d3aeb272-7369-4629-961d-f187e1b7ff0d",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/13061659/p13061659_p_v7_aa.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Tomb Raider: An IMAX 3D Experience (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "eb0de402-e695-45a6-8e20-308eae06bbc6",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/13061659/p13061659_p_v7_ad.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Tomb Raider (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "44e48e51-b5cf-4574-9961-0a0f21fedf0a",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949152",
                            "screening": "2018-04-17T10:20:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "70c18418-d241-46a7-bcc8-1da986663a64",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949153",
                            "screening": "2018-04-17T13:20:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "d1359d2b-65bf-468b-b81b-f14895243133",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949154",
                            "screening": "2018-04-17T22:20:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "Q65xlsT2iEqwcePTCfSr41",
                    "url_id": 20085628,
                    "has_trailers": true
                },
                {
                    "id": "adfddaeb-dd53-4866-8712-0df127fc187b",
                    "legacy_id": null,
                    "alt_film_id": 173564,
                    "fandango_id": null,
                    "title": "Red Sparrow",
                    "slug": "red-sparrow",
                    "description": "Prima ballerina Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Egorova emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, Dominika meets a CIA agent who tries to convince her that he is the only person she can trust.",
                    "short_description": "A former ballerina uses her mind and body as a weapon after joining a secret intelligence service.",
                    "run_time": 8340,
                    "mpaa_rating": "R",
                    "production_companies": "Chernin Entertainment, TSL Entertainment",
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": "2018-03-02T00:00:00",
                    "canonical_release": "2018-03-02T00:00:00",
                    "display_release": null,
                    "screenings_count": 1072,
                    "description_updated": null,
                    "has_images": true,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2017-04-26T15:00:38",
                    "updated_at": "2018-04-17T15:00:10",
                    "releases": {
                        "wide": [
                            {
                                "id": "15cbfd2f-736c-4975-858d-16f4dd230d41",
                                "release_date": "2018-03-02",
                                "type": "wide",
                                "country": "USA",
                                "distributors": "20th Century Fox"
                            }
                        ],
                        "year": [
                            {
                                "id": "9612f6e8-9efd-4e77-b586-4fc8dc3b13c4",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ],
                        "original": [
                            {
                                "id": "9c9c14a9-bc6c-45e8-ae12-5f3809e6e14b",
                                "release_date": "2018-03-02",
                                "type": "original",
                                "country": "CAN",
                                "distributors": "20th Century Fox"
                            }
                        ],
                        "screening": [
                            {
                                "id": "9e81c83c-98eb-4e50-beab-420538a31b02",
                                "release_date": "2018-02-28",
                                "type": "screening",
                                "country": "SRB",
                                "distributors": null
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "39409e81-b23a-471f-9f95-8c767cb95fc9",
                            "url": "http://www.metacritic.com/movie/red-sparrow?ftag=MCD-06-10aaa1c",
                            "meta_score": 53,
                            "meta_count": 50,
                            "user_score": 6.1,
                            "user_count": 140,
                            "season": null,
                            "date": "2018-03-02"
                        }
                    ],
                    "attachments": [
                        {
                            "id": "5f3e8823-dcde-4b3c-be8b-d9f485a45efa",
                            "photo": "https://s3.amazonaws.com/moviefone/images/posters/mv5bmzkzntewmda2n15bml5banbnxkftztgwnzixmdq1mzi_1505413488.v1sy1000cr006441000al.jpg",
                            "category": "poster"
                        }
                    ],
                    "images": [
                        {
                            "id": "08bd44d8-70c0-4f10-9a1a-13391dd006ff",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/14080689/p14080689_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Red Sparrow (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "591ce8f2-be24-4166-9af8-21fcf9bf2776",
                            "type": "image/jpg",
                            "uri": "v7/AllPhotos/14080689/p14080689_p_v7_ac.jpg",
                            "width": 480,
                            "height": 720,
                            "category": "Poster Art",
                            "primary": false,
                            "caption": "Red Sparrow (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        },
                        {
                            "id": "bc0905f0-6182-4f6f-b121-bad4002ef8d3",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/14080689/p14080689_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Red Sparrow (2018)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "59585a8f-cb05-4c72-b29d-7f66e833eff9",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949324",
                            "screening": "2018-04-17T15:20:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "25bc0522-4def-42d1-859e-7eaec35c5b61",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949325",
                            "screening": "2018-04-17T21:50:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "zjoin9o9UyshrF7bzRgJI5",
                    "url_id": "zjoin9o9UyshrF7bzRgJI5",
                    "has_trailers": true
                },
                {
                    "id": "6ea3f8a6-6a21-46ee-9ef1-a10fd018a5b2",
                    "legacy_id": null,
                    "alt_film_id": 185091,
                    "fandango_id": null,
                    "title": "October",
                    "slug": "october",
                    "description": "The lives of two 21-year-old hotel interns collide.",
                    "short_description": "The lives of two 21-year-old hotel interns collide.",
                    "run_time": 6900,
                    "mpaa_rating": null,
                    "production_companies": null,
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": null,
                    "canonical_release": null,
                    "display_release": null,
                    "screenings_count": 996,
                    "description_updated": null,
                    "has_images": false,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2018-04-10T15:45:10",
                    "updated_at": "2018-04-14T15:00:08",
                    "releases": {
                        "year": [
                            {
                                "id": "5e82033f-0995-4825-9983-94c7c454731a",
                                "release_date": "2018",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ]
                    },
                    "scores": [],
                    "attachments": [],
                    "images": [],
                    "showtimes": [
                        {
                            "id": "0730747b-5e83-4227-a7ef-cbe59ee7702e",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949359",
                            "screening": "2018-04-17T11:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "d5d4bd18-e547-4d0a-bfc1-ae6409216917",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949349",
                            "screening": "2018-04-17T12:30:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "ea730e1c-6b09-478f-b390-61cb267b265c",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949350",
                            "screening": "2018-04-17T15:45:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "62686330-42eb-4932-be16-c45c9c1266fe",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949212",
                            "screening": "2018-04-17T19:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "5c7932c5-a5c4-415d-a3c8-bf99442dd212",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949213",
                            "screening": "2018-04-17T22:15:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "AQpaxkjBnTRCpZQT1e5mM3",
                    "url_id": "AQpaxkjBnTRCpZQT1e5mM3",
                    "has_trailers": false
                },
                {
                    "id": "5dd7c8a6-b275-4e9b-bcf0-a9906a3db6f7",
                    "legacy_id": null,
                    "alt_film_id": 184543,
                    "fandango_id": null,
                    "title": "Krystal",
                    "slug": "krystal",
                    "description": "A sheltered young man joins Alcoholics Anonymous to get closer to the woman of his dreams -- a former hooker and stripper named Krystal.",
                    "short_description": "A sheltered young man joins Alcoholics Anonymous to get closer to a former hooker and stripper.",
                    "run_time": 5580,
                    "mpaa_rating": "R",
                    "production_companies": null,
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": null,
                    "canonical_release": "2018-04-13T00:00:00",
                    "display_release": null,
                    "screenings_count": 748,
                    "description_updated": null,
                    "has_images": false,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2018-03-24T16:05:10",
                    "updated_at": "2018-04-13T16:05:10",
                    "releases": {
                        "year": [
                            {
                                "id": "72e5b440-e307-4151-b659-ee04f6a487d0",
                                "release_date": "2017",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ],
                        "limited": [
                            {
                                "id": "ae912ec6-5b70-4ad9-8af5-c1e167ef7da3",
                                "release_date": "2018-04-13",
                                "type": "limited",
                                "country": "USA",
                                "distributors": "Great Point Media, Paladin"
                            }
                        ],
                        "screening": [
                            {
                                "id": "caed2d94-5f9d-43f4-b1a1-fb049b870e4f",
                                "release_date": "2017-10-31",
                                "type": "screening",
                                "country": "USA",
                                "distributors": null
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "17ff9c9a-ec26-47ce-9ef4-adb94a23563b",
                            "url": "http://www.metacritic.com/movie/krystal?ftag=MCD-06-10aaa1c",
                            "meta_score": 39,
                            "meta_count": 10,
                            "user_score": 9,
                            "user_count": 1,
                            "season": null,
                            "date": "2018-04-13"
                        }
                    ],
                    "attachments": [],
                    "images": [
                        {
                            "id": "ae5da347-df55-4e24-b537-909947391bc0",
                            "type": "image/jpg",
                            "uri": "h12/AllPhotos/15320407/p15320407_i_h12_aa.jpg",
                            "width": 960,
                            "height": 540,
                            "category": "Iconic",
                            "primary": false,
                            "caption": "Krystal (2017)",
                            "caption_lang": "en",
                            "action": "add"
                        }
                    ],
                    "showtimes": [
                        {
                            "id": "e868ef00-5a63-4f57-97f7-a8a766844189",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949420",
                            "screening": "2018-04-17T10:00:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "0606c3bb-4488-411d-abb7-8ec99e25dea6",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949421",
                            "screening": "2018-04-17T12:20:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "97eb9818-1a84-4174-8951-6527af0f9955",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949422",
                            "screening": "2018-04-17T14:50:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "5ff696a4-b070-43ce-ba6c-80f7178296e4",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949423",
                            "screening": "2018-04-17T17:20:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "08772bdd-70c9-45cc-9c66-f3a3ae20dc04",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949424",
                            "screening": "2018-04-17T19:50:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "4d69f95d-59ed-44e1-9dfc-aa26fc0b5a8e",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949425",
                            "screening": "2018-04-17T22:20:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "ZG3pMP7B8Mdr8qEN8nt4r2",
                    "url_id": "ZG3pMP7B8Mdr8qEN8nt4r2",
                    "has_trailers": false
                },
                {
                    "id": "960fc266-f299-4ac1-8865-f26d04e05107",
                    "legacy_id": null,
                    "alt_film_id": 184733,
                    "fandango_id": null,
                    "title": "Flock of Four",
                    "slug": "flock-of-four",
                    "description": "Four friends search for a legendary jazz musician in 1959 Los Angeles.",
                    "short_description": "Four friends search for a legendary jazz musician in 1959 Los Angeles.",
                    "run_time": 4800,
                    "mpaa_rating": null,
                    "production_companies": null,
                    "weekend_box_office": null,
                    "dvd_release": null,
                    "bluray_release": null,
                    "wide_release": null,
                    "canonical_release": "2018-04-13T00:00:00",
                    "display_release": null,
                    "screenings_count": 113,
                    "description_updated": null,
                    "has_images": false,
                    "editorial_boost": null,
                    "is_modified": false,
                    "is_canonical": true,
                    "up_votes": 0,
                    "down_votes": 0,
                    "created_at": "2018-03-31T16:15:06",
                    "updated_at": "2018-03-31T16:15:06",
                    "releases": {
                        "screening": [
                            {
                                "id": "0a2ada48-e0c9-4a28-97d5-c24e486a2fb8",
                                "release_date": "2017-10-28",
                                "type": "screening",
                                "country": "USA",
                                "distributors": null
                            }
                        ],
                        "limited": [
                            {
                                "id": "3a73250d-a097-4b6b-aa21-642282b77953",
                                "release_date": "2018-04-13",
                                "type": "limited",
                                "country": "USA",
                                "distributors": "Abramorama"
                            }
                        ],
                        "year": [
                            {
                                "id": "fc333a40-e15f-4e17-8f74-8194a578462d",
                                "release_date": "2017",
                                "type": "year",
                                "country": null,
                                "distributors": null
                            }
                        ]
                    },
                    "scores": [
                        {
                            "id": "3347d7d0-9cf4-4f2b-a4b5-d6daa8aa5d83",
                            "url": "http://www.metacritic.com/movie/flock-of-four?ftag=MCD-06-10aaa1c",
                            "meta_score": 48,
                            "meta_count": 4,
                            "user_score": 9,
                            "user_count": 1,
                            "season": null,
                            "date": "2018-04-13"
                        }
                    ],
                    "attachments": [],
                    "images": [],
                    "showtimes": [
                        {
                            "id": "8c67b396-99d2-4e50-a730-907b8f92135e",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949155",
                            "screening": "2018-04-17T16:20:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        },
                        {
                            "id": "34e430c4-336b-4a4d-9ba6-c70278b86af1",
                            "source": "amc",
                            "url": "https://www.amctheatres.com/showtimes/all/2018-04-17/empire/all/66949156",
                            "screening": "2018-04-17T19:20:00",
                            "3d": null,
                            "imax": null,
                            "meal": null,
                            "recliner": null,
                            "reserved_seating": "reservedseating"
                        }
                    ],
                    "amenities": {
                        "3d": null,
                        "imax": null
                    },
                    "has_showtimes": true,
                    "base62_id": "hS1mLEuYE1VFF9D4SA3AZ4",
                    "url_id": "hS1mLEuYE1VFF9D4SA3AZ4",
                    "has_trailers": false
                }
            ],
            "base62_id": "kD2foVPts0zS7ztOO0iW53",
            "url_id": 628
        }
    ],
    "paging": {
        "page": 1,
        "prevPage": false,
        "nextPage": true,
        "pageCount": 4182,
        "currentCount": 1,
        "totalCount": 4182
    }
}

module.exports = TEST_API_RESPONSE
