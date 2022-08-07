import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Location} from '../interfaces/appInterfaces';

export const useLocation = () => {
  const [haslocation, setHaslocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setInitialPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        setHaslocation(true);
      },
      err => console.log(err),
      {enableHighAccuracy: true},
    );
  }, []);

  return {
    haslocation,
    initialPosition,
  };
};
