import {API, graphqlOperation} from 'aws-amplify';
import {onCreatePost} from '../../graphql/subscriptions';

export const subscribeCreatePost = () => {
  return API.graphql(graphqlOperation(onCreatePost));
};

// export const subscribeCreatePost = () => {
//   const [result, setResult] = useState(null);
//   API.graphql({query: onCreatePost}).subscribe({
//     next: ({
//       value: {
//         data: {onCreatePost: post},
//       },
//     }) => {
//       setResult(post);
//     },
//   });
//   return result;
// };
