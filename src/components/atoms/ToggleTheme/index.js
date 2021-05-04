import React, { useState } from 'react'
import { FormControlLabel, FormGroup, Switch } from '@material-ui/core'
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import './style.scss'

const ToggleTheme = () => {
  const [checked, setChecked] = useState(true)

  const handleChange = () => {
    setChecked(!checked);
    if(checked){
      document.body.classList.add('dark-mode')
      document.getElementById('footer-img').src = '/imgs/footer_dark.png'
    }else{
      document.body.classList.remove('dark-mode')
      document.getElementById('footer-img').src = '/imgs/footer.png'
    }
  }

  return (
    <FormGroup className='form-group-toggle'>
      <FormControlLabel
        className='toggle-label'
        control={<Switch checked={checked} onChange={handleChange} />}
        label={<BrightnessMediumIcon className='toggle-icon'/>}
      />
    </FormGroup>
  )
}

export default ToggleTheme
