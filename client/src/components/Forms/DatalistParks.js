import P from "../Text/P"

function DatalistParks({ type, label, input, stateProp, onChange}) {

    const parks = ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"];

    function dataList() {

        return <div>
            <datalist id="parks">
                {
                    parks.map(park => {
                        return <option value={park} key={park} />
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
            <input list="parks"
                name={input}
                type={type}
                value={stateProp}
                onChange={onChange} />
            {dataList()}
        </div>
    );
}

export default DatalistParks;


