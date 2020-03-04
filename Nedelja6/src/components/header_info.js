import { getInfo } from '../services/spacex_service'

import Header from './header';

const Info = () => {
    const div = document.createElement('div');
    div.className = 'info';
    div.style.backgroundColor = '#d5f5dd';
    div.style.width = '100%';
    div.style.height = '50px';


    getInfo().then(response => {
        let { data } = response;

        let header = document.createElement('header')
        header.innerHTML = `${data.name}`
        Header(name);

        div.appendChild(header);
    })
    return div;
}

export default Info;

