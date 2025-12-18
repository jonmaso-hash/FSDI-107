const catalog = [
    {
"title": "Still Sleepy Orange Juice",
"category": "beverage",
"price": 10.00,
"image": "orangejuice2.jpg",
"_id:":"1",
    },

       {
"title": "Not in the Mood Milk",
"category": "beverage",
"price": 5.75,
"image": "milk.jpg",
"_id":"2",
    },

       {
"title": " I am in Love Chocolate Bar",
"category": "candy",
"price": 4.25,
"image": "choc2.jpg",
"_id:":"3",
    },

       {
"title": "I Hate Everyone Coffee Beans",
"category": "coffee",
"price": 12.00,
"image": "coffee3.jpg",
"_id:":"4"
    },
];

class DataService{
    getProducts()
{
    return catalog;
}
};

export default DataService;