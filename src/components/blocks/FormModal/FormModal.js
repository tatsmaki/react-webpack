import React from 'react'
import ReactDOM from 'react-dom'
import { Close } from '@material-ui/icons'

import { Input } from 'components/controls/Input'
import { Select } from 'components/controls/Select'
import { DateInput } from 'components/controls/DateInput'
import { loremIpsum } from 'helpers'

const FormModal = (props) => {
  const { handleCardShift, onClose } = props

  const handleSubmit = (event) => {
    event.preventDefault()

    const card = {
      id: Math.random(),
      title: event.target.title.value,
      description: loremIpsum.generateParagraphs(1),
      author: event.target.author.value,
      createdAt: event.target.createdAt.value,
    }

    handleCardShift(card)
    onClose()
  }

  return ReactDOM.createPortal(
    <div className="form-modal" onClick={onClose}>
      <div className="form-body" onClick={(event) => event.stopPropagation()}>
        <span className="form-title">
          <span>New Card</span>
          <Close className="close-icon" onClick={onClose} />
        </span>
        <form className="form" onSubmit={handleSubmit}>
          <Input name="title" placeholder="Add Title" />
          <Select name="author" />
          <DateInput name="createdAt" />
          <input type="checkbox" />
          <span className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </span>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>,
    document.getElementById('root')
  )
}

export { FormModal }
