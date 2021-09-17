/**
 * 
 * @param {object} coord1 
 * @param {number} coord1.x 
 * @param {number} coord1.y 
 * @param {object} coord2 
 * @param {number} coord2.x 
 * @param {number} coord2.y 
 * @returns {number}
 */
export const distBetweenPoints = (coord1, coord2) => {
  return Math.sqrt( Math.pow(( coord2.x - coord1.x ), 2) + Math.pow(( coord2.y - coord1.y ), 2) )
}