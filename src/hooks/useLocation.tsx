import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Location} from '../interfaces/appInterfaces';

export const useLocation = () => {
  const [haslocation, setHaslocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        err => reject({err}),
        {enableHighAccuracy: true},
      );
    });
  };

  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialPosition(location);
      setHaslocation(true);
    });
  }, []);

  return {
    haslocation,
    initialPosition,
    getCurrentLocation,
  };
};
