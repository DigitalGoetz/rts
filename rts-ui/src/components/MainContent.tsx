import './MainContent.css';
import SideBar from './SideBar'
import Content from './Content'

function MainContent() {

  return (
    <div className="MainContent">
        <SideBar></SideBar>
        <Content></Content>
    </div>
  );
}

export default MainContent;
