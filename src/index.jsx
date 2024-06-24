import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import CartPage from "./pages/CartPage";
import StorePage from "./pages/StorePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={<App />} />,
  },
  {
    path: "/cart",
    element: <Layout children={<CartPage />} />,
  },
  {
    path: "/store",
    element: <Layout children={<StorePage />} />,
  },
]);

// Define a function to show install prompt
function showInstallPrompt() {
  const installButton = document.createElement("button");
  installButton.textContent = "Install App";
  installButton.style.background = "blue";
  installButton.style.color = "white";
  installButton.style.border = "none";
  installButton.style.padding = "10px 20px";
  installButton.style.cursor = "pointer";
  installButton.style.position = "fixed";
  installButton.style.bottom = "20px";
  installButton.style.right = "20px";
  installButton.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
    });
  });

  document.body.appendChild(installButton);
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPrompt(); // Function to show your custom installation prompt
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
