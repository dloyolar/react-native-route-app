/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MapView from 'react-native-maps';

import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../screens/LoadingScreen';

export const Map = () => {
  const {haslocation, initialPosition} = useLocation();

  if (!haslocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        style={{flex: 1}}
        // provider={PROVIDER_GOOGLE}ç
        showsUserLocation
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker
          image={require('../assets/custom-marker.png')}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={'TITULO'}
          description="DESCRIPCION"
        /> */}
      </MapView>
    </>
  );
};
