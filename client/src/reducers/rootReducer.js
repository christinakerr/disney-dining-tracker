import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";

const initialState = {
    userData: [
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
        }
    ]
};

function rootReducer(state = initialState, action) {

    let vacation = state.userData.filter(vacation=>vacation.current)
    switch (action.type) {
        case 'ADDFOOD':
            // const vacation = state.userData.filter(vacation=>vacation.current)
            if (!vacation) {
                return state;
            }
            vacation[0].food.unshift(action.payload);
            return state;
        case 'ADDVACATION':
            // const currentVacations = state.userData.filter(vacation => vacation.current)
            if (vacation.length > 0){
                return state;
            }
            state.userData.unshift(action.payload)
            return state;
        case 'MARKCOMPLETE':
            if (!vacation) {
                return state;
            }
            vacation[0].current = false;
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    rootReducer: rootReducer,
    auth: authReducer,
    errors: errorReducer
})