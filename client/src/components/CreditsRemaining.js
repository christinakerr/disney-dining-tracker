import CreditsRemainingCategory from "./CreditsRemainingCategory"

function CreditsRemaining(){
    return (
        <div>
            <CreditsRemainingCategory category="Snack" />
            <CreditsRemainingCategory category="Quick-Service" />
            <CreditsRemainingCategory category="Table-Service" />
        </div>
    );
}

export default CreditsRemaining;