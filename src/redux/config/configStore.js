// 중앙 state관리소, Store를 만드는 설정 코드들이 있는 파일

import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;
