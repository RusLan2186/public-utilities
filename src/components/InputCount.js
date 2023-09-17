import React from 'react';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';

const InputCount = ({
  changeCountValue,
  countValue,
  label,
  alert,
  clickCountServices,
  changeAlert,
}) => {
  React.useEffect(() => {
    if (!countValue) {
      changeAlert('');
    }
  }, [countValue]);

  return (
    <div style={{ width: '100%' }}>
      <div className='alert'>
        {alert && <Alert severity='error'>Enter a number greater than 0 </Alert>}
      </div>
      <div className='count__item-wrapper'>
        <TextField
          id='outlined-basic'
          label={label}
          variant='outlined'
          value={countValue}
          placeholder='Enter number'
          onChange={(e) => changeCountValue(e.target.value)}
          autoComplete='off'
          sx={{
            width: '70%',
          }}
        />
        <Button onClick={() => clickCountServices(countValue)} variant='contained'>
          Calculate
        </Button>
      </div>
    </div>
  );
};

export default InputCount;
