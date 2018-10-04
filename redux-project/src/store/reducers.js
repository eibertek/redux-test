const initialStore = {
    cards: [],
    form: {
        name:'',
        tag:''
    }
}

export const NOCASE = "[ROOT][CASE] there no case";
export const LOAD_CARD_PENDING = "[CARD][LOAD] LOAD Action pending";
export const LOAD_CARD_SUCCESS = "[CARD][LOAD] LOAD Action SUccess";
export const LOAD_CARD_FAILURE = "load card failure";
export const ONCHANGE_FORM = "[FORM][ONCHANGE] change form";
export const SUBMIT_FORM = "[FORM][SUBMIT] submit form"

export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export default (store = initialStore, action) => {
  switch (action.type) {
    case LOAD_CARD_PENDING:
        return { ...store, status: PENDING }
    case LOAD_CARD_SUCCESS:
        return { ...store, status: SUCCESS, cards: [...store.cards, action.info] }
    case LOAD_CARD_FAILURE:
        return { ...store, status: FAILURE, error: action.error }
    case ONCHANGE_FORM:
        return { ...store, form: { ...store.form, [action.name]:action.value, } };
    case SUBMIT_FORM:
        const card = {
            name: store.form.name,
            tag: store.form.tag,
        }
        return { ...store, cards: [...store.cards, card], form: { name: '', tag: ''} };
    case NOCASE:
        return { ...store }

  default:
    return store;
  }
}

