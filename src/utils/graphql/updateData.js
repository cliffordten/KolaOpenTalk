import {API, graphqlOperation} from 'aws-amplify';
import {createUser} from '../../graphql/mutations';
const data = [];

export const makeQuery = () => {
  if (data.length >= 0) {
    data.forEach(async d => {
      try {
        // await DataStore.save(new Category(d));
        await API.graphql(
          graphqlOperation(createUser, {
            input: {
              username: d.email.split('@')[0],
              ...d,
            },
          }),
        );
        console.log('done');
      } catch (error) {
        console.log(error);
      }
    });
  }
};
