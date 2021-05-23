/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        username
        email
        picture
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        blackList {
          nextToken
          startedAt
        }
        interest {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      followers {
        items {
          id
          isFollow
          userID
          userFollowerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      blackList {
        items {
          id
          userID
          blackListUserID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      interest {
        items {
          id
          name
          profile
          userID
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        blackList {
          nextToken
          startedAt
        }
        interest {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFollowerings = /* GraphQL */ `
  query SyncFollowerings(
    $filter: ModelFolloweringFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollowerings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFollowering = /* GraphQL */ `
  query GetFollowering($id: ID!) {
    getFollowering(id: $id) {
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
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        blackList {
          nextToken
          startedAt
        }
        interest {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFollowerings = /* GraphQL */ `
  query ListFollowerings(
    $filter: ModelFolloweringFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowerings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFollowers = /* GraphQL */ `
  query SyncFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollowers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFollower = /* GraphQL */ `
  query GetFollower($id: ID!) {
    getFollower(id: $id) {
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
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        blackList {
          nextToken
          startedAt
        }
        interest {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFollowers = /* GraphQL */ `
  query ListFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserBlackLists = /* GraphQL */ `
  query SyncUserBlackLists(
    $filter: ModelUserBlackListFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserBlackLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        blackListUserID
        blackList {
          id
          name
          username
          email
          picture
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserBlackList = /* GraphQL */ `
  query GetUserBlackList($id: ID!) {
    getUserBlackList(id: $id) {
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
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        blackList {
          nextToken
          startedAt
        }
        interest {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUserBlackLists = /* GraphQL */ `
  query ListUserBlackLists(
    $filter: ModelUserBlackListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserBlackLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        blackListUserID
        blackList {
          id
          name
          username
          email
          picture
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInterests = /* GraphQL */ `
  query SyncInterests(
    $filter: ModelInterestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInterests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        profile
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      profile
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        blackList {
          nextToken
          startedAt
        }
        interest {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      likes {
        items {
          id
          isLiked
          time
          commentID
          postID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        blackList {
          nextToken
          startedAt
        }
        interest {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        user {
          id
          name
          username
          email
          picture
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          startedAt
        }
        user {
          id
          name
          username
          email
          picture
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      user {
        id
        name
        username
        email
        picture
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        blackList {
          nextToken
          startedAt
        }
        interest {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          startedAt
        }
        user {
          id
          name
          username
          email
          picture
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
