// ****FUNKCIJA****


import React from 'react';
import './Style.css';

const Description = (props) => {

    return ( 
    <div className="description">{props.text}</div>
 );

}

export default Description;



// // ****KLASA****

// import React from 'react';
// import './Style.css';

// class Description extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//     return (
//     <div className="description">
//     {this.props.text}

//     </div>
// );
//     }
// }

// export default Description;
