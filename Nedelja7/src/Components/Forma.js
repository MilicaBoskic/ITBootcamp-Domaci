// ****FUNKCIJA****

import React from 'react';
import './Forma.css';

const Forma = (props) => {

    return (
    <form className="col-sm-9">

        <input className="form-control" type="text" placeholder="..."></input>
        <button className="btn btn-light btn-lg">{props.text}</button>

    </form>
    );
}


export default Forma;


// // ****KLASA****

// import React from 'react';
// import './Forma.css';


// class Forma extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//         return (<form className="col-sm-9">
            
//             <input className="form-control" type="text" placeholder="..."></input>
//             <button className="btn btn-light btn-lg">{this.props.text}</button>

//         </form>);
//     }
// }

// export default Forma;