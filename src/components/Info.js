import React from 'react';
import Grid from '@mui/material/Grid';

import { Card, CardMedia, Typography, CardContent } from '@mui/material';
import Comments from './Comments';
import { useSelector } from 'react-redux';

const iconShare = 'https://cdn-icons-png.flaticon.com/512/1358/1358023.png';

const Info = () => {
  const { searchInfoResult } = useSelector((store) => store.comments);

  return (
    <div>
      {searchInfoResult.length > 0 ? (
        <div>
          <Grid container spacing={2}>
            {searchInfoResult.map((item) => (
              <div className='info__wrapper' key={item.id}>
                <Grid item xs={5} sm={4} md={11.5}>
                  <Card sx={{ maxWidth: 600, height: '100' }}>
                    <CardMedia sx={{ height: 400 }} image={item.image} />
                    <CardContent>
                      <Typography gutterBottom variant='h4' component='div'>
                        {item.title}
                      </Typography>
                      <Typography variant='h5'> {item.price} </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            ))}
          </Grid>
        </div>
      ) : (
        <h1 className='not__found '>Not found</h1>
      )}

      <Comments />
    </div>
  );
};

export default Info;
