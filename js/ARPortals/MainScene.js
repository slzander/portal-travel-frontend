'use strict';

import React from 'react';
import { styles } from '../components/Styles'
import {
  ViroARScene,
  ViroAmbientLight,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroText,
  ViroImage
} from 'react-viro';

export default class MainScene extends React.Component {
  render(){
    return(
      <>
        <ViroARScene>
          <ViroAmbientLight color="#ffffff" intensity={200}/>
          <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
            <ViroPortal position={[1, 0, -1]} scale={[.5, .5, .5]}>
            <Viro3DObject source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
                resources={[require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                            require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                            require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')]}
                type="VRX"/>
            </ViroPortal>
            <Viro360Image source={require("./portal_res/wework-front-desk.jpeg")} />
          </ViroPortalScene>
          <ViroText 
            text={'WeWork Front Desk'} 
            scale={[.5, .5, .5]} 
            position={[1, -1, -1]} 
            style={styles.ARTextStyle} 
          />
          <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
            <ViroPortal position={[0, 0, -1]} scale={[.5, .5, .5]}>
            <Viro3DObject source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
                resources={[require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                            require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                            require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')]}
                type="VRX"/>
            </ViroPortal>
            <Viro360Image source={require("./portal_res/360_island.jpg")} />
          </ViroPortalScene>
          <ViroText 
            text={'A Beach Somewhere'} 
            scale={[.5, .5, .5]} 
            position={[0, -1, -1]} 
            style={styles.ARTextStyle} 
          />
          <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
            <ViroPortal position={[-1, 0, -1]} scale={[.5, .5, .5]}>
            <Viro3DObject source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
                resources={[require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                            require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                            require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')]}
                type="VRX"/>
            </ViroPortal>
            <Viro360Image source={require("./portal_res/IMG_0540.jpeg")} />
          </ViroPortalScene>
          <ViroText 
            text={'WeWork Back Commons'} 
            scale={[.5, .5, .5]} 
            position={[-1, -1, -1]} 
            style={styles.ARTextStyle} 
          />
        </ViroARScene>

      </>
    )
  }
}

// var createReactClass = require('create-react-class');
// var MainScene = createReactClass({

//   render: function() {
//     return (
//       <ViroARScene>
//       <ViroAmbientLight color="#ffffff" intensity={200}/>
//         <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
//           <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
//             <Viro3DObject source={require('./portal_res/portal_ship/portal_ship.vrx')}
//               resources={[require('./portal_res/portal_ship/portal_ship_diffuse.png'),
//                           require('./portal_res/portal_ship/portal_ship_normal.png'),
//                           require('./portal_res/portal_ship/portal_ship_specular.png')]}
//               type="VRX"/>
//           </ViroPortal>
//           <Viro360Image source={require("./portal_res/IMG_0540.jpeg")} />
//         </ViroPortalScene>
//         {/* <ViroImage source={require('../../js/images/exit.png')} 
//                    position={[0, 0, -5]} 
//                   //  onClick={this._pushNextScene}/>  
//                    onClick={this.props.changeScreen('dashboard')}/>   */}
//       </ViroARScene>
//     );
//   },
// });

module.exports = MainScene;