import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  infoItems: [
    {
      id: 1,
      title: 'Холодная Вода',
      price: '25 гр за кубометр',
      image:
        'https://www.depo.ua/uploads/284860/conversions/7545708d74af42920e549e8bb8a8dde3-wide-big.jpg',
    },
    {
      id: 2,
      title: 'Горячая Вода',
      price: '80,62 гр за кубометр',
      image: 'https://24tv.ua/resources/photos/news/201905/1153199.jpg?v=1661274608000',
    },
    {
      id: 3,
      title: 'Электричество',
      price: '2,64 грн/кВт-час',
      image: 'https://24tv.ua/resources/photos/news/202303/2283974.jpg?v=1680080853000',
    },
    {
      id: 4,
      title: 'Газ',
      price: '7,9 грн. за 1 м³, (с НДС)',
      image: 'https://biz.liga.net/images/general/2021/01/06/20210106134908-8350.png?v=1609937024',
    },
    {
      id: 5,
      title: 'Отопление',
      price: '9,58 грн за 1 кв.м',
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
