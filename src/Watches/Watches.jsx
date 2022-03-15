import React, { useState } from 'react';
import WatchesForm from './WatchesForm';
import WatchesList from './WatchesList';
import shortid from 'shortid';

function Watches() {
  const [form, setForm] = useState({id: '', name: '', timeZone: ''});
  const [clocks, setClocks] = useState([]);

  function inputForm({ target }) {
    setForm((prev) => {
      if (target.dataset.name === 'name') {
        return { ...prev, name: target.value };
      }
      if (target.dataset.timezone === 'timezone') {
        return { ...prev, timeZone: target.value };
      }
    })
  } 

  function onDelete({ target }) {
    const copy = clocks.filter((e) => e.id !== target.dataset.id);
    setClocks(copy);
  }

  function submitForm(e) {
    e.preventDefault();
    if (form.name === '' || form.timeZone === '') return;
    const copy = [...clocks, {id: shortid.generate(), name: form.name, timeZone: form.timeZone}];
    console.log(copy);
    setClocks(copy);
    setForm({id: '', name: '', timeZone: ''});
  } 

  return (
    <>
      <WatchesForm form={form} inputForm={inputForm} submitForm={submitForm}/>
      <WatchesList clocks={clocks} onDelete={onDelete}/>
    </>
  )
}

export default Watches
