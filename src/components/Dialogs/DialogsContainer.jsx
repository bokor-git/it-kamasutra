
import {sendMassageCreator, updateNewMassageBodyCreator} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state)=>{
    return {
        dialogsData: state.profilePage.dialogsData,
        massageData: state.profilePage.massageData,
        newMassageBody: state.profilePage.newMassageBody
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        onNewMessageChange: (body)=>{dispatch(updateNewMassageBodyCreator(body))},
        onSendMassageButtonClick: ()=>{dispatch(sendMassageCreator())}
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;

