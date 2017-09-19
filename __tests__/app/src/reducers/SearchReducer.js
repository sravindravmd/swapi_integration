/**
 * Created by ravindras on 14/09/17.
 */
import { SEARCH_TEXT_CLEAR, SEARCH_TEXT_CHANGE, SEARCH_RESULTS } from '../types/types';

const INITIAL_STATE ={ searchText:'', search_results: []};

export default ( state = INITIAL_STATE , { type, payload }) => {

    switch (type) {

        case SEARCH_TEXT_CHANGE :
            return {...state, searchText: payload };

        case SEARCH_TEXT_CLEAR :
            return {...state, ...INITIAL_STATE };

        case SEARCH_RESULTS :
            return {...state, search_results: payload };

        default:
            return state;
    }
}