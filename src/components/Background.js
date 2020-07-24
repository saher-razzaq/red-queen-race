// import React from 'react';
// import useWebAnimations from "@wellyshen/use-web-animations";
// import Pawn from './images/r_pawn_upright_small.png'
// import Rook from './images/w_rook_small.png';
// import Palm1 from './images/palm1_small.png';
// import Palm2 from './images/palm2_small.png';
// import Knight from './images/r_knight_small.png';
// import RPawn from './images/r_pawn_small.png';


// function Back(){
//     const {ref:background1,getAnimation}=useWebAnimations(
//         {
//             playbackRate:0.1,
//             keyframes:[
//                 {transform: 'translateX(100%)'},
//                 {transform:'translateX(-100%)'}
//             ],
//             timing:{
//                 duration: 36000,
//                 iterations: Infinity
//             }
//         }
//     );

//     return (
//         <div>
//         <div className='scenery' id='background1' ref={background1}>
//           <img id="r_pawn_upright" src={Pawn} alt=" "/>
//           <img id="w_rook" src={Rook} alt=" "/>
//           <img id="palm1" src={Palm1} alt=" "/>
//         </div>
        
//         {/* scenery background2 */}
//         <div className='scenery' id='background1' ref={background1}>
//           <img id="r_pawn" src={RPawn} alt=" "/>
//           <img id="r_knight" src={Knight} alt=" "/>
//           <img id="palm2" src={Palm2} alt=" "/>
//         </div>
//         </div>
//     )
// }