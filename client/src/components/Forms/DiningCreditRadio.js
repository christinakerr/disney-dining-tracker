import H6 from "../Text/H6"
import P from "../Text/P"

function DiningCreditRadio(props){
    return (
        <div>
            <H6>Dining Credit</H6>
            <input type="radio" id="snack" name="credit" value="snack" />
            <label for="snack"><P>Snack</P></label>
            <input type="radio" id="quick-service" name="credit" value="quick-service" />
            <label for="quick-service"><P>Quick-Service</P></label>
            <input type="radio" id="table-service" name="credit" value="table-service" />
            <label for="table-service"><P>Table-Service</P></label>
            <input type="radio" id="two-credit-table-service" name="credit" value="two-credit-table-service" />
            <label for="two-credit-table-service"><P>Two Credit Table-Service</P></label>
            <input type="radio" id="no-plan" name="credit" value="no-plan" />
            <label for="no-plan"><P>Not on Dining Plan</P></label>
        </div>
    );
}

export default DiningCreditRadio;