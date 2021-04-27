/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      username
      email
      picture
      followInfo {
        items {
          id
          isFollowed
          isFollowing
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      interest {
        items {
          id
          name
          profile
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      username
      email
      picture
      followInfo {
        items {
          id
          isFollowed
          isFollowing
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      interest {
        items {
          id
          name
          profile
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      username
      email
      picture
      followInfo {
        items {
          id
          isFollowed
          isFollowing
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      interest {
        items {
          id
          name
          profile
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFollowInfo = /* GraphQL */ `
  mutation CreateFollowInfo(
    $input: CreateFollowInfoInput!
    $condition: ModelFollowInfoConditionInput
  ) {
    createFollowInfo(input: $input, condition: $condition) {
      id
      isFollowed
      isFollowing
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFollowInfo = /* GraphQL */ `
  mutation UpdateFollowInfo(
    $input: UpdateFollowInfoInput!
    $condition: ModelFollowInfoConditionInput
  ) {
    updateFollowInfo(input: $input, condition: $condition) {
      id
      isFollowed
      isFollowing
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollowInfo = /* GraphQL */ `
  mutation DeleteFollowInfo(
    $input: DeleteFollowInfoInput!
    $condition: ModelFollowInfoConditionInput
  ) {
    deleteFollowInfo(input: $input, condition: $condition) {
      id
      isFollowed
      isFollowing
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createInterest = /* GraphQL */ `
  mutation CreateInterest(
    $input: CreateInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    createInterest(input: $input, condition: $condition) {
      id
      name
      profile
      userID
      createdAt
      updatedAt
    }
  }
`;
export const updateInterest = /* GraphQL */ `
  mutation UpdateInterest(
    $input: UpdateInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    updateInterest(input: $input, condition: $condition) {
      id
      name
      profile
      userID
      createdAt
      updatedAt
    }
  }
`;
export const deleteInterest = /* GraphQL */ `
  mutation DeleteInterest(
    $input: DeleteInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    deleteInterest(input: $input, condition: $condition) {
      id
      name
      profile
      userID
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      desc
      isRead
      isLiked
      nLikes
      postImage
      time
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          isRead
          isLiked
          nLikes
          commentImage
          time
          postID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      desc
      isRead
      isLiked
      nLikes
      postImage
      time
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          isRead
          isLiked
          nLikes
          commentImage
          time
          postID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      desc
      isRead
      isLiked
      nLikes
      postImage
      time
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          isRead
          isLiked
          nLikes
          commentImage
          time
          postID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createParentComment = /* GraphQL */ `
  mutation CreateParentComment(
    $input: CreateParentCommentInput!
    $condition: ModelParentCommentConditionInput
  ) {
    createParentComment(input: $input, condition: $condition) {
      id
      content
      isRead
      isLiked
      nLikes
      commentImage
      time
      postID
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        desc
        isRead
        isLiked
        nLikes
        postImage
        time
        userID
        user {
          id
          name
          username
          email
          picture
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          isRead
          isLiked
          nLikes
          commentImage
          time
          pCommentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateParentComment = /* GraphQL */ `
  mutation UpdateParentComment(
    $input: UpdateParentCommentInput!
    $condition: ModelParentCommentConditionInput
  ) {
    updateParentComment(input: $input, condition: $condition) {
      id
      content
      isRead
      isLiked
      nLikes
      commentImage
      time
      postID
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        desc
        isRead
        isLiked
        nLikes
        postImage
        time
        userID
        user {
          id
          name
          username
          email
          picture
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          isRead
          isLiked
          nLikes
          commentImage
          time
          pCommentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteParentComment = /* GraphQL */ `
  mutation DeleteParentComment(
    $input: DeleteParentCommentInput!
    $condition: ModelParentCommentConditionInput
  ) {
    deleteParentComment(input: $input, condition: $condition) {
      id
      content
      isRead
      isLiked
      nLikes
      commentImage
      time
      postID
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        desc
        isRead
        isLiked
        nLikes
        postImage
        time
        userID
        user {
          id
          name
          username
          email
          picture
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          isRead
          isLiked
          nLikes
          commentImage
          time
          pCommentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChildComment = /* GraphQL */ `
  mutation CreateChildComment(
    $input: CreateChildCommentInput!
    $condition: ModelChildCommentConditionInput
  ) {
    createChildComment(input: $input, condition: $condition) {
      id
      content
      isRead
      isLiked
      nLikes
      commentImage
      time
      pCommentID
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      pComment {
        id
        desc
        isRead
        isLiked
        nLikes
        postImage
        time
        userID
        user {
          id
          name
          username
          email
          picture
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChildComment = /* GraphQL */ `
  mutation UpdateChildComment(
    $input: UpdateChildCommentInput!
    $condition: ModelChildCommentConditionInput
  ) {
    updateChildComment(input: $input, condition: $condition) {
      id
      content
      isRead
      isLiked
      nLikes
      commentImage
      time
      pCommentID
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      pComment {
        id
        desc
        isRead
        isLiked
        nLikes
        postImage
        time
        userID
        user {
          id
          name
          username
          email
          picture
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChildComment = /* GraphQL */ `
  mutation DeleteChildComment(
    $input: DeleteChildCommentInput!
    $condition: ModelChildCommentConditionInput
  ) {
    deleteChildComment(input: $input, condition: $condition) {
      id
      content
      isRead
      isLiked
      nLikes
      commentImage
      time
      pCommentID
      userID
      user {
        id
        name
        username
        email
        picture
        followInfo {
          nextToken
        }
        interest {
          nextToken
        }
        createdAt
        updatedAt
      }
      pComment {
        id
        desc
        isRead
        isLiked
        nLikes
        postImage
        time
        userID
        user {
          id
          name
          username
          email
          picture
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
