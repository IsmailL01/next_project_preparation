// src\app\pages\pageHome\page.tsx

import Image from "next/image";
import Link from "next/link";
import cls from "./pageHome.module.scss";

export default function PageHome() {
  return (
    <div className={cls.pageHome}>
      <h1>главная страница</h1>
      <Link href="/pages/pageUser">Link pageUser</Link>
    </div>
  );
}
