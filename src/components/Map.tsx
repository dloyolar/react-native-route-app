/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import MapView from 'react-native-maps';

import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../screens/LoadingScreen';
import {Fab} from './Fab';

export const Map = () => {
  const {
    haslocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
  } = useLocation();

  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowUserLocation();
    };
  }, []);

  useEffect(() => {
    if (!following.current) {
      return;
    }
    mapViewRef.current?.animateCamera({center: userLocation});
  }, [userLocation]);

  const centerPosition = async () => {
    const location = await getCurrentLocation();
    following.current = true;
    mapViewRef.current?.animateCamera({center: location});
  };

  if (!haslocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        style={{flex: 1}}
        // provider={PROVIDER_GOOGLE}ç
        showsUserLocation
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={() => (following.current = false)}>
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
      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={{position: 'absolute', right: 20, bottom: 20}}
      />
    </>
  );
};
