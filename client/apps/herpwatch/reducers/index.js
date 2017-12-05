import { combineReducers } from 'redux';
import settings            from 'atomic-fuel/libs/reducers/settings';
import jwt                 from 'atomic-fuel/libs/reducers/jwt';
import application         from './application';
import reptile from './reptile';

const rootReducer = combineReducers({
  settings,
  jwt,
  application,
  reptile,
});

export default rootReducer;
