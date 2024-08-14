import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const onClickHandler = (event) => {
        console.log(value);
    }
    const onChangeHandler = (event) => {
        setValue(event.target.value)
    }
    return (
    <>
        <QRCodeSVG value="Привет мир!!!" />
        <input type="text" value={value} onChange={onChangeHandler}/>
        <button type='button' onClick={onClickHandler}>Сгенерировать</button>
    </>
    )
    
}