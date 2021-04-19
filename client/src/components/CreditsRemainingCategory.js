import H1 from "./Text/H1"
import H2 from "./Text/H2"

function CreditsRemainingCategory(props){
    return (
        <div>
            <H1>
                {props.category}
            </H1>
            <H2>
                {props.category}
            </H2>
        </div>
    );
}

export default CreditsRemainingCategory;