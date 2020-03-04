const Header = (info) => {
    let {name} = info;

    const div = document.createElement('div');
    div.className='header';

    const header = document.createElement('header');
    header.innerHTML = `${name}`

    div.appendChild(header);
}

export default Header;