import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

const Modal = ({
  cancelText,
  submitText,
  withCancel,
  onEnter,
  children,
  title,
  onClose,
  onSubmit,
  open,
}) => (
  <Dialog
    onClose={onClose}
    open={open}
    onEnter={onEnter}
    scroll="body"
  >
    <DialogTitle>
      {title}
    </DialogTitle>
    <DialogContent>
      {children}
    </DialogContent>
      <DialogActions>
        {withCancel && (
          <Button
            onClick={onClose}
            color="primary"
            size="large"
          >
            {cancelText}
          </Button>
        )}
        <Button
          onClick={onSubmit}
          color="primary"
          variant="contained"
          size="large"
        >
          {submitText}
        </Button>
      </DialogActions>
  </Dialog>
)

Modal.defaultProps = {
  cancelText: 'Cancel',
  submitText: 'Save',
  withCancel: true,
}

export default Modal
