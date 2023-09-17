import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  countColdWater,
  countEnergy,
  countGaz,
  countHeating,
  countHotWater,
  countTotal,
} from './redux/slices/countSlice';
import InputCount from './InputCount';

const Count = () => {
  const [category, setCategory] = useState();
  const [countValue, setCountValue] = useState();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const { coldWaterCount, hotWaterCount, energyCount, gazCount, heatingCount, totalCount } =
    useSelector((store) => store.count);

  const enrgy = energyCount.toFixed(2);
  const total = totalCount.toFixed(2);

  const clickCountServices = (value) => {
    if (isFinite(value) && value && value !== ' ') {
      if (category === 10) {
        dispatch(countColdWater(value));
      }
      if (category === 20) {
        dispatch(countHotWater(value));
      }
      if (category === 30) {
        dispatch(countEnergy(value));
      }
      if (category === 40) {
        dispatch(countGaz(value));
      }
      if (category === 50) {
        dispatch(countHeating(value));
      }

      setCountValue('');
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  useEffect(() => {
    dispatch(countTotal());
  }, [coldWaterCount, hotWaterCount, energyCount, gazCount, heatingCount]);

  return (
    <div>
      <h1 className='title'>Select a category from the list</h1>
      <div className='select'>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Сategory</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label='Choose Cathegory'
          >
            <MenuItem value={10}>Cold Water</MenuItem>
            <MenuItem value={20}>Hot Water</MenuItem>
            <MenuItem value={30}>Electricity</MenuItem>
            <MenuItem value={40}>Gaz</MenuItem>
            <MenuItem value={50}>Heating</MenuItem>
          </Select>
        </FormControl>
      </div>
      {category === 10 && (
        <h2 className='subtitle'>
          Enter the number of cubes of cold water consumed and click "Calculate"
        </h2>
      )}
      {category === 20 && (
        <h2 className='subtitle'>
          Enter the number of hot water cubes consumed and click "Calculate"
        </h2>
      )}
      {category === 30 && (
        <h2 className='subtitle'>
          Enter the number of kilowatts of electricity consumed and click the "Calculate" button
        </h2>
      )}
      {category === 40 && (
        <h2 className='subtitle'>
          Enter the number of consumed cubic meters of gas and click the "Calculate" button
        </h2>
      )}
      {category === 50 && (
        <h2 className='subtitle'>Enter the number of sq.m. and click the "Calculate" button</h2>
      )}
      {category && (
        <InputCount
          changeCountValue={setCountValue}
          countValue={countValue}
          alert={alert}
          changeAlert={setAlert}
          clickCountServices={clickCountServices}
          label={'Data'}
        ></InputCount>
      )}

      {coldWaterCount > 0 && (
        <p className='result'>
          Cold water: <span>{coldWaterCount} UA </span>
        </p>
      )}

      {hotWaterCount > 0 && (
        <p className='result'>
          Hot water: <span>{hotWaterCount} UA</span>
        </p>
      )}
      {enrgy > 0 && (
        <p className='result'>
          Electricity: <span>{enrgy} UA </span>
        </p>
      )}
      {gazCount > 0 && (
        <p className='result'>
          Gaz: <span>{gazCount} UA</span>{' '}
        </p>
      )}
      {heatingCount > 0 && (
        <p className='result'>
          Heating: <span>{heatingCount} UA</span>{' '}
        </p>
      )}
      {total > 0 && (
        <h3 className='total__summ'>
          Total amount: <span>{total} UA </span>
        </h3>
      )}
    </div>
  );
};

export default Count;
