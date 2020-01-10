'use strict';

import React from 'react';

// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View
// } from 'react-native';

import {
  ViroARScene,
  ViroAmbientLight,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroImage
} from 'react-viro';

export default class MainScene extends React.Component {
  render(){
    return(
      <>
        <ViroARScene>
          <ViroAmbientLight color="#ffffff" intensity={200}/>
            <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
              <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
              <Viro3DObject source={require('./portal_res/portal_ship/portal_ship.vrx')}
                  resources={[require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                              require('./portal_res/portal_ship/portal_ship_normal.png'),
                              require('./portal_res/portal_ship/portal_ship_specular.png')]}
                  type="VRX"/>
              </ViroPortal>
              <Viro360Image source={require("./portal_res/IMG_0540.jpeg")} />
            </ViroPortalScene>
            {/* <ViroImage source={require('../../js/images/exit.png')} 
                        position={[-3, -3, -5]} 
                      //  onClick={this._pushNextScene}/>  
                        onClick={() => this.props.changeScreen('dashboard')}/>   */}
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