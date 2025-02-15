import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, NotFoundPage } from "./pages";
import { useGlobalStore } from "./store";
import { useEffect } from "react";
import { getLang } from "./api";
import classNames from "./utils/classNames";
import AOS from "aos";
import "aos/dist/aos.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFoundPage /> },
]);
export default function AppRouter() {
  const { loadingLang, lang, setLoadingLang, setDataLang } = useGlobalStore();

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  useEffect(() => {
    handleGetInitLang(lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const handleGetInitLang = async (value: string) => {
    setLoadingLang(true);
    await getLang(value)
      .then((res) => {
        setLoadingLang(false);
        setDataLang(res[0]);
      })
      .catch(() => {
        setLoadingLang(false);
      });
  };

  return (
    <div className="wrap-app-router">
      <RouterProvider router={router} />

      <div
        className={classNames(
          "loading-page",
          loadingLang ? "show-loading" : "hidden-loading"
        )}
      >
        <div className="icon-loading" />
      </div>
    </div>
  );
}
