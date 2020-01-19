import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { changeToCreateFlag,deleteCategory } from '../../reducers/mainpage/actions';
import './ToolBar.css';

class ToolBar extends Component {
    createNewCategory = () => {
        this.props.changeToCreateFlag();
    }

    onDeleteCurrentCategory = () => {
        this.props.deleteCategory();
    }
    render() {
        const {currentCategory} = this.props;
        return (
            <div className={"toolbarWrapper"}>
                <div className={"title"}>
                    {currentCategory.name ? `${currentCategory.name}` : "category list"}
                </div>
                <div className={"actionBtnsWrapper"}>
                    {
                        currentCategory.id &&
                        <div className={"actionBtn deleteBtn"} onClick={this.onDeleteCurrentCategory}>delete</div>
                    }
                    {
                        !(currentCategory.id) &&
                        <div className={"actionBtn createNewCayegory"} onClick={this.createNewCategory}>Create</div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentCategory: state.mainpagereducer.selectedCatgory,
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeToCreateFlag,
        deleteCategory
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ToolBar);
