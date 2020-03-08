import { getPastLaunches } from '../services/spacex_service'
import Launch from './launch';


const select = document.querySelector('#select');

select.className = "form-control form-control-sm";

select.style.fontSize = '1.2em';
select.style.fontWeight = '500';

let arrYears = [];


const getLaunchYear = (launch) => {
    return launch.launch_year;
}


const addSelect = () => {

    getPastLaunches().then(response => {

        let { data } = response;

        data.forEach(element => {
            let opt = document.createElement('option');

            if (!arrYears.includes(getLaunchYear(element))) {
                arrYears.push(getLaunchYear(element));
                console.log('radi');

                opt.value = getLaunchYear(element);
                opt.textContent = getLaunchYear(element);
                select.appendChild(opt);
            }
        });
    })

    select.addEventListener('change', () => {
        launchesYear(select.value);
    });

    return select;
}


const launchesYear = (launchYear) => {
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    div.className = 'launch-list';

    getPastLaunches().then(response => {
        let { data } = response;
        let filterLaunch = data.filter((element) => {
            return getLaunchYear(element) == launchYear;
        })

        filterLaunch.forEach(element => {
            div.appendChild(Launch(element));
        })

    }
    )
    container.innerHTML = '';
    return container.append(div);
}

export default addSelect;

