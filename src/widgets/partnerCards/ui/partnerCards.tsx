import { partnersItems } from "../lib/items";
import cls from "./partnerCard.module.scss";

export const PartnerCards = () => {
  return (
    <ul className={cls.partnerCard}>
      {partnersItems.map(({ partner, url }, index) => (
        <li className={cls.partnerCardItem} key={index}>
          <a className={cls.partnerCardLink} href={url}>
            <img className={cls.partnerCardLogo} src={partner} alt='' />
          </a>
        </li>
      ))}
    </ul>
  );
};
