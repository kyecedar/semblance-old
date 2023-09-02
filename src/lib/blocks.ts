// modules.
import { Store } from "tauri-plugin-store-api";



// globals.
declare global {
  interface Window {
    blocks: {
      createBlock: (id: string) => Block,
      registry: {
        [key: string]: Block,
      }
    }
  }
}



// types.
class Block {

};





// methods.
const createBlock = (): Block => {
  let block = new Block();
  return block;
};



/// TODO: create method to create a unique block id.
  // fmt is "a-00-000".
  // where "a" is the type of window. for example, window blocks like the settings or terminal would have "w" for window.
  // where "00" is the stack ID.
  // and where "000" is the block id itself.
//
  
  
/// TODO: create method to bring back last setup of blocks and their states.
/// Late TODO: interface block that allows user to make themselves and expose variables to interface with things they've made in app.


// exports.
Object.assign(window, {
  blocks: {
    createBlock,
  },
});