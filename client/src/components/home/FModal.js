import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap'

class FModal extends Component {
    render() {

        return(
            <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Congratulations!</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>We have found 3 others that share common interests with you!</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Decline</Button>
    <Button variant="primary">Accept</Button>
  </Modal.Footer>
</Modal.Dialog>

        );

    }

}
export default FModal;