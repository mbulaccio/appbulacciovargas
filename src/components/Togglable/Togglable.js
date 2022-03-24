import { useState, useImperativeHandle, forwardRef } from "react";
import './Togglable.css'

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <button className="buttonTogglable"
          onClick={toggleVisibility}
        >
          {props.buttonLabelShow}
        </button>
      </div>
      <div style={showWhenVisible}>
        <button className="Button" style={{ backgroundColor: "#db4025" }}
          onClick={toggleVisibility}
        >
          {props.buttonLabelHide ? props.buttonLabelHide : "Cancel"}
        </button>
        {props.children}
      </div>
    </div>
  );
});

export default Togglable;