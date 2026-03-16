import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import Home from "./pages/Home";
import CookieConsent from "./components/CookieConsent";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Shipping from "./pages/Shipping";
import AGB from "./pages/AGB";
import AdminDashboard from "./pages/AdminDashboard";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/en"} component={Home} />
      <Route path={"/nl"} component={Home} />
      <Route path={"/impressum"} component={Impressum} />
      <Route path={"/en/impressum"} component={Impressum} />
      <Route path={"/nl/impressum"} component={Impressum} />
      <Route path={"/datenschutz"} component={Datenschutz} />
      <Route path={"/en/privacy"} component={Datenschutz} />
      <Route path={"/nl/privacy"} component={Datenschutz} />
      <Route path={"/versand"} component={Shipping} />
      <Route path={"/en/shipping"} component={Shipping} />
      <Route path={"/nl/verzending"} component={Shipping} />
      <Route path={"/agb"} component={AGB} />
      <Route path={"/en/terms"} component={AGB} />
      <Route path={"/nl/voorwaarden"} component={AGB} />
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <LocaleProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <CookieConsent />
          </TooltipProvider>
        </LocaleProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
