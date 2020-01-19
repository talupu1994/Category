import {ADD_NEW_CATEGORY,
    DELETE_CATEGORY,
    SAVE_CATEGORY,
    SELECT_CATEGORY,
    SET_CATEGORY_LIST,
    CHANGE_ACTION_FLAG,
    ACTION} from './types';

var initState = {
    categoryList:[],
    selectedCatgory:{},
    currentAction:ACTION.none
};

export default function (state = initState,action){
    switch(action.type){
        case ADD_NEW_CATEGORY:{
            const {categoryList = []} = state;
            if(categoryList.length > 0){
                const maxId = Math.max.apply(Math, categoryList.map((category) => { return category.id; }));
                action.payload.id = maxId + 1;
            }
            else{
                action.payload.id = 1;
            }
            categoryList.push(action.payload);
            localStorage.setItem("categotyList",JSON.stringify(categoryList));
            return {
                ...state,
                categoryList:[...categoryList]
            };
        }
        case DELETE_CATEGORY:{
            const {categoryList,selectedCatgory} = state;
            const newCategoryList = categoryList.filter(category => category.id !== selectedCatgory.id);
            localStorage.setItem("categotyList",JSON.stringify(newCategoryList));
            return{
                ...state,
                categoryList:newCategoryList,
                selectedCatgory:{},
                currentAction:ACTION.none
            };
            
        }
        case SAVE_CATEGORY:{
            const {categoryList,selectedCatgory} = state;
            const {name,id} = action.payload;
            const categoryToEdit = categoryList.find(category => category.id===id);
            if(categoryToEdit){
                categoryToEdit.name = name;
                selectedCatgory.name = name;
            }
            localStorage.setItem("categotyList",JSON.stringify(categoryList));
            return{
                ...state,
                categoryList:[...categoryList],
                selectedCatgory:{...selectedCatgory}
            }
        }
        case SELECT_CATEGORY:{
            const {categoryList} = state;
            const {payload} = action;
            const id = payload;
            const categoryToSelect = categoryList.find(category => category.id===id);
            return{
                ...state,
                selectedCatgory:{...categoryToSelect},
                currentAction : ACTION.edit
            }
        }
        case SET_CATEGORY_LIST:{
            localStorage.setItem("categotyList",(JSON.stringify(action.payload) || []));
            return{
                ...state,
                categoryList:action.payload
            }
        }
        case CHANGE_ACTION_FLAG:{
            return{
                ...state,
                currentAction : action.payload
            }
        }
        default:{
            return {...state};
        }
    }
}