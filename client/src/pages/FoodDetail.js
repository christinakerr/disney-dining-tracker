/** @jsxImportSource @emotion/react */

import H1 from "../components/Text/H1";
import H2 from "../components/Text/H2";
import H3 from "../components/Text/H3";
import H4 from "../components/Text/H4";
import P from "../components/Text/P";


import { css } from '@emotion/react'


function FoodDetail(){
    return (
        <div css={pageStyles} >
            <H1>Mickey Ice Cream</H1>
            <H4 className="date">3/21/2018</H4>
            <H2>1 Snack</H2>
            <H3>Stall in front of the castle</H3>
            <H3>Magic Kingdom</H3>
            <img src="http://via.placeholder.com/300" alt="placeholder" />
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales sodales mi ut tincidunt. Vestibulum sodales erat sit amet ex volutpat, non ultricies dolor fringilla. Duis dignissim ornare lacinia. Nulla est urna, varius sit amet scelerisque ac, cursus at erat. Integer quis nisl euismod, elementum lacus quis, molestie enim. Donec ullamcorper arcu rutrum fermentum aliquam. Cras sed facilisis purus. Praesent ipsum sem, gravida egestas vulputate quis, cursus nec mi. Sed pretium consectetur velit, viverra sagittis neque aliquam quis. Aenean consectetur nunc quis dui eleifend, at fringilla nisl posuere. Quisque facilisis aliquam ornare. Maecenas at est malesuada nulla venenatis interdum. Vestibulum efficitur in ex eu pulvinar.</P>
        </div>
    );
}

export default FoodDetail;

const pageStyles = css`
    img {
        width: 100%;
        max-width: 350px;
        margin-top: 10px;
    }
    h1{
        margin-bottom: 10px;
    }
    h4, h2, h3 {
        margin: 3px;
    }
    .date {
        float: right;
    }
`