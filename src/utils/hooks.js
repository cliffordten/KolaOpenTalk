import {useState} from 'react';

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