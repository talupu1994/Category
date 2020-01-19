import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { saveCategory,createNewCategoty } from '../../reducers/mainpage/actions';
import {ACTION} from '../../reducers/mainpage/types';
import './CategoryForm.css'


class CategoryForm extends Component{
    constructor(props){
        super(props);

        this.state={
            currentValue:""
        }
    }

    
    componentDidUpdate(prevProps){
        const {currentCategory} = this.props;
        if(currentCategory.id && currentCategory.id !== prevProps.currentCategory.id){
            this.setState({currentValue:currentCategory.name});
        }
    }

    onChangeValue = (newVal) => {
        this.setState({currentValue:newVal});
    }

    saveCategory = () => {
        const {currentValue} = this.state;
        const {currentCategory,actionFlag} = this.props;
        if(!currentValue){
            alert("cant save empty value");
        }
        switch(actionFlag){
            case ACTION.create:{
                this.props.createNewCategoty(currentValue);
                break;
            }
            case ACTION.edit:{
                this.props.saveCategory({name:currentValue,id:currentCategory.id});
            }
        }
        
    }

    render(){
        const {currentValue} = this.state;
        const {actionFlag,currentCategory} = this.props;
        console.log(currentCategory);
        if(actionFlag === ACTION.none) return "";
        return(
            <div className={"formWrapper"}>
                <div className={"titleWrapper"}>{currentCategory.name}</div>
                <div className={"inputsWrapper"}>
                    <div className={"row"}>
                        <label>Name:</label>
                        <input type="text" value={currentValue} onChange={(e) => this.onChangeValue(e.target.value)}/>
                    </div>

                    <div className={"saveBtn"} onClick={this.saveCategory}>
                        Save
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentCategory: state.mainpagereducer.selectedCatgory,
        actionFlag : state.mainpagereducer.currentAction
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveCategory,
        createNewCategoty
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryForm);