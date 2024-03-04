import { Switch, Route, Redirect } from "react-router-dom";
//import usePageViews from "hooks/usePageViews";

// Pages
import Home from "pages/Home";
import MonitoringSheet from "pages/MonitoringSheet";
import NeedsFulfilmentRate from "pages/NeedsFulfilmentRate";
import NeedsFundingSources from "pages/NeedsFundingSources";

export default function Routes({ menuLayout }) {
  //usePageViews();

  return (
    <Switch>
      <Route exact path="/">
        <Home title={menuLayout.MenuItem1} appDisclaimer={menuLayout.appDisclaimer} pageTitle={menuLayout.HeaderTitle} ExportChartFootnote={menuLayout.ExportChartFootnote} menuItemsStrings={menuLayout}/>
      </Route>
      <Route path="/needsfulfilmentrate">
        <NeedsFulfilmentRate title={menuLayout.MenuItem2} appDisclaimer={menuLayout.appDisclaimer} pageTitle={menuLayout.HeaderTitle} ExportChartFootnote={menuLayout.ExportChartFootnote} menuItemsStrings={menuLayout} />
      </Route>
      <Route path="/needsfundingsources">
        <NeedsFundingSources title={menuLayout.MenuItem3} appDisclaimer={menuLayout.appDisclaimer} pageTitle={menuLayout.HeaderTitle} ExportChartFootnote={menuLayout.ExportChartFootnote} menuItemsStrings={menuLayout} />
      </Route>
      <Route path="/monitoringsheet">
        <MonitoringSheet title={menuLayout.MenuItem4} appDisclaimer={menuLayout.appDisclaimer} pageTitle={menuLayout.HeaderTitle} ExportChartFootnote={menuLayout.ExportChartFootnote} menuItemsStrings={menuLayout} />
      </Route>
      <Redirect to="/" />
      
    </Switch>
  );
}
