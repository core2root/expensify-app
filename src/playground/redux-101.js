import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) =>({
  type:'INCREMENT',
  incrementBy: incrementBy
});

const decrementBy = ({decrementBy = 1} = {}) => ({
  type:'DECREMENT',
  decrementBy: decrementBy
});

const set = ({count = 0 } = {}) => ({
  type:'SET',
  count:count
});

const reset = () => ({
  type:'RESET',
  count: 0
});

// Reducers
// 1. Reducer are pure functions (the output of the function depends only on the input).
// 2. Never change state or action directly !!! always just return new object with new values.

const countRducer = ((state = {count: 0}, action) => {
  console.log('running..',action.type);
  switch(action.type){
    case 'INCREMENT':
      return { count: state.count+action.incrementBy};
    case 'DECREMENT':
      //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy:1;
      return { count: state.count-action.decrementBy};
    case 'RESET':
      return { count: action.count};
    case 'SET':
      return {count: action.count}; 
    default: return state;
  }
});

const store = createStore(countRducer);

//function run each time state object is changed
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

/* store.dispatch({
  type: 'INCREMENT'
}); */
store.dispatch(incrementCount({incrementBy:5}));

//call to stop 'store.subscribe(...)'
//unsubscribe();

/* store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
}); */
store.dispatch(incrementCount());

/* store.dispatch({
  type:'DECREMENT',
  decrementBy:25
}) */
store.dispatch(decrementBy({decrementBy:124}))

//store.dispatch({type:'RESET'})
store.dispatch(reset());

/* store.dispatch({
  type:'DECREMENT'
}) */
store.dispatch(decrementBy());

/* store.dispatch({
  type:'SET',
  count:101
}); */
store.dispatch(set());
store.dispatch(set({count:23}));
