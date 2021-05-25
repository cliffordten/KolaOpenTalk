import {useCallback, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useForm = (initialState = {}, onSubmit) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (name, val) => {
    setFormData({...formData, [name]: val});
  };

  const handleSubmit = () => {
    onSubmit?.(formData);
  };

  return {formData, handleInputChange, handleSubmit};
};

export const useIsConnected = () => {
  const [isConnected, setIsConnected] = useState(true);

  const subscribe = useCallback(() => {
    const subscribtion = NetInfo.addEventListener(state => {
      console.log('Connection type', state);
      setIsConnected(state.isConnected);
    });
    return () => {
      subscribtion.unsubscribe();
    };
  }, []);

  useEffect(() => {
    subscribe();
    return () => {};
  }, [subscribe]);

  return isConnected;
};
// {useNetInfo}
export const useIsEmptyOrNull = data => {
  const [isNull, setIsNull] = useState(true);
  useEffect(() => {
    if (data === null && data === undefined) {
      setIsNull(false);
    } else {
      setIsNull(true);
    }
    if (data?.length >= 0) {
      setIsNull(false);
    } else {
      setIsNull(true);
    }
    return () => {};
  }, [data]);

  return isNull;
};
