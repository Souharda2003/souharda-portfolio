import { Analytics } from "@vercel/analytics/react";

import ScrollToTop from "./utils/ScrollToTop";

import AppRoutes from "./routes/AppRoutes";

function App() {

    return (

        <>

            <ScrollToTop />

            <AppRoutes />

            <Analytics />

        </>

    );

}

export default App;