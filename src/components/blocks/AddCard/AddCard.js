import React, { useState } from 'react'
import { Add } from '@material-ui/icons'

import { FormModal } from 'components/blocks/FormModal'

const AddCard = (props) => {
  const { handleCardShift } = props

  const [isModal, setIsModal] = useState(false)

  const handleOpenModal = () => {
    setIsModal(true)
  }

  const handleCloseModal = (event) => {
    if (event) {
      event.stopPropagation()
    }
    setIsModal(false)
  }

  return (
    <div className="add-card" onClick={handleOpenModal}>
      {isModal && (
        <FormModal
          handleCardShift={handleCardShift}
          onClose={handleCloseModal}
        />
      )}
      <Add fontSize="large" />
    </div>
  )
}

export { AddCard }
