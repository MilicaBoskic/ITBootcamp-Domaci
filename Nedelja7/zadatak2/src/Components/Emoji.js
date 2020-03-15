// ****FUNKCIJA****

import React from 'react';
import './Style.css';


const Emoji = (props) => {

    return (
    <div className="emoji">{props.url}</div>
);

}

export default Emoji;


// // ****KLASA****


// import React from 'react';
// import './Style.css';

// class Emoji extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//     return (
//     <div className="emoji">
//     {this.props.url}

//     </div>
//  );
//     }
// }


// export default Emoji;
