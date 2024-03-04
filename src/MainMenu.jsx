import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import ExpandableNavItem from "components/ExpandableNavItem";
import NavItem from "components/NavItem";

export default function MainMenu({ menuLayout, closeMenuHandler }) {
  let location = useLocation();
  useEffect(() => {
    closeMenuHandler && closeMenuHandler();
  }, [location, closeMenuHandler]);

  return (
    <>
      {/* <li className="nav-item">
        <a
          className="nav-link jumpapp"
          href="https://war-bi.qnalytics.com/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="lui-icon  lui-icon--log-in"></i>
          <p>{menuLayout.MenuItem27}</p>
        </a>
      </li> */}
      <NavItem
        to="/"
        text={menuLayout.MenuItem1}
        icon={<FontAwesomeIcon icon="home" />}
      />
{     <NavItem
        to="/needsfulfilmentrate"
        text={menuLayout.MenuItem2}
        icon={<FontAwesomeIcon icon="percent" />} 
      />}
{     <NavItem
        to="/NeedsFundingSources"
        text={menuLayout.MenuItem3}
        icon={<FontAwesomeIcon icon="hand-holding-dollar" />} 
      />}
{     <NavItem
        to="/monitoringsheet"
        text={menuLayout.MenuItem4}
        icon={<FontAwesomeIcon icon="table" />} 
      />}
      {/* <div className="col-12 as-of-date-disclaimer">
        <p>
        {menuLayout.KPIsAsOfDate}
        </p>
      </div> */}
    </>
  );
}
