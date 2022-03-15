import React from 'react'
import PropTypes from 'prop-types'

function WatchesForm({ form, inputForm, submitForm }) {
  return (
    <form className='input-form'>
      <div className='form-name'>
        <label htmlFor="Name">Название</label>
        <input data-name='name' value={form.name} type='text' onChange={inputForm} required />
      </div>
      <div className='form-timezone'>
        <label htmlFor="Time zone">Временная зона</label>
        <input data-timezone='timezone' value={form.timeZone} type='number' onChange={inputForm} required />
      </div>
      <button className='btn-add' onClick={submitForm}>Добавить</button>
    </form>
  )
}

WatchesForm.propTypes = {
  form: PropTypes.object,
  inputForm: PropTypes.func,
  submitForm: PropTypes.func,
}

export default WatchesForm
