import React from 'react'
import ReactDOM from 'react-dom'
import { Close } from '@material-ui/icons'

import { Input } from 'components/controls/Input'
import { Select } from 'components/controls/Select'
import { DateInput } from 'components/controls/DateInput'
import { NumberInput } from 'components/controls/NumberInput'
import { Checkbox } from 'components/controls/Checkbox'
import { Radio } from 'components/controls/Radio'
import { Button } from 'components/controls/Button'
import { loremIpsum } from 'helpers'
import { RANDOM_IMAGE } from 'constants'

const FormModal = (props) => {
  const { handleCardShift, onClose } = props

  const handleSubmit = (event) => {
    event.preventDefault()

    const title = event.target.title.value
    const author = event.target.author.value
    const createdAt = event.target.createdAt.value
    const isFavorite = Boolean(event.target.isFavorite.checked)
    const liked = Number(event.target.liked.value - Number(isFavorite))
    const isImage = event.target.image.value
    const image = isImage === 'Yes' ? `${RANDOM_IMAGE}${Math.random()}` : ''

    const noTitleError = !title || typeof title !== 'string'
    const noAuthorError = !author || typeof author !== 'string'
    const noDateError = !createdAt || typeof createdAt !== 'string'
    const noLikesError = isFavorite ? liked < 0 : false
    const noImageError = isImage === '' || typeof isImage !== 'string'

    console.warn('noTitleError', noTitleError)
    console.log('noAuthorError', noAuthorError)
    console.log('noDateError', noDateError)
    console.warn('noLikesError', noLikesError)
    console.warn('noImageError', noImageError)

    if (
      !noTitleError &&
      !noAuthorError &&
      !noDateError &&
      !noLikesError &&
      !noImageError
    ) {
      const card = {
        id: Math.random(),
        image,
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

          <span className="label">Select Author</span>
          <Select name="author" />

          <span className="label">Set Date</span>
          <DateInput name="createdAt" />

          <span className="label">Add many likes</span>
          <span className="form-likes">
            <NumberInput name="liked" min={0} />
            <Checkbox name="isFavorite" />
            <span>Add to Favorite</span>
          </span>

          <span className="label">Do you want to see image?</span>
          <span className="radio-group">
            <Radio name="image" value="Yes" label="Yes" />
            <Radio name="image" value="No" label="No" />
          </span>

          <span className="label" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>,
    document.getElementById('root')
  )
}

export { FormModal }
