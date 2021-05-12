import P from "../Text/P"

// import API from "../../utils/API"

function DatalistParks({ type, label, input, stateProp, onChange, park }) {

    const parks = ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"];

    function dataList() {

        // if (parks.filter(item => item !== park).length === 0) {
        //     return;
        // }
        // let parkSearch;

        // switch (park) {
        //     case "Magic Kingdom":
        //         parkSearch = "magic-kingdom"
        //         break;
        //     case "Epcot":
        //         parkSearch = "epcot"
        //         break;
        //     case "Hollywood Studios":
        //         parkSearch = "hollywood-studios"
        //         break;
        //     case "Animal Kingdom":
        //         parkSearch = "animal-kingdom"
        //         break;
        //     default:
        //         break;
        // }

        // if (parkSearch) {
        //     API.getDining(parkSearch)
        //         .then(res => {
        //             console.log(res)
        //         })
        //         .catch(err => console.log(err))
        // }



        return <div>
            <datalist id="restaurant">
                {
                    parks.map(park => {
                        return <option value={park} />
                    })
                }
            </datalist>
        </div>
    }


    return (
        <div>
            <label htmlFor={input}>
                <P label>{label}</P>
            </label>
            <input list="restaurant"
                name={input}
                type={type}
                value={stateProp}
                onChange={onChange} />
            {dataList()}
        </div>
    );
}

export default DatalistParks;