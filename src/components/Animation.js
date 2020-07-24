import React, { useEffect } from 'react';
import RedQueen from './images/sprite_running-alice-queen_small.png';
import useWebAnimations from "@wellyshen/use-web-animations";
import Pawn from './images/r_pawn_upright_small.png'
import Rook from './images/w_rook_small.png';
import Palm1 from './images/palm1_small.png';
import Palm2 from './images/palm2_small.png';
import Knight from './images/r_knight_small.png';
import RPawn from './images/r_pawn_small.png';
import Rook2 from './images/w_rook_upright_small.png';
import Palm3 from './images/palm3_small.png';
import Bush from './images/bush_small.png';

function Animation(){
    // Alice Transition
  let aliceFrame=[
    {transform : 'translateY(0)'},
     {transform: 'translateY(-100%)'} ,
    
 ]
 let aliceTiming={
    easing: 'steps(7, end)',
    direction: "reverse",
    duration: 700,
     playbackRate: 1,
    iterations: Infinity
}
  
  const {ref:alice,getAnimation:aliceAnimation}=useWebAnimations(
        {
           
            keyframes:aliceFrame,
            timing:aliceTiming,
        }
    );
    // scenery transaition
    // Background 1
    let backgroundFrame=[
        {transform: 'translateX(100%)'},
        {transform:'translateX(-100%)'}
    ];
    let backgroundTiming={
        duration: 36000,
        iterations: Infinity
    }
    const {ref:background1,getAnimation:background1Animation}=useWebAnimations(
        {
            keyframes:backgroundFrame,
            timing:backgroundTiming,
        }
    );
    // Background 2
    const {ref:background2,getAnimation:background2Animation}=useWebAnimations(
        {
            keyframes:backgroundFrame,
            timing:backgroundTiming,
        }
    );
    // ForegroundTransition
    let foregroundTiming={
        duration: 12000,
        iterations:Infinity
    }
    //Foreground1
    const {ref:foreground1,getAnimation:foreground1Animation}=useWebAnimations(
        { 
            keyframes:backgroundFrame,
            timing:foregroundTiming,
        }
    );
  //Foreground 2
    const {ref:foreground2,getAnimation:foreground2Animation}=useWebAnimations(
        { 
            keyframes:backgroundFrame,
            timing:foregroundTiming,
        }
    );
    // const handleBackSpeed=()=>{
        
    //     if(aliceAnimation.playbackRate< .8){
    //         backgroundAnimation.playbackRate=aliceAnimation.playbackRate/2*-1;
    //         foregroundAnimation.playbackRate=aliceAnimation.playbackRate/2*-1;
    //         // background1.getAnimation().updatePlaybackRate(ref1.playbackRate/2*-1);
    //         // foreground.getAnimation().updatePlaybackRate(ref1.playbackRate/2*-1);
    //     }else if(aliceAnimation.playbackRate>1.2){
    //         backgroundAnimation.playbackRate=aliceAnimation.playbackRate/2;
    //         foregroundAnimation.playbackRate=aliceAnimation.playbackRate/2;
    //         // background1.getAnimation().updatePlaybackRate(ref1.playbackRate/2);
    //         // foreground.getAnimation().updatePlaybackRate(ref1.playbackRate/2);   
    //     }else{
    //         backgroundAnimation.playbackRate=0;
    //         foregroundAnimation.playbackRate=0;
    //         //  background1.getAnimation().updatePlaybackRate(0.2);
    //         // foreground.getAnimation().updatePlaybackRate(0.2); 
    //     }
        
    // }
    // handleBackSpeed();
    // handleBackSpeed();
    // const handleSpeed=()=>{
    //     aliceAnimation.playbackRate*=1.1;
    //     // aliceAnimation.updatePlaybackRate(aliceAnimation.playbackRate*=1.1);
    //     handleBackSpeed();
        
    // }


    useEffect(()=>{
        const handleBackSpeed=function(){
        let sceneries=[background1Animation(),background2Animation(),foreground1Animation(),foreground2Animation()] ;
        try {
        if(aliceAnimation().playbackRate<.8){
            sceneries.forEach(function(anim){
                anim.playbackRate=aliceAnimation().playbackRate/2*-1;
            });
        }else if(aliceAnimation().playbackRate>1.2){
            sceneries.forEach(function(anim){
                anim.playbackRate=aliceAnimation().playbackRate/2;
            });
        }else{
            sceneries.forEach(function(anim){
                anim.playbackRate=0;
            });
        }
        }
        catch (error){
            console.log('error');
        }
    }
        handleBackSpeed();
        const handleSpeed=()=>{
            aliceAnimation().playbackRate*=1.1;
            handleBackSpeed()
        }
        setInterval(function(){
            if(aliceAnimation()> .4){
                aliceAnimation().playbackRate*=0.9;}
                handleBackSpeed();
        },3000);
        document.addEventListener("click",handleSpeed);
        document.addEventListener("touchstart",handleSpeed);
        },
        [background1Animation,background2Animation,foreground1Animation,foreground2Animation]
        )

    return (
        <div className='wrapper'>
        <div className='sky'></div>
        <div className='earth'>
         
           <div id='red-queen' className='target'  >
           {/* <button onClick={handleSpeed} > */}
           <img src={RedQueen} alt='red-queen-alice' ref={alice}/>
           {/* </button> */}
            </div>
            
        </div>
        
        {/* scenery  background1*/}
        <div className='scenery' id='background1' ref={background1}>
          <img id="r_pawn_upright" src={Pawn} alt=" "/>
          <img id="w_rook" src={Rook} alt=" "/>
          <img id="palm1" src={Palm1} alt=" "/>
        </div>
        
        {/* scenery background2 */}
        <div className='scenery' id='background1' ref={background2}>
          <img id="r_pawn" src={RPawn} alt=" "/>
          <img id="r_knight" src={Knight} alt=" "/>
          <img id="palm2" src={Palm2} alt=" "/>
        </div>

        {/* scenery foreground1 */}
        <div className='scenery' id='foreground1' ref={foreground1}>
          <img id="palm3" src={Palm3} alt=" "/>
          <img id="bush" src={Bush} alt=" "/>
        </div>

        {/* scenery foreground2 */}
        <div className='scenery' id='foreground2' ref={foreground2}>
           {/* <img id="palm3" src={Palm3} alt=" "/>  */}
          <img id="bush" src={Bush} alt=" "/>
          <img id="w_rook_upright" src={Rook2} alt=" "/>
        </div>
        </div>

        
       
    );
}

export default Animation;