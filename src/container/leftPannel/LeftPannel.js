import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { selectCurrentCategory,setCategoryList } from '../../reducers/mainpage/actions';
import './LeftPannel.css';

class LeftPannel extends Component {
    

    componentDidMount(){
        const listFromStorage = localStorage.getItem("categotyList");
        if(listFromStorage === 'null' || listFromStorage === ''){
            this.props.setCategoryList([]);
        }
        else{
            this.props.setCategoryList(JSON.parse(listFromStorage));
        }
        
    }

    onCayegorySelected = (categoryId) => {
        this.props.selectCurrentCategory(categoryId);
    }

    render() {
        const {currentCategory,categoryList} = this.props;
        return (
            <div className={"leftPannelWrapper"}>
                {
                    categoryList &&
                    categoryList.map((category) => {
                        const {id,name} = category;
                        let clsName = "categotyItem"
                        if(id === currentCategory.id) clsName += " active";
                        return(
                            <div key={id} className={clsName} onClick={() => this.onCayegorySelected(id)}>
                                {name}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentCategory: state.mainpagereducer.selectedCatgory,
        categoryList : state.mainpagereducer.categoryList
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectCurrentCategory,
        setCategoryList
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftPannel);
