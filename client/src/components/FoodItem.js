import H2 from "./Text/H2";
import H5 from "./Text/H5";
import H3 from "./Text/H3";

function FoodItem(props){
    return (
        <div>
            <H2>{props.name}</H2>
            <H5>{props.credit}</H5>
            <H3>{props.location}</H3>
            <H3>{props.park}</H3>
        </div>
    );
}

export default FoodItem;