

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface ScrollLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export default function ScrollLink({
  to,
  children,
  onClick,
  ...props
}: ScrollLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isHome = location.pathname === "/";
    const hash = to.startsWith("#") ? to : `#${to}`;

    if (!isHome) {
      navigate(`/${hash}`);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }


    if (onClick) onClick(e);
  };


  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
