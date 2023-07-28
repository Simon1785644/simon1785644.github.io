import { Link } from 'react-router-dom';
import 'assets/css/sidebar.css';

const Sidebar = () => {
    return (
      <div class="sidenav">
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="https://www.taiwanstat.com/realtime/" 
                target="_blank" rel="noreferrer noopener">
                  Taiwan open data</a>
            </li>
            <li>
              <a href="https://ckhung0.blogspot.com/" 
                target="_blank" rel="noreferrer noopener">
                    資訊人權貴質疑</a>
            </li>
            <li>
              <a href="https://www.virustotal.com/gui/home/upload" 
                target="_blank" rel="noreferrer noopener">
                    VirusTotal</a>
            </li>
          </ul>
        </nav>    
      </div>
    );
}

export default Sidebar;