import { getInfo } from "../services/spacex_service";

const Info = () => {

    let header = document.createElement('header');

    header.className = 'form-control';

    header.style.backgroundImage = 'url("https://wallpaperplay.com/walls/full/e/4/5/54073.jpg")';
    header.style.backgroundRepeat = 'no-repeat';
    header.style.width = '100%';
    header.style.height = '65px';
    header.style.color = 'white';
    header.style.fontSize = '2em';
    header.style.textAlign = 'center';
    header.style.fontWeight = '600';

    getInfo().then(response => {
        let { data } = response;
        header.innerHTML = `${data.name}`;
    })
    
    return header;
}

export default Info;

