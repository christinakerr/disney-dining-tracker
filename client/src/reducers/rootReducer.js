const initialState = {userData: [
    {
        id: 1,
        name: "Spring 2020",
        current: true,
        nights: 5,
        food: [
            {
                id: 1,
                park: "Magic Kingdom",
                restaurant: "Crystal Palace",
                food: "Breakfast Buffet",
                drink: "Orange Juice",
                credit: "1 Table-Service",
                date: 20200320,
            },
            {
                id: 2,
                park: "Magic Kingdom",
                restaurant: "Pecos Bill's",
                food: "Rice Bowl",
                drink: "Lemonade",
                dessert: "Brownie",
                credit: "1 Quick-Service",
                date: 20200320,
            },
            {
                id: 3,
                park: "Magic Kingdom",
                restaurant: "Gaston's Tavern",
                food: "Cinnamon Roll",
                credit: "1 Snack",
                date: 20200320,
            },
            {
                id: 4,
                park: "Epcot",
                restaurant: "Garden Grill",
                food: "Tofu Wrap",
                drink: "Milk",
                credit: "1 Quick-Service",
                date: 20200321,
            },
            {
                id: 5,
                park: "Epcot",
                restaurant: "China Stall",
                food: "Bubble Tea",
                credit: "1 Snack",
                date: 20200321,
            },
            {
                id: 6,
                park: "Epcot",
                restaurant: "Via Napoli",
                food: "Margherita Pizza",
                drink: "Cocktail",
                dessert: "Cannolis",
                credit: "1 Table-Service",
                date: 20200321,
            }
        ]
    },
    {
        id: 2,
        name: "Spring 2019",
        current: false,
        nights: 5,
        food: [
            {
                id: 1,
                park: "Magic Kingdom",
                restaurant: "Crystal Palace",
                food: "Breakfast Buffet",
                drink: "Orange Juice",
                credit: "1 Table-Service",
                date: 20200321,
            },
            {
                id: 2,
                park: "Magic Kingdom",
                restaurant: "Pecos Bill's",
                food: "Rice Bowl",
                drink: "Lemonade",
                dessert: "Brownie",
                credit: "1 Quick-Service",
                date: 20200322,
            },
            {
                id: 3,
                park: "Magic Kingdom",
                restaurant: "Gaston's Tavern",
                food: "Cinnamon Roll",
                credit: "1 Snack",
                date: 202003221,
            }
        ]
    },
    {
        id: 3,
        name: "Spring 2018",
        current: false,
        nights: 5,
        food: [
            {
                id: 1,
                park: "Magic Kingdom",
                restaurant: "Crystal Palace",
                food: "Breakfast Buffet",
                drink: "Orange Juice",
                credit: "1 Table-Service",
                date: 20200321,
            },
            {
                id: 2,
                park: "Magic Kingdom",
                restaurant: "Pecos Bill's",
                food: "Rice Bowl",
                drink: "Lemonade",
                dessert: "Brownie",
                credit: "1 Quick-Service",
                date: 20200322,
            },
            {
                id: 3,
                park: "Magic Kingdom",
                restaurant: "Gaston's Tavern",
                food: "Cinnamon Roll",
                credit: "1 Snack",
                date: 202003221,
            }
        ]
    }]};

export default function rootReducer(state=initialState, action){
    switch(action.type){
        default:
            return state
    }
}