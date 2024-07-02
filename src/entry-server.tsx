// import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
// import App from "./App";
import CustomRouter from "./router";

interface IRenderProps {
  path: string;
}

export function render({ path }: IRenderProps) {
  const html = ReactDOMServer.renderToString(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>

    <StaticRouter location={path}>
      // <CustomRouter />
      //{" "}
    </StaticRouter>
  );
  return { html };
}

// MODIFICATION FROM STACK OVERFLOW WEBSITE NOT YET APPLIED

// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom/server";
// import { Router } from "./router";

// interface IRenderProps {
//     path: string;
// }

// export const render = ({ path }: IRenderProps) => {
//     return ReactDOMServer.renderToString(
//         <StaticRouter location={path}>
//             <Router />
//         </StaticRouter>
//     );
// };
