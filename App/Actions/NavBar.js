import { SET_NAV_BAR_LABEL } from './types';

export const setNavBarLabel = (index) => {
    return (dispatch) => {
        let label = '';
        switch (index) {
            case 0:
                label = 'Thực hành';
                break;
            case 1:
                label = 'Hướng dẫn';
                break;
            case 2:
                label = 'Thư viện';
                break;
            case 3:
                label = 'Câu hỏi';
                break;
            default:
                label = 'Thực hành';
                break;
        }
        dispatch({
            type: SET_NAV_BAR_LABEL,
            payload: label
        })
        
    }
}