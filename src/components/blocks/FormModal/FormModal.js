import React from 'react'
import ReactDOM from 'react-dom'
import { Close } from '@material-ui/icons'

import { Form } from 'components/blocks/Form'

const FormModal = (props) => {
  const { handleCardShift, onClose } = props

  return ReactDOM.createPortal(
    <div className="form-modal" onClick={onClose}>
      <div
        className="form-modal-body"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="form-modal-title">
          <span>New Card</span>
          <Close className="close-icon" onClick={onClose} />
        </span>
        <Form handleCardShift={handleCardShift} onClose={onClose} />
      </div>
    </div>,
    document.getElementById('root')
  )
}

export { FormModal }
