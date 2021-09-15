import React from 'react'
import { PathContainer, PathMakerContainer, PathMakerChildrenContainer, ThePath, Unfolder } from './pathmaker.styles';

class PathMaker extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      waypoints: []
    }

    const { children } = this.props;

    // Dirty? Probably. Works? Also, probably, don't know yet, I hope I will remember to update this comment once I find out
    this.state.waypoints = children.map(child => React.cloneElement(
      child,
      {
        ref: React.createRef()
      }
    ))
  }

  componentDidMount(){
    this.paintPath();
  }

  paintPath = () => {
    console.log(this.state.waypoints.map(el => el.ref.current));
  }

  render(){
    return (
      <PathMakerContainer { ...this.props }>
        <PathContainer>
          <ThePath />
          <Unfolder />
        </PathContainer>
        <PathMakerChildrenContainer>
          { this.state.waypoints }
        </PathMakerChildrenContainer>
      </PathMakerContainer>
    )
  }
}

export default PathMaker