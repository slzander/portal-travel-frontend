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
  ViroText
} from 'react-viro';


export default class MainScene extends React.Component {
  
  showAR = () => {

  }
  
  render(){
    return(
      <>
        <ViroARScene>
          <ViroAmbientLight color="#ffffff" intensity={200}/>
          <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
            <ViroPortal position={[1, 0, -1]} scale={[.5, .5, .5]}>
            <Viro3DObject 
              source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
              resources={[
                require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')
              ]}
              rotation={[0, -45, 0]}
              type="VRX"
            />
            </ViroPortal>
            <Viro360Image source={{ uri: this.props.arSceneNavigator.viroAppProps[0].url }} />
          </ViroPortalScene>
          <ViroText 
            text={this.props.arSceneNavigator.viroAppProps[0].title} 
            scale={[.5, .5, .5]} 
            position={[1, -1, -1]} 
            style={styles.ARTextStyle} 
            rotation={[0, -45, 0]}
          />
          <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
            <ViroPortal position={[0, 0, -2]} scale={[.5, .5, .5]}>
            <Viro3DObject source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
                resources={[require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                            require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                            require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')]}
                type="VRX"/>
            </ViroPortal>
            {/* <Viro360Image source={{ uri: this.props.arSceneNavigator.viroAppProps[1].url }} /> */}
            {/* <Viro360Image source={{uri: 'https://www.yogjoshi.com/wp-content/uploads/2016/09/mountainscape-360_6_grid-e1472851404167.jpg'}} /> */}
            <Viro360Image source={require("./portal_res/360_island.jpg")} />
          </ViroPortalScene>
          <ViroText 
            text={'A Beach Somewhere'} 
            // text={this.props.arSceneNavigator.viroAppProps[1].title} 
            scale={[.5, .5, .5]} 
            position={[0, -1, -2]} 
            style={styles.ARTextStyle} 
          />
          <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
            <ViroPortal position={[-1, 0, -1]} scale={[.5, .5, .5]}>
            <Viro3DObject source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
                resources={[
                  require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                  require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                  require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')
                ]}            
                rotation={[0, 45, 0]}
                type="VRX"/>
            </ViroPortal>
            <Viro360Image source={require("./portal_res/wework-front-desk.jpeg")} />
            {/* <Viro360Image source={require("./portal_res/IMG_0540.jpeg")} /> */}
          </ViroPortalScene>
          <ViroText 
            text={'WeWork'} 
            scale={[.5, .5, .5]} 
            position={[-1, -1, -1]} 
            style={styles.ARTextStyle} 
            rotation={[0, 45, 0]}
          />
        </ViroARScene>
      </>
    )
  }
}

module.exports = MainScene;