import './SideBar.css';
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

function SideBar() {

  const userContext = useContext(UserContext);

  const [counter, setCounter] = useState(0);


  let runstuff = (event: any) => {
    event.preventDefault();
    setCounter(counter + 1);
    userContext.updateUserNameCtx("blerg" + counter)
  }

  return (
    <div className="SideBar">
      <div>
        Attendees!
          <button onClick={(evt) => { runstuff(evt) }}></button>
      </div>
    </div>
  );
}

export default SideBar;
