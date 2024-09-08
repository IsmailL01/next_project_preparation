import { useTranslation } from "react-i18next";
import cls from "./navHeader.module.scss";
import { NavLink } from "react-router-dom";
import { navItems } from "../lib/items";

export const NavHeader = () => {
  const { t } = useTranslation("navHeader");

  return (
    <nav className={cls.navHeader}>
      <div className={cls.navItemsWrapper}>
        {navItems.map(({ text, to }, index) => (
          <NavLink to={to} key={index}>
            {t(text)}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
