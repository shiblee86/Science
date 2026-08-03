// Grade 1 structural metadata: strands and units. Content lives in g1-*.js pool files.
const STRANDS = [
  {id:'physical', name:'Physical Science', icon:'⚡', tagline:'Matter, forces, light & sound', color:'#ff9d5c'},
  {id:'life', name:'Life Science', icon:'🦋', tagline:'Animals, plants & living things', color:'#7dd67a'},
  {id:'earth', name:'Earth & Space', icon:'🌍', tagline:'Weather, land, sky & resources', color:'#5cc4e6'},
  {id:'engineering', name:'Engineering', icon:'🛠️', tagline:'Design & build solutions', color:'#e6b45c'},
];

const GRADE_THEMES = {
  1: {name:'Grade 1', accent:'#ff7a59', accentSoft:'#ffd7c2', mascotName:'Scout'},
  2: {name:'Grade 2', accent:'#4caf7d', accentSoft:'#c9ecd8', mascotName:'Scout'},
  3: {name:'Grade 3', accent:'#4a6fd4', accentSoft:'#c7d4f5', mascotName:'Scout'},
};

const G1_UNITS = [
  {id:'A', strand:'physical', name:'Shapes and Colors', icon:'🔺'},
  {id:'B', strand:'physical', name:'Materials', icon:'🧱'},
  {id:'C', strand:'physical', name:'Comparing', icon:'⚖️'},
  {id:'D', strand:'physical', name:'States of Matter', icon:'🧊'},
  {id:'E', strand:'physical', name:'Heating and Cooling', icon:'🔥'},
  {id:'F', strand:'physical', name:'Light and Sound', icon:'💡'},
  {id:'G', strand:'physical', name:'Force and Motion', icon:'🧲'},
  {id:'H', strand:'life', name:'Animals', icon:'🐾'},
  {id:'I', strand:'life', name:'Plants', icon:'🌱'},
  {id:'J', strand:'life', name:'Living Things', icon:'🌿'},
  {id:'K', strand:'earth', name:'Ecosystems', icon:'🌎'},
  {id:'L', strand:'earth', name:"Earth's Resources", icon:'🪨'},
  {id:'M', strand:'earth', name:'Human Impacts', icon:'♻️'},
  {id:'N', strand:'earth', name:'Weather', icon:'⛅'},
  {id:'O', strand:'earth', name:'Astronomy', icon:'🌙'},
  {id:'P', strand:'engineering', name:'Engineering Practices', icon:'🛠️'},
];
