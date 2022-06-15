let DUMMY_CHEFS = [
    {
        id: 1,
        name: 'Emre Demirel',
        description: 'Lorem ipsum dolor set',
        work_hours_start: 14.2,
        work_hours_end: 21.5,
        menu_available : true,
        created_at : "20.01.2022",
        rating : 4,
        category_id: 1,
        locationable_id : 1,
    },
    
]

let DUMMY_CATEGORIES = [
    {
        id: 1,
        category_enum: 1,
        category_name: 'Category 1',
        category_img: '/assets/categories_img/hamburger1.png',
    },
]

let DUMMY_BANNERS = [
    {
        id: 1,
        banner_img: '/assets/path.jpg',
        banner_redirect: '/path',
    },
]

let DUMMY_LOCATIONS = [
    {
        id: 1,
        longtitude: 14.94994552,
        latitude: 23.7327372737,
        full_address : 'Maslak 1453 İstanbul Sarıyer 234523',
        city: 'Istanbul',
        neighbourhood : 'Sarıyer',
        street : 'Sokak Adı',
        Country : 'Turkey',
    },
]

exports.DUMMY_CHEFS = DUMMY_CHEFS;
exports.DUMMY_CATEGORIES = DUMMY_CATEGORIES;
exports.DUMMY_BANNERS = DUMMY_BANNERS;
exports.DUMMY_LOCATIONS = DUMMY_LOCATIONS;