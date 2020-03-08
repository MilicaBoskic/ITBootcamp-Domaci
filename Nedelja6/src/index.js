import LaunchList from "./components/launch_list";
import Info from "./components/header";
import addSelect from "./components/filter";
import Footer from "./components/footer";


const app = document.querySelector('#app');
const header = Info();

const filters = addSelect();

const launch_list = LaunchList();

const footer = Footer();

app.append(header, filters, launch_list, footer);