import './Header.css';
import SessionControls from './SessionControls'

function Header() {

  return (
    <div className="Header">
      <div>Voting App</div>
      <SessionControls></SessionControls>
    </div>
  );
}

export default Header;
