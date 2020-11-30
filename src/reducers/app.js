import { combineReducers } from 'redux';
import center from './center';
import draggedItem from './draggedItem';
import markers from './markers';

const app = combineReducers({
    markers,
    draggedItem,
    center
});

export default app;
