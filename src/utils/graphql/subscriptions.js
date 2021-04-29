import {API} from 'aws-amplify';
import {useState} from 'react';
import {onCreatePost} from '../../graphql/subscriptions';

export const useSubCreatePost = () => {
  const [result, setResult] = useState(null);
  API.graphql({query: onCreatePost}).subscribe({
    next: ({
      value: {
        data: {onCreatePost: post},
      },
    }) => {
      setResult(post);
    },
  });
  return result;
};
