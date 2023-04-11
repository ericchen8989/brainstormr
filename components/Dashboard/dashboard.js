import EditorTinyMCE from './Editor-TinyMCE';
import DashboardSidebar from './sidebar';
import Navbar from './navbar-dashboard/navdash';

//import {DarkModeSwitch} from 'react-toggle-dark-mode';

export default function App() {
  return (
    <div data-theme="light">
      <Navbar />
      <DashboardSidebar />
      <EditorTinyMCE />
    </div>
  );
}
