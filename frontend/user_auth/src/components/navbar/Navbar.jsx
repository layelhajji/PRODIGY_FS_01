
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MonSite</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
        <li style={styles.navItem}><Link to="/services" style={styles.navLink}>Services</Link></li>
        <li style={styles.navItem}><Link to="/register" style={styles.navLink}>Register</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(245, 245, 199)',
    padding: '10px 80px',
  },
  logo: {
    color: '#000',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding:0,
  },
  navItem: {
    marginLeft: '40px',
  },
  navLink: {
    color: '#000',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Navbar;
