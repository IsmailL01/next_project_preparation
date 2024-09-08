import cls from "./pageWrapper.module.scss";
import { ReactNode } from "react";
import { Header } from "../../../widgets/header/ui/Header";
import { Footer } from "../../../widgets/footer/ui/Footer";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cls.app}>
      <Header />
      <main className='main'>
        <div className='Home__inner'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
