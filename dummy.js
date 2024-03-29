let DUMMY_CHEFS = [
    {
        id: 1,
        name: 'Wong Chinese Sushi',
        description: 'Most deliciosu and tradional chinese cuisine meals located there. Sushi, wok meals, noodles and more waiting you in Wong Chinese',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 4.0,
        category_id: 1,
        chef_img: '/assets/chef_img/chefid-1.png',
        location:
            {
                id: 1,
                longtitude: 40.71789644487898,
                latitude: -73.98051467461434,
                full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
                city: 'Boston',
                neighbourhood : 'Carlstadt',
                street : '100 Industrial Rd',
                Country : 'USA'},
        category: 'Asian Cuisine' 
    },{
    	id: 2,
        name: 'Mark Buffalo Wings',
        description: 'Tradional american Buffalo Wings with homemade Buffalo sauce that maintained over 40 years Louisiana family recipe ',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 4.3,
        category_id: 2,
        chef_img: '/assets/chef_img/chefid-2.png',
        location:
            {
                id: 1,
                longtitude: 40.71789644487898,
                latitude: -73.98051467461434,
                full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
                city: 'New Orleans',
                neighbourhood : 'Carlstadt',
                street : '100 Industrial Rd',
                Country : 'USA'},
        category: 'Chicken' 
    },{
    	id: 3,
        name: 'Texas Smoke House',
        description: 'Old-Fashioned recipe summer sausage, smoked in a concrete pit smokehouse for 12 hours using real hardwood logs and smoked over a natural fire to create an authentic, aged flavor that cant be achieved any other way.',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 3.9,
        category_id: 3,
        chef_img: '/assets/chef_img/chefid-3.png',
        location:
            {
                id: 1,
                longtitude: 40.71789644487898,
                latitude: -73.98051467461434,
                full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
                city: 'Brooklyn',
                neighbourhood : 'Carlstadt',
                street : '100 Industrial Rd',
                Country : 'USA'},
        category: 'Grill&Smokehouse'  
    },{
    	id: 4,
        name: 'Binotto Pizza',
        description: 'Binotto is a pizza parlor located at 316 Kinzie Street,in Chicago, Illinois. According to the owner, they use cornmeal in their crust.',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 4.8,
        category_id: 4,
        chef_img: '/assets/chef_img/chefid-4.png',
        location:
            {
                id: 1,
                longtitude: 40.71789644487898,
                latitude: -73.98051467461434,
                full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
                city: 'NYC',
                neighbourhood : 'Carlstadt',
                street : '100 Industrial Rd',
                Country : 'USA'},
        category: 'Pizza'  
    },{
    	id: 5,
        name: 'Bobs Burger',
        description: 'The Hot Mess from Harlem Shake is changing the game of smash burgers. This patty has the crispiest edges ever that pair flawlessly with its toppings of pickled cherry pepper and bacon relish, American cheese',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 4.1,
        category_id: 5,
        chef_img: '/assets/chef_img/chefid-5.png',
        location:
            {
                id: 1,
                longtitude: 40.71789644487898,
                latitude: -73.98051467461434,
                full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
                city: 'San Fransisco',
                neighbourhood : 'Carlstadt',
                street : '100 Industrial Rd',
                Country : 'USA'},
        category: 'Burger&Sandwich'  
    },{
    	id: 6,
        name: 'Dianka Patisserie',
        description: 'Lorem ipsum dolor set',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 4.6,
        category_id: 6,
        chef_img: '/assets/chef_img/chefid-6.png',
        location:
            {
                id: 1,
                longtitude: 40.71789644487898,
                latitude: -73.98051467461434,
                full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
                city: 'Bay Area',
                neighbourhood : 'Carlstadt',
                street : '100 Industrial Rd',
                Country : 'USA'},
        category: 'Desert'  
    },{
    	id: 7,
        name: 'Seagull Mussels',
        description: 'Seagull Mussels produce premium NZ Greenshell™ Mussels and deliver them fresh for you to create mouth-watering dishes',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 3.5,
        category_id: 7,
        chef_img: '/assets/chef_img/chefid-7.png',
        location:
            {
                id: 1,
                longtitude: 40.71789644487898,
                latitude: -73.98051467461434,
                full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
                city: 'Wisconsin',
                neighbourhood : 'Carlstadt',
                street : '100 Industrial Rd',
                Country : 'USA'},
        category: 'Seafood' 
    },{
    	id: 8,
        name: 'Katz Dellicatessen',
        description: 'Katzs Delicatessen serve kosher-style delicatessen and pastrami located at 205 East Houston Street, on the southwest corner of Houston ',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 5.0,
        category_id: 5,
        chef_img: '/assets/chef_img/chefid-8.png',
        location:
            {
                id: 1,
                longtitude: 40.71789644487898,
                latitude: -73.98051467461434,
                full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
                city: 'Washington D.C',
                neighbourhood : 'Carlstadt',
                street : '100 Industrial Rd',
                Country : 'USA'},
        category: 'Burger&Sandwich' 
    },{
    	id: 9,
        name: 'Bagel Shop',
        description: 'Bagel & deli has been the home of delicious foods and awesome moods since 1975',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 3.3,
        category_id: 8,
        chef_img: '/assets/chef_img/chefid-9.png',
        location:
            {
                id: 1,
                longtitude: 40.71789644487898,
                latitude: -73.98051467461434,
                full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
                city: 'Chicago',
                neighbourhood : 'Carlstadt',
                street : '100 Industrial Rd',
                Country : 'USA'},
        category: 'Bakery' 
    },{
    	id: 10,
        name: 'Gordon Ramsay Hell Kitchen',
        description: 'Chef Gordon Ramsay creates an exquisite dining experience that allows diners to best',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 5.0,
        category_id: 9,
        chef_img: '/assets/chef_img/chefid-10.png',
        location:
            {
                id: 1,
                longtitude: 40.71789644487898,
                latitude: -73.98051467461434,
                full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
                city: 'Detroit',
                neighbourhood : 'Carlstadt',
                street : '100 Industrial Rd',
                Country : 'USA'},
        category: 'Fine Dining' 
    }    
]

let DUMMY_CATEGORIES = [
    {
        id: 1,
        category_enum: 1,
        category_name: 'Asia Cuisine',
        category_img: '/assets/categories_img/asiancuisine.png',
    },{
        id: 2,
        category_enum: 2,
        category_name: 'Chicken',
        category_img: '/assets/categories_img/chicken.png',
    },{
        id: 3,
        category_enum: 3,
        category_name: 'Grill&Smokehouse',
        category_img: '/assets/categories_img/grill.png',
    },{
        id: 4,
        category_enum: 4,
        category_name: 'Pizza',
        category_img: '/assets/categories_img/pizza.png',
    },{
        id: 5,
        category_enum: 5,
        category_name: 'Burger&Sandwich',
        category_img: '/assets/categories_img/burger.png',
    },{
        id: 6,
        category_enum: 6,
        category_name: 'Deserts',
        category_img: '/assets/categories_img/desert.png',
    },{
        id: 7,
        category_enum: 7,
        category_name: 'Seafood',
        category_img: '/assets/categories_img/seafood.png',
    },{
        id: 8,
        category_enum: 8,
        category_name: 'Bakery',
        category_img: '/assets/categories_img/bakery.png',
    },{
        id: 9,
        category_enum: 9,
        category_name: 'Fine Dining',
        category_img: '/assets/categories_img/finedine.png',
    }
]

let DUMMY_BANNERS = [
    {
        id: 1,
        banner_img: '/assets/banner1.png',
        banner_redirect: '/path',
    },{
        id: 2,
        banner_img: '/assets/banner2.png',
        banner_redirect: '/path',
    }
]

let DUMMY_LOCATIONS = [
    {
        id: 1,
        longtitude: 40.71789644487898,
        latitude: -73.98051467461434,
        full_address : '100 Industrial Rd, Carlstadt, NJ 07072',
        city: 'Boston',
        neighbourhood : 'Carlstadt',
        street : '100 Industrial Rd',
        Country : 'USA',
    },{
        id: 2,
        longtitude: 40.71849253590087,
        latitude: -73.98979576525085,
        full_address : '94 Orchard St, New York, NY 10002',
        city: 'New York',
        neighbourhood : 'Mannathan',
        street : '94 Orchard St',
        Country : 'USA',
    },{
        id: 3,
        longtitude: 35.22636555097711,
        latitude: -97.8583658659014,
        full_address : '649W+PJ Tuttle, Oklahoma',
        city: 'Oklahoma',
        neighbourhood : 'Amber',
        street : '649W+PJ Tuttle',
        Country : 'USA',
    }
]

let DUMMY_COMMENTS = [
    {
        id: 1,
        name: 'Jonathan Bell',
        text: 'It was fantastic experience. The meal was delicious and feel special to me.',
        img: '/assets/comments_img/comment2.png',
    },{
        id: 2,
        name: 'Michelle Taylor',
        text: 'I was wondering quality of chefs on Cheffy. All meals were prepared for just me.',
        img: '/assets/comments_img/comment1.png',
    },{
        id: 3,
        name: 'Joan Sebastion Bay',
        text: 'I just took photo and send the chef, same food that I took the photo delivered to me immediately.',
        img: '/assets/comments_img/comment3.png',
    },{
        id: 4,
        name: 'Elaine Durden',
        text: 'The food was excellent and so was the service.  I had the mushroom risotto with scallops which was awesome.',
        img: '/assets/comments_img/comment4.png',
    },{
        id: 5,
        name: 'Irene Adler',
        text: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee.',
        img: '/assets/comments_img/comment5.png',
    },{
        id: 6,
        name: 'Colin James',
        text: 'Great pizza, mozzarella sticks, calamari, chicken tenders, I could go on. Everything we’ve tried here has been amazing. The staff is always so friendly and accommodating.',
        img: '/assets/comments_img/comment6.png',
    },{
        id: 7,
        name: 'Peter Parker',
        text: 'The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste.',
        img: '/assets/comments_img/comment7.png',
    },{
        id: 8,
        name: 'Rachel Green',
        text: 'Good quantity served per portion. Service as also good.',
        img: '/assets/comments_img/comment8.png',
    },{
        id: 9,
        name: 'Chandler Bing',
        text: 'It was a good experience with food lounge and we ordered food from there. Delicious and special.',
        img: '/assets/comments_img/comment9.png',
    },{
        id: 10,
        name: 'Teresa Alvardo',
        text: 'Brilliant service from Michael. Made everyone feel at ease and was extremely attentive towards allergies and intolerances.',
        img: '/assets/comments_img/comment10.png',
    }
]

exports.DUMMY_CHEFS = DUMMY_CHEFS;
exports.DUMMY_CATEGORIES = DUMMY_CATEGORIES;
exports.DUMMY_BANNERS = DUMMY_BANNERS;
exports.DUMMY_LOCATIONS = DUMMY_LOCATIONS;
exports.DUMMY_COMMENTS = DUMMY_COMMENTS;