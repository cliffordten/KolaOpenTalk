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
      following {
        items {
          id
          isFollowing
          userID
          userFollowingID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          isFollow
          userID
          userFollowerID
          createdAt
          updatedAt
        }
        nextToken
      }
      blackList {
        items {
          id
          userID
          blackListUserID
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
          categoryID
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
      following {
        items {
          id
          isFollowing
          userID
          userFollowingID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          isFollow
          userID
          userFollowerID
          createdAt
          updatedAt
        }
        nextToken
      }
      blackList {
        items {
          id
          userID
          blackListUserID
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
          categoryID
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
      following {
        items {
          id
          isFollowing
          userID
          userFollowingID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          isFollow
          userID
          userFollowerID
          createdAt
          updatedAt
        }
        nextToken
      }
      blackList {
        items {
          id
          userID
          blackListUserID
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
          categoryID
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
export const createFollowering = /* GraphQL */ `
  mutation CreateFollowering(
    $input: CreateFolloweringInput!
    $condition: ModelFolloweringConditionInput
  ) {
    createFollowering(input: $input, condition: $condition) {
      id
      isFollowing
      userID
      userFollowingID
      followering {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
export const updateFollowering = /* GraphQL */ `
  mutation UpdateFollowering(
    $input: UpdateFolloweringInput!
    $condition: ModelFolloweringConditionInput
  ) {
    updateFollowering(input: $input, condition: $condition) {
      id
      isFollowing
      userID
      userFollowingID
      followering {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
export const deleteFollowering = /* GraphQL */ `
  mutation DeleteFollowering(
    $input: DeleteFolloweringInput!
    $condition: ModelFolloweringConditionInput
  ) {
    deleteFollowering(input: $input, condition: $condition) {
      id
      isFollowing
      userID
      userFollowingID
      followering {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
      id
      isFollow
      userID
      userFollowerID
      follower {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
      id
      isFollow
      userID
      userFollowerID
      follower {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
      id
      isFollow
      userID
      userFollowerID
      follower {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
export const createUserBlackList = /* GraphQL */ `
  mutation CreateUserBlackList(
    $input: CreateUserBlackListInput!
    $condition: ModelUserBlackListConditionInput
  ) {
    createUserBlackList(input: $input, condition: $condition) {
      id
      userID
      blackListUserID
      blackList {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
export const updateUserBlackList = /* GraphQL */ `
  mutation UpdateUserBlackList(
    $input: UpdateUserBlackListInput!
    $condition: ModelUserBlackListConditionInput
  ) {
    updateUserBlackList(input: $input, condition: $condition) {
      id
      userID
      blackListUserID
      blackList {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
export const deleteUserBlackList = /* GraphQL */ `
  mutation DeleteUserBlackList(
    $input: DeleteUserBlackListInput!
    $condition: ModelUserBlackListConditionInput
  ) {
    deleteUserBlackList(input: $input, condition: $condition) {
      id
      userID
      blackListUserID
      blackList {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
      categoryID
      category {
        id
        name
        profile
        createdAt
        updatedAt
      }
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
      categoryID
      category {
        id
        name
        profile
        createdAt
        updatedAt
      }
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
      categoryID
      category {
        id
        name
        profile
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      profile
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      profile
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      profile
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
      postImage
      isPrivate
      time
      userID
      interest
      user {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
          parentComentId
          childCommentId
          content
          commentImage
          time
          postID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          isLiked
          time
          commentID
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
      postImage
      isPrivate
      time
      userID
      interest
      user {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
          parentComentId
          childCommentId
          content
          commentImage
          time
          postID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          isLiked
          time
          commentID
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
      postImage
      isPrivate
      time
      userID
      interest
      user {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
          parentComentId
          childCommentId
          content
          commentImage
          time
          postID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          isLiked
          time
          commentID
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      isLiked
      time
      commentID
      postID
      userID
      user {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
        postImage
        isPrivate
        time
        userID
        interest
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
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comment {
        id
        parentComentId
        childCommentId
        content
        commentImage
        time
        postID
        userID
        likes {
          nextToken
        }
        user {
          id
          name
          username
          email
          picture
          createdAt
          updatedAt
        }
        post {
          id
          desc
          postImage
          isPrivate
          time
          userID
          interest
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      isLiked
      time
      commentID
      postID
      userID
      user {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
        postImage
        isPrivate
        time
        userID
        interest
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
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comment {
        id
        parentComentId
        childCommentId
        content
        commentImage
        time
        postID
        userID
        likes {
          nextToken
        }
        user {
          id
          name
          username
          email
          picture
          createdAt
          updatedAt
        }
        post {
          id
          desc
          postImage
          isPrivate
          time
          userID
          interest
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      isLiked
      time
      commentID
      postID
      userID
      user {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
        postImage
        isPrivate
        time
        userID
        interest
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
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comment {
        id
        parentComentId
        childCommentId
        content
        commentImage
        time
        postID
        userID
        likes {
          nextToken
        }
        user {
          id
          name
          username
          email
          picture
          createdAt
          updatedAt
        }
        post {
          id
          desc
          postImage
          isPrivate
          time
          userID
          interest
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      parentComentId
      childCommentId
      content
      commentImage
      time
      postID
      userID
      likes {
        items {
          id
          isLiked
          time
          commentID
          postID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
        postImage
        isPrivate
        time
        userID
        interest
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
        likes {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      parentComentId
      childCommentId
      content
      commentImage
      time
      postID
      userID
      likes {
        items {
          id
          isLiked
          time
          commentID
          postID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
        postImage
        isPrivate
        time
        userID
        interest
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
        likes {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      parentComentId
      childCommentId
      content
      commentImage
      time
      postID
      userID
      likes {
        items {
          id
          isLiked
          time
          commentID
          postID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        username
        email
        picture
        following {
          nextToken
        }
        followers {
          nextToken
        }
        blackList {
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
        postImage
        isPrivate
        time
        userID
        interest
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
        likes {
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
