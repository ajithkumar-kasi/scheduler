"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
require("./index.css");
client_1.default.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
(0, jsx_runtime_1.jsx)(App_tsx_1.default, {})
// </React.StrictMode>
);
