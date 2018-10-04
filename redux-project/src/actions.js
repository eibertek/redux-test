import { LOAD_CARD_PENDING, ONCHANGE_FORM, LOAD_CARD_SUCCESS, LOAD_CARD_FAILURE, SUBMIT_FORM } from "./store/reducers";
import axios from 'axios';

export const loadCardsInternet = async (id) => {
    const data = await axios.get(`http://www.mocky.io/v2/5bb6844b2e00000e006836f3`);
    const info = data ? data.data : {};
    return info;
}

export const onChangeForm = (evt) => ({
    type: ONCHANGE_FORM,
    name: evt.target.name,
    value: evt.target.value
});

export const submitForm = () => ({
    type: SUBMIT_FORM,
});

export const getInfoFromServer = (id, dispatch) => {
        dispatch({ type: LOAD_CARD_PENDING }); 
        try{
            loadCardsInternet(id).then(info => {
                    if(info.id !== 42){
                        dispatch({ type: LOAD_CARD_FAILURE, error: 'Wrong Id!'}); 
                    }else{
                        dispatch({ type: LOAD_CARD_SUCCESS, info}); 
                    }
            });    
        }catch(error){
            dispatch({ type: LOAD_CARD_FAILURE, error}); 
        }
};

export const loadCard = (item) => {    
    return { type: LOAD_CARD_PENDING, item }
}