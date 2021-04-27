/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          userFollowingID
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFollowInfo = /* GraphQL */ `
  query GetFollowInfo($id: ID!) {
    getFollowInfo(id: $id) {
      id
      isFollowed
      isFollowing
      userID
      userFollowingID
      createdAt
      updatedAt
    }
  }
`;
export const listFollowInfos = /* GraphQL */ `
  query ListFollowInfos(
    $filter: ModelFollowInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isFollowed
        isFollowing
        userID
        userFollowingID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInterest = /* GraphQL */ `
  query GetInterest($id: ID!) {
    getInterest(id: $id) {
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
export const listInterests = /* GraphQL */ `
  query ListInterests(
    $filter: ModelInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      profile
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        profile
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getParentComment = /* GraphQL */ `
  query GetParentComment($id: ID!) {
    getParentComment(id: $id) {
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
export const listParentComments = /* GraphQL */ `
  query ListParentComments(
    $filter: ModelParentCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParentComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          isRead
          isLiked
          nLikes
          postImage
          time
          userID
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChildComment = /* GraphQL */ `
  query GetChildComment($id: ID!) {
    getChildComment(id: $id) {
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
export const listChildComments = /* GraphQL */ `
  query ListChildComments(
    $filter: ModelChildCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChildComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        user {
          id
          name
          username
          email
          picture
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
