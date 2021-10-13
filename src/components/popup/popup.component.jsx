import React from 'react'
import { PopupBg, PopupClose, PopupCon, PopupContent, PopupContentCon, PopupContentDesc, PopupContentImg } from './popup.styles'
import CloseImg from '../../assets/icons/close.svg'

class Popup extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: this.props.isOpen !== undefined ? this.props.isOpen : false
    }
  }

  close = () => {
    if(this.props.onClose !== undefined){
      this.props.onClose();
      return;
    }

    this.setState({
      isOpen: false
    })
  }

  open = () => {
    this.setState({
      isOpen: true
    })
  }

  render(){
    const isOpen = this.props.isOpen !== undefined ? this.props.isOpen : this.state.isOpen;
    const { children, contentImg } = this.props;

    return (
      <PopupCon isOpen={ isOpen }>
        
        <PopupBg onClick={ () => this.close() } />

        <PopupContentCon>
          <PopupClose onClick={ () => this.close() } src={ CloseImg } />
          <PopupContent>
            <PopupContentImg src={ contentImg } />
            <PopupContentDesc>
              { children }
            </PopupContentDesc>
          </PopupContent>
        </PopupContentCon>

      </PopupCon>
    )
  }
}

export default Popup