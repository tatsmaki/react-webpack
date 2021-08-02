import React from 'react'
import ReactDOM from 'react-dom'
import { Close } from '@material-ui/icons'

// import { Input } from 'components/controls/Input'

const FormModal = (props) => {
  const { onClose } = props

  return ReactDOM.createPortal(
    <div className="form-modal" onClick={onClose}>
      <div className="form-body" onClick={(event) => event.stopPropagation()}>
        <span className="form-title">
          <span>Add Card</span>
          <Close className="close-icon" onClick={onClose} />
        </span>
        <div>
          <input />
          <input type="date" />
          <select name="select">
            <option value="value1">value1</option>
            <option value="value2">value2</option>
            <option value="value3">value3</option>
          </select>
          <input type="checkbox" />
          <span className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </span>
        </div>
      </div>
    </div>,
    document.getElementById('root')
  )
}

export { FormModal }
