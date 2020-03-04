import LaunchList from "./components/launch_list";
import Info from "./components/header_info";

const app = document.querySelector('#app');

const header = Info()
const launch_list = LaunchList();

app.append(header, launch_list);
