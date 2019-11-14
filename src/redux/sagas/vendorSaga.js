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

  function* getInspectors(){
    try{
      const response = yield axios.get('/api/step6/vendors');
      yield put({type: 'SET_INSPECTORS', payload: response.data});

    } catch (error){
      console.log('error getting inspection vendors');
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
  function* vendorsSaga() {
    yield takeLatest('FETCH_VENDOR', fetchVendor);
    yield takeLatest('UPDATE_VENDOR', updateVendor);
    yield takeLatest('DELETE_VENDOR', deleteVendor);
    yield takeLatest('GET_INSPECTORS', getInspectors);
  }
  
  export default vendorsSaga;