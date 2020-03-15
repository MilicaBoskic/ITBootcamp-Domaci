// ****FUNKCIJA****

import React from 'react';
import './Style.css';
import Description from './Description';
import Emoji from './Emoji';



const Card = () => {
    return (
        <div className="card">
        <Description url = {'https://image.flaticon.com/icons/svg/927/927567.svg'}></Description>
        <Emoji text = {'Text'}></Emoji>
        </div>
    )
}

export default Card;


// // ****KLASA****

// import React from 'react';
// import './Style.css';
// import Description from './Description';
// import Emoji from './Emoji';


// class Card extends React.Component {
//     render() {
//     return (
//         <div className="card">
//         <Description url = {'https://image.flaticon.com/icons/svg/927/927567.svg'}></Description>
//         <Emoji text = {'Text'}></Emoji>
//         </div>
//     )
//     }
// }

// export default Card;