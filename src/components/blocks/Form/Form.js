import React, { useState } from 'react'

import { Input } from 'components/controls/Input'
import { Select } from 'components/controls/Select'
import { DateInput } from 'components/controls/DateInput'
import { NumberInput } from 'components/controls/NumberInput'
import { Checkbox } from 'components/controls/Checkbox'
import { Radio } from 'components/controls/Radio'
import { Button } from 'components/controls/Button'
import { FormError } from 'components/blocks/FormError'

import { loremIpsum } from 'helpers'
import { RANDOM_IMAGE } from 'constants'

const Form = (props) => {
  const { handleCardShift, onClose } = props

  const [errors, setErrors] = useState(Array(5).fill(false))
  const [titleError, authorError, dateError, likesError, imageError] = errors

  const handleSubmit = (event) => {
    event.preventDefault()

    const title = event.target.title.value
    const author = event.target.author.value
    const createdAt = event.target.createdAt.value
    const isFavorite = Boolean(event.target.isFavorite.checked)
    const likes = Number(event.target.likes.value - Number(isFavorite))
    const isImage = event.target.image.value
    const image = isImage === 'Yes' ? `${RANDOM_IMAGE}${Math.random()}` : ''

    const noTitleError = !title || typeof title !== 'string'
    const noAuthorError = !author || typeof author !== 'string'
    const noDateError = !createdAt || typeof createdAt !== 'string'
    const noLikesError = isFavorite ? likes < 0 : false
    const noImageError = isImage === '' || typeof isImage !== 'string'
    const formErrors = [
      noTitleError,
      noAuthorError,
      noDateError,
      noLikesError,
      noImageError,
    ]

    if (formErrors.every((error) => !error)) {
      const card = {
        id: Math.random(),
        image,
        title,
        description: loremIpsum.generateParagraphs(1),
        author,
        createdAt,
        isFavorite,
        likes,
        views: 1 + Math.round(likes * Math.random() * 100),
      }

      handleCardShift(card)
      onClose()
    }
    setErrors(formErrors)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input name="title" placeholder="Add Title" />
      <FormError isError={titleError} message="Add title." />

      <span className="label">Select Author</span>
      <Select name="author" options={['You', 'Kate', 'Ayaka', 'Kadzuha']} />
      <FormError isError={authorError} message="Select author." />

      <span className="label">Set Date</span>
      <DateInput name="createdAt" />
      <FormError isError={dateError} message="Select date." />

      <span className="label">Add many likes</span>
      <span className="form-likes">
        <NumberInput name="likes" min={0} />
        <Checkbox name="isFavorite" />
        <span>Add to Favorite</span>
      </span>
      <FormError isError={likesError} message="Add more likes." />

      <span className="label">Do you want to see image?</span>
      <span className="radio-group">
        <Radio name="image" value="Yes" label="Yes" />
        <Radio name="image" value="No" label="No" />
      </span>
      <FormError isError={imageError} message="Make your choice." />

      <Button type="submit">Submit</Button>
    </form>
  )
}

export { Form }
