import React from 'react'
import ReactDOM from 'react-dom'
import { Close } from '@material-ui/icons'

import { Input } from 'components/controls/Input'
import { Select } from 'components/controls/Select'
import { DateInput } from 'components/controls/DateInput'
import { NumberInput } from 'components/controls/NumberInput'
import { Checkbox } from 'components/controls/Checkbox'
import { Button } from 'components/controls/Button'
import { loremIpsum } from 'helpers'

const FormModal = (props) => {
  const { handleCardShift, onClose } = props

  const handleSubmit = (event) => {
    event.preventDefault()

    const title = event.target.title.value
    const author = event.target.author.value
    const createdAt = event.target.createdAt.value
    const isFavorite = Boolean(event.target.isFavorite.checked)
    const liked = Number(event.target.liked.value - Number(isFavorite))

    const noTitleError = !title
    const noLikesError = isFavorite ? liked < 0 : false
    console.log('noTitleError', noTitleError)
    console.log('noLikesError', noLikesError)

    if (title && author && createdAt && !noTitleError && !noLikesError) {
      const card = {
        id: Math.random(),
        image: `https://source.unsplash.com/random?sig=${Math.random()}`,
        title,
        description: loremIpsum.generateParagraphs(1),
        author,
        createdAt,
        isFavorite,
        liked,
        viewed: Math.round(liked * Math.random() * 100),
      }

      handleCardShift(card)
      onClose()
    }
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
          <span>Select Author</span>
          <Select name="author" />
          <span>Set Date</span>
          <DateInput name="createdAt" />
          <span>Add many likes</span>
          <span className="form-likes">
            <NumberInput name="liked" min={0} />
            <Checkbox name="isFavorite" />
            <span>Add to Favorite</span>
          </span>
          <span className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </span>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>,
    document.getElementById('root')
  )
}

export { FormModal }
