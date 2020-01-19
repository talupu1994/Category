import React,{Component,Fragment} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './mainPage.css';
import ToolBar from '../ToolBar/ToolBar';
import LeftPannel from '../leftPannel/LeftPannel';
import CategoryForm from '../CategoryForm/CategoryForm';

class MainPage extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        const {currentCategory} = this.props;
        return(
            <Fragment>
                <ToolBar/>
                <div className={"workSpaceWrapper"}>
                    <LeftPannel/>
                    <CategoryForm/>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currentCategory: state.mainpagereducer.selectedCatgory,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    },dispatch);
  }
export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
