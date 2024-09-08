import { ChangeEvent, InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";
import clsx from "clsx";

interface InputProps {
  className: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const { className, type, onChange } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange?.(value);
  };

  return (
    <div className={clsx(cls.InputWrapper, className)}>
      <input onChange={onChangeHandler} type={type} />
    </div>
  );
};
