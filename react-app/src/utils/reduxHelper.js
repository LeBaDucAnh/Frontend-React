import { useSelector } from "react-redux";
import { useStore } from "react-redux";

function stateEqual(state1, state2) {
  for(let key in state1) {
    if(state1[key] !== state2[key]) {
      return false;
    }
  }
  return true;
}

export function useMapSelector(mapFunc) {
  return useSelector(mapFunc, stateEqual);
}

export function useSliceSelector(namespace, keys) {
  let preKeys = namespace.split('/');
  return useMapSelector(globalState => {
      let pageStates = globalState;
      preKeys.forEach(preKey => pageStates = pageStates[preKey] || {});
      let selectedStates = [];
      keys.forEach(key => selectedStates.push(pageStates[key]));
      return selectedStates;
    }
  );
}

class SliceStore {
  constructor(namespace, store) {
    this._namespace = namespace;
    this._store = store;
  }

  dispatch(action) {
    this._store.dispatch({
      type: `${this._namespace}/${action.type}`, 
      payload: action.payload
    });
  }

  dispatchGlobal(action) {
    this._store.dispatch(action);
  }

  setState(payload) {
    this._store.dispatch({
      type: `${this._namespace}/setState`, 
      payload: payload
    });
  }

  getState() {
    let keys = this._namespace.split('/');
    let state = this._store.getState();
    keys.forEach(key => state = state[key] || {});
    return state; 
  }

  getGlobalState() {
    return this._store.getState();
  }
}

export function useSliceStore(namespace) {
  let store = useStore();
  return new SliceStore(namespace, store);
}