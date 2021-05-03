const initialState = {
    userData: [
        {
            id: 1,
            name: "Spring 2020",
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
                    date: 20200320,
                    notes: "Mickey Waffle, cheese omlette, banana bread pudding, strawberries"
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
                    id: 7,
                    park: "Magic Kingdom",
                    restaurant: "Crystal Palace",
                    food: "Breakfast Buffet",
                    drink: "Orange Juice",
                    credit: "1 Table-Service",
                    date: 20200321,
                },
                {
                    id: 8,
                    park: "Magic Kingdom",
                    restaurant: "Pecos Bill's",
                    food: "Rice Bowl",
                    drink: "Lemonade",
                    dessert: "Brownie",
                    credit: "1 Quick-Service",
                    date: 20200322,
                },
                {
                    id: 9,
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
                    id: 10,
                    park: "Magic Kingdom",
                    restaurant: "Crystal Palace",
                    food: "Breakfast Buffet",
                    drink: "Orange Juice",
                    credit: "1 Table-Service",
                    date: 20200321,
                },
                {
                    id: 11,
                    park: "Magic Kingdom",
                    restaurant: "Pecos Bill's",
                    food: "Rice Bowl",
                    drink: "Lemonade",
                    dessert: "Brownie",
                    credit: "1 Quick-Service",
                    date: 20200322,
                },
                {
                    id: 12,
                    park: "Magic Kingdom",
                    restaurant: "Gaston's Tavern",
                    food: "Cinnamon Roll",
                    credit: "1 Snack",
                    date: 20200321,
                }
            ]
        }]
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}