import cls from "./dropDownList.module.scss";

const DropDownListData = {
  component: "корпус",
  componentList: [
    { id: "01", product: "SFF 300W", price: 500 },
    { id: "02", product: "MATX 400W", price: 500 },
    { id: "03", product: "ATX 450W", price: 500 },
  ],
};

export const DropDownList = () => {
  return (
    <div className={cls.dropDownList}>
      <p>{DropDownListData.component}</p>
      <select>
        <option>Выберите {DropDownListData.component}</option>
        {DropDownListData.componentList.map((item) => (
          <option key={item.id} value={item.product}>
            {item.product}
          </option>
        ))}
      </select>
    </div>
  );
};
