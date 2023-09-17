import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  infoItems: [
    {
      id: 1,
      title: 'Cold water',
      price: '25 UA per cubic meter',
      image:
        'https://www.depo.ua/uploads/284860/conversions/7545708d74af42920e549e8bb8a8dde3-wide-big.jpg',
    },
    {
      id: 2,
      title: 'Hot water',
      price: '80,62 UA per cubic meter',
      image: 'https://24tv.ua/resources/photos/news/201905/1153199.jpg?v=1661274608000',
    },
    {
      id: 3,
      title: 'Electricity',
      price: '2,64 UA /kW-hour',
      image: 'https://24tv.ua/resources/photos/news/202303/2283974.jpg?v=1680080853000',
    },
    {
      id: 4,
      title: 'Gaz',
      price: '7,9 UA for 1 m³',
      image: 'https://biz.liga.net/images/general/2021/01/06/20210106134908-8350.png?v=1609937024',
    },
    {
      id: 5,
      title: 'Heating',
      price: '9,58 UAн for 1 cubic meter',
      image: 'https://gx.net.ua/news_images/1608821915.jpg',
    },
  ],
  searchInfoResult: [],
};
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    loadComments(state, action) {
      state.comments = action.payload;
    },

    searchInfo(state, action) {
      state.searchInfoResult = state.infoItems.filter(
        (item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.price.includes(action.payload),
      );
    },
  },
});

export const { loadComments, searchInfo } = commentsSlice.actions;
export const fetchComments = () => ({ type: FETCH_COMMENTS });

export default commentsSlice.reducer;
