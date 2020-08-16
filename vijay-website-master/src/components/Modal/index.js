import React from "react";
import "./style.css";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import { isNil } from "lodash";

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleKeyUp = e => {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  handleOutsideClick = e => {
    const { onCloseRequest } = this.props;

    if (!isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        onCloseRequest();
        document.removeEventListener("click", this.handleOutsideClick, false);
      }
    }
  };

  render() {
    const { onCloseRequest, children } = this.props;

    return (
      <div className="modalOverlay">
        <div className="modal-wrapper" ref={node => (this.modal = node)}>
          <div className="modalContent">{children}</div>
          <button
            type="button"
            className="closeButton"
            onClick={onCloseRequest}
          >
            Esc
          </button>
        </div>
      </div>
    );
  }

  close(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}
