import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "./qrCodeGenerator.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [valueQr, setValueQr] = useState("");
  const [isShowQR, setIsShowQR] = useState(false);
  const onClickHandler = (event) => {
    setIsShowQR(true);
    setValueQr(value);
    setValue("");
  };
  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="content">
      <h1 className="title">Сгенерировать QR код</h1>
      <div className="prompt">
        <input
            type="text"
            value={value}
            onChange={onChangeHandler}
            className="input"
            placeholder="Введите текст ..."
        />
        <button type="button" onClick={onClickHandler} className="button">
            Сгенерировать
        </button>
      </div>
      {isShowQR && <QRCodeSVG value={valueQr} />}
    </div>
  );
};
