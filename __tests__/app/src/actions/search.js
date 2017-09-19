/**
 * Created by ravindras on 14/09/17.
 */

import { SEARCH_TEXT_CHANGE, SEARCH_TEXT_CLEAR, SEARCH_RESULTS } from '../types/types';
import service from '../services/Services';

export const searchTextChanged = ( text ) => {

    return (dispatch) => {
        dispatch({
            type: SEARCH_TEXT_CHANGE,
            payload: text
        });

        service.search(text)
            .then((result) => {
                console.log('Result of Search', result);
                dispatch({
                    type: SEARCH_RESULTS,
                    payload: result.results
                })

            })
            .catch(err => console.log('error'));

    }

};

export const searchTextClear = () => {
    return {
        type: SEARCH_TEXT_CLEAR
    }
};