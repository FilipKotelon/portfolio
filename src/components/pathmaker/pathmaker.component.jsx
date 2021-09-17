import React from 'react'
import { ScrollPercentage } from 'react-scroll-percentage'
import { distBetweenPoints } from '../../utility/utility.functions';

import { PathContainer, PathMakerContainer, PathMakerChildrenContainer, ThePath, Unfolder } from './pathmaker.styles';

class PathMaker extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      waypoints: [],
      unfolderDashOffset: 0,
      pathLength: 0,
      pathDefinition: ''
    }

    this.pathMakerRef = React.createRef();
    this.unfolderRef = React.createRef();

    const { children, hideChildrenBeforeScroll } = this.props;

    // Create waypoints based on the children
    this.state.waypoints = children.map((child, i) => {
      const data = {
        ref: React.createRef(),
        key: `path-maker-${i}`,
        shown: hideChildrenBeforeScroll ? false : true
      }

      return React.cloneElement(
        child,
        data
      )
    })
  }

  componentDidMount(){
    this.paintPath();
  }

  /**
   * Will re-render only if the path definition has been created / changed to update the path length (which needs to be applied to the svg path first to get the length)
   */
  componentDidUpdate(prevProps, prevState){
    const { pathDefinition } = this.state;

    if(prevState.pathDefinition !== pathDefinition){
      const pathLength = this.unfolderRef.current.getTotalLength()
      if(!pathLength) return;

      this.setState({ pathLength })
    }
  }

  /**
   * Paints the path between waypoints
   */
  paintPath = () => {
    const { waypoints } = this.state;
    const waypointsCoords = [];
    //To do maybe
    let biggestDistance = 0;

    //For each waypoint, take the center of its element as a coordinate for the path
    waypoints.forEach(w => {
      const cur = w.ref.current;

      waypointsCoords.push(
        {
          x: cur.offsetLeft + 0.5 * cur.clientWidth,
          y: cur.offsetTop + 0.5 * cur.clientHeight,
          h: cur.clientHeight
        }
      );
    })

    waypointsCoords.forEach((coord, i) => {
      if(waypointsCoords[i + 1]){
        coord.distanceToNext = distBetweenPoints(coord, waypointsCoords[i + 1]);
        
        if(biggestDistance < coord.distanceToNext){
          biggestDistance = coord.distanceToNext;
        }
      }
    })

    let pathCoords = '';

    //Create a path definition based on coords
    waypointsCoords.forEach((coord, i) => {
      if(i === 0){
        pathCoords += `M ${coord.x} ${coord.y} `;
      } else {
        //The first two coords are for the point that the path goes through. The last two are for the point that the path "bends" towards
        pathCoords += `S${coord.x},${coord.y}, ${coord.x + 100},${coord.y + 100} `;
      }
    })

    this.setState({
      pathDefinition: pathCoords
    })
  }

  getVisibleWaypoints = (percentage) => {
    const { waypoints } = this.state;
    const { hideChildrenBeforeScroll } = this.props;

    if(!hideChildrenBeforeScroll){
      return waypoints
    } else {
      return waypoints.map((w, i) => {
        let shown = false;

        if(i + 1 < waypoints.length){
          shown = i < (waypoints.length * percentage)
        } else if(i + 1 === waypoints.length && percentage >= 1 - ((1 / waypoints.length)) / 2) {
          shown = true
        }

        return React.cloneElement(
          w,
          { shown }
        )
      })
    }
  }

  render(){
    const { pathDefinition, pathLength } = this.state;

    return (
      <ScrollPercentage threshold={0.26}>
        {
          ({ percentage, ref, entry }) => (
            <PathMakerContainer { ...this.props } ref={ref}>
              <PathContainer>
                <ThePath visible={percentage > 0 ? true : false} d={pathDefinition} />
                <Unfolder percentage={percentage} strokeDashoffset={ -(pathLength * percentage)} strokeDasharray={`${pathLength} ${pathLength}`} d={pathDefinition} ref={this.unfolderRef} />
              </PathContainer>
              <PathMakerChildrenContainer>
                { this.getVisibleWaypoints(percentage) }
              </PathMakerChildrenContainer>
            </PathMakerContainer>
          )
        }

      </ScrollPercentage>
    )
  }
}

export default PathMaker