import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchVendor(){
    try{
      const response = yield axios.get('/api/vendor');
      yield put ({ type:'ADD_VENDOR', payload: response.data })
    }catch (error){
      console.log('error in Fetch', error);
      
    }
  }
  function* updateVendor(action) {
    try {
      yield axios.put('/api/vendor', action.payload);
      yield fetchVendor();
    } catch (error) {
      console.log('error in PUT ADMIN', error);
  
    }
  }
  function* deleteVendor(action){
    try{
      yield axios.delete(`/api/vendor`, {data: {id: action.payload}});
    }catch (err){
      console.log('DELETE ERROR:', err);
    }
  }

  // POST a new vendor
  function* createVendor(action) {
    try {
      yield axios.post(`/api/vendor`, action.payload)
      console.log('---IN POST VENDOR', action.payload);
      yield fetchVendor();
    } catch (error) {
        console.log('Error posting accepted offer:', error);
    }
  }

  function* vendorsSaga() {
    yield takeLatest('FETCH_VENDOR', fetchVendor);
    yield takeLatest('UPDATE_VENDOR', updateVendor);
    yield takeLatest('DELETE_VENDOR', deleteVendor);
    yield takeLatest('CREATE_VENDOR', createVendor);
  }
  
  export default vendorsSaga;