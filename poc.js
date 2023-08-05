
/*
 * Utility functions to define 
 */

const treeSitterUtils = {
  grammar  : (...args) => console.log(...args),
  repeat   : (...args) => console.log(...args),
  choice   : (...args) => console.log(...args),
  seq      : (...args) => console.log(...args),
  optional : (...args) => console.log(...args),
  repeat   : (...args) => console.log(...args),
};

/*
 * Make treeSitterUtils available in global scope
 */
function hoistTreeSitterUtils () {
  for (let utility in treeSitterUtils) {
    global[utility] =  treeSitterUtils[utility];
  }
}

/*
 * Driver function
 */
(function main () {

  /*
   * Make sure all utilities are available 
   * in global scope before actual grammerConfig
   * is imported
   */
  hoistTreeSitterUtils();

  /* 
  * Manually importing this for now, later
  * this can be passed an argument to script
  * Note: grammer.js exports the output for grammar
  * hence console.log of grammer function arguments
  * is expected
  */
  const grammerConfig = require ('./grammar.js');
  console.debug('grammerConfig loaded successfully');
})();

