// import Search from '../Search'
import stylesheet from './style.scss'

const Header = () => (
  <div>
    <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
    <div className="header_r text-center">
      <ul className="menu-top">
        <li><i className="fa fa-map-marker" aria-hidden="true"/> Mapa</li>
        <li>Mi Cuenta <i className="fa fa-angle-down" aria-hidden="true"/></li>
      </ul>
      <div className="logo-top">
        <div className="logo-container">
          <img src="http://www.mujeremprendedoralac.org/dev/wp-content/uploads/2015/10/cropped-ICONOpeque%C3%B1o.png"/>
        </div>
        <h1>Fruits</h1>
      </div>
    </div>
  </div>
);

export default Header
