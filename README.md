# Restaurant-Appliation

## UI-frontend-Library
This is a user interface in a library form format which allows users to add their favourite restaurants along with their favourite type of cuisine served there !

### How to run the app

1. Fork and clone this repository
2. Open it up and make your entry ! Once done , check the local storage for the items being added , the entries are being saved as they are being entered
3. If you liked it do give it a star.

### How to add an item

1. Add a suitable restaurant name 
2. Select the type of food it serves or the cuisine it provides
3. Click on add food and submit !

## Backend Server

1)GET RESTAURANTS: return the list of restuarants along with their unique id and menu available.
<br> GET http://localhost:3000/restaurant?id=4197367
 
2)POST RESTAURANT: User can add a new Restaurant in list along with food aailable and tags to mention
<br> POST http://localhost:3000/restaurant?id=-14661929

3)DELETE RESTAURANT: user can also delete a particular restaurant by hitting the endpoint using specific id of restaurant
<br> DELETE http://localhost:3000/restaurant/72654190

4)PUT : 

### API development
**Raw JSON**
```
id: "4765",
name: "Chilys",
cuisine: "Continental",
hasTakeout: "true",
COD: "false",
onlineDelivery: "Between 8 AM to 9 PM"
```

API WORKSPACE: https://www.postman.com/api-evangelist/workspace/api-fest-restaurants/api/a615318e-789a-43bf-8d42-0ff899e211fa
    
### Creators
The API is developed as a project for API Fest organized by Postman in the span of 26th Jan 2022 and 29th Jan 2022. 
1. [Pratistha Sinha](rinsin2002@gmail.com) - [ TEAM LEAD ]
2. [Sauradip Sengupta](sauradip.sengupta@gmail.com) - Frontend and backend,API Developer [ MEMBER ]
