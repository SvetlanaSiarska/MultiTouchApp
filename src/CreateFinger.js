import {Finger} from './renderers';

const CreateFinger = (entities, {touches}) => {
  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.
  touches
  .filter(t => t.type === 'press')
  .forEach(t => {
    //let fingerBeispiel =  {position: [40, 200], renderer: <Finger />, name: 'name new'};
    if(entities) {
      let size = Object.keys(entities).length;
      console.log(` keys: ${size}`);
      let zahl = Object.keys(entities).length + 1;
      entities[size] = {position: [t.event.pageX, t.event.pageY], renderer: Finger, name: zahl};
   
    }
  
  });

  return entities;
};

export {CreateFinger};

/*
 event: {
        changedTouches: Array<TouchEvent>;
        identifier: number;
        locationX: number;
        locationY: number;
        pageY: number;
        target: number;
        timestamp: number;
        touches: Array<TouchEvent>;
      };
*/