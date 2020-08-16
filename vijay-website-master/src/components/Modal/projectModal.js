import React from "react";
import "./style.css";
import { Modal } from "../../components/Modal";

export class ProjectModal extends React.Component {
  render() {
    return (
      <Modal onCloseRequest={() => this.props.handleToggleModal()}>
        {this.props.modalContent}
      </Modal>
    );
  }
}
