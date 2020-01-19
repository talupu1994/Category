import {ADD_NEW_CATEGORY,
    DELETE_CATEGORY,
    SAVE_CATEGORY,
    SELECT_CATEGORY,
    SET_CATEGORY_LIST,
    CHANGE_ACTION_FLAG,
    ACTION} from './types';

export const createNewCategoty = (name) => {
    return {
        type: ADD_NEW_CATEGORY,
        payload:{
            name
        }
    };
}

export const deleteCategory = (id) => {
    return{
        type:DELETE_CATEGORY,
    }
}

export const saveCategory = (payload)=>{
    return{
        type :SAVE_CATEGORY,
        payload
    }
}

export const selectCurrentCategory = (id) => {
    return{
        type:SELECT_CATEGORY,
        payload:id
    }
}

export const setCategoryList = (categoryList) => {
    return{
        type:SET_CATEGORY_LIST,
        payload:categoryList
    }
}

export const changeToEditFlag = () => {
    return {
        type:CHANGE_ACTION_FLAG,
        payload:ACTION.edit
    }
}

export const changeToCreateFlag = () => {
    return {
        type:CHANGE_ACTION_FLAG,
        payload:ACTION.create
    }
}