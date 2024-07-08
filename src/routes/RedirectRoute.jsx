import { Navigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const RedirectRoute = ({ component: Component, redirectTo = "/" }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return isMobile ? Component : <Navigate to={redirectTo} />;
};
