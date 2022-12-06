import { InputHTMLAttributes } from "react";
import "./Field.css";
export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
  name = "",
  labelText = "",
  type = "",
  value = "",
  id = "",
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => { },
  ...rest
}: IFieldProps) => {
  return (
    // <fieldset className="input">
    //   <label htmlFor={name}>{labelText}</label>
    //   <input type={type} name={name} id={name} value={value} onChange={onChange} {...rest} />
    // </fieldset>
    <section className="container">
      <div className="formBox">
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className="formInput"
            placeholder=" "
            {...rest}
          />
          <label htmlFor={name} className="formLabel">{labelText}</label>
        </div>
    </section>
  );
};

export default Input;
