import * as React from "react";
interface Props {
  handleChange: (passowr: string) => any;
  text: string;
  label: string;
  type?: string;
  error?: boolean;
  errorMsg?: string | null;
}

class PasswordInput extends React.PureComponent<Props, {}> {
  public render() {
    const { handleChange, text, label, error, errorMsg, type } = this.props;
    return (
      <div className="HydroSDK-fieldGroup">
        <div className="HydroSDK-labelGroup">
          <div className="HydroSDK-label">{label}</div>
          <div className="HydroSDK-errorMsg">{errorMsg}</div>
        </div>
        <input
          className={`HydroSDK-input${error ? " HydroSDK-error" : ""}`}
          type={type || "password"}
          value={text}
          onChange={e => handleChange(e.target.value)}
        />
      </div>
    );
  }
}

export default PasswordInput;
