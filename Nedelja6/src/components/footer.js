import { getInfo } from "../services/spacex_service";

const footer = document.createElement('footer');

footer.className = 'form-control';

footer.style.backgroundImage = 'url("https://wallpaperplay.com/walls/full/e/4/5/54073.jpg")';
footer.style.backgroundRepeat = 'no-repeat';
footer.style.color = '#bccbf5';
footer.style.width = '100%';
footer.style.height = '60px';
footer.style.textAlign = 'center';
footer.style.fontSize = '1.5em';
footer.style.fontWeight = '600';


const Footer = () => {

    getInfo().then(response => {
        let { data } = response;
        footer.innerHTML = `${data.founder} - ${data.founded}`;
    })
    return footer;
}

export default Footer;