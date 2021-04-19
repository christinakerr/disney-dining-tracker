import CreditsRemainingCategory from "./CreditsRemainingCategory"

function CreditsRemaining(){
    return (
        <div>
            <CreditsRemainingCategory category="Snack" remaining="15"/>
            <CreditsRemainingCategory category="Quick-Service" remaining="5"/>
            <CreditsRemainingCategory category="Table-Service" remaining="5"/>
        </div>
    );
}

export default CreditsRemaining;