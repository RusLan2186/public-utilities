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
      <h1 className='title'>Выберите категорию из списка</h1>
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
            <MenuItem value={10}>Холодная Вода</MenuItem>
            <MenuItem value={20}>Горячая Вода</MenuItem>
            <MenuItem value={30}>Электроэнергия</MenuItem>
            <MenuItem value={40}>Газ</MenuItem>
            <MenuItem value={50}>Отопление</MenuItem>
          </Select>
        </FormControl>
      </div>
      {category === 10 && (
        <h2 className='subtitle'>
          Введите количество потребленных кубов холодной воды и нажмите "Рассчитать"
        </h2>
      )}
      {category === 20 && (
        <h2 className='subtitle'>
          Введите количество потребленных кубов горячей воды и нажмите "Рассчитать"
        </h2>
      )}
      {category === 30 && (
        <h2 className='subtitle'>
          Введите количество потребленных киловатт электроэнергии и нажмите кнопку "Рассчитать"
        </h2>
      )}
      {category === 40 && (
        <h2 className='subtitle'>
          Введите количество потребленных кубов газа и нажмите кнопку "Рассчитать"
        </h2>
      )}
      {category === 50 && (
        <h2 className='subtitle'>Введите количество м.кв и нажмите кнопку "Рассчитать"</h2>
      )}
      {category && (
        <InputCount
          changeCountValue={setCountValue}
          countValue={countValue}
          alert={alert}
          changeAlert={setAlert}
          clickCountServices={clickCountServices}
          label={'Данные'}
        ></InputCount>
      )}

      {coldWaterCount > 0 && (
        <p className='result'>
          Холодная вода: <span>{coldWaterCount} гр </span>
        </p>
      )}

      {hotWaterCount > 0 && (
        <p className='result'>
          Горячая вода: <span>{hotWaterCount} гр</span>
        </p>
      )}
      {enrgy > 0 && (
        <p className='result'>
          Электроэнергия: <span>{enrgy} гр </span>
        </p>
      )}
      {gazCount > 0 && (
        <p className='result'>
          Газ: <span>{gazCount} гр</span>{' '}
        </p>
      )}
      {heatingCount > 0 && (
        <p className='result'>
          Отопление: <span>{heatingCount} гр</span>{' '}
        </p>
      )}
      {total > 0 && (
        <h3 className='total__summ'>
          Общая сумма: <span>{total} гр </span>
        </h3>
      )}
    </div>
  );
};

export default Count;
