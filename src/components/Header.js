import React, { useEffect, useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchInfo } from './redux/slices/commentsSlice';
import { Container } from '@mui/material';

const Header = () => {
  const [searchValue, setSerarchValue] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchInfo(searchValue));
  };
  useEffect(() => {
    handleSearch();
  }, [searchValue]);

  return (
    <div>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position='static'>
          <Container>
            <Toolbar>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography
                variant='h4'
                component='div'
                sx={{ flexGrow: 3, position: 'relative', right: 80 }}
              >
                public utilities
              </Typography>
              <Typography
                variant='h6'
                color='white'
                component='div'
                sx={{ flexGrow: 1, color: 'white' }}
              >
                <NavLink to='/info'>
                  <span className='header__menu'>Info</span>
                </NavLink>
              </Typography>
              <Typography variant='h6' component='div' sx={{ flexGrow: 15 }}>
                <NavLink to='/count'>
                  <span className='header__menu'>Calculate the cost</span>
                </NavLink>
              </Typography>

              <input
                className='header__input'
                value={searchValue}
                onChange={(e) => setSerarchValue(e.target.value)}
                type='text'
                placeholder='Search...'
              />
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
