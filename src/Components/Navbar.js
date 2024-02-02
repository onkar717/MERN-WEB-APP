import '../index.css'
import { Link } from 'react-router-dom';

function BasicNavbar() {
  return (
    <div className='div'>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
      <Link to='/contact'>
        <span>Contact</span>
      </Link>
      <Link to='/login'>
        <span>Login</span>
      </Link>
      <Link to='/register'>
        <span>Register</span>
      </Link>
    </div>
  );
}

export default BasicNavbar;