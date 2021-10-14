import React from 'react'

import Popup from '../../popup/popup.component'
import { SkillItemBg, SkillItemCon, SkillItemImage } from './skill-item.styles'
import { CSSTransitionGroup } from 'react-transition-group'

import './skill-item.styles.css'

class SkillItem extends React.Component {
  state = {
    isPopupOpen: false
  }

  transitionGroupRef = React.createRef();

  openPopup = () => {
    this.setState({
      isPopupOpen: true
    })
  }

  onPopupClose = () => {
    this.setState({
      isPopupOpen: false
    })
  }

  render(){
    const { thumb, displayImg, children } = this.props;
    const { isPopupOpen } = this.state;

    return (
      <SkillItemCon>
        <SkillItemBg onClick={ () => this.openPopup() } className="skill-item-bg" />
        <SkillItemImage onClick={ () => this.openPopup() } src={ thumb } />
        <CSSTransitionGroup
          nodeRef={ this.transitionGroupRef }
          className="transition-container"
          transitionName="skills-popup"
          transitionAppear={true}
          transitionAppearTimeout={300}
          key={0}
        >
        {
          isPopupOpen ? (
            <div ref={ this.transitionGroupRef }>
              <Popup isOpen={ isPopupOpen } contentImg={ displayImg } onClose={ () => this.onPopupClose() } >
                { children }
              </Popup>
            </div>
          ) : null
        }
        </CSSTransitionGroup>
      </SkillItemCon>
    )
  }
}

export default SkillItem