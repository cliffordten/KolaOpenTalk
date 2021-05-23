/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFollowering = /* GraphQL */ `
  subscription OnCreateFollowering {
    onCreateFollowering {
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
export const onUpdateFollowering = /* GraphQL */ `
  subscription OnUpdateFollowering {
    onUpdateFollowering {
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
export const onDeleteFollowering = /* GraphQL */ `
  subscription OnDeleteFollowering {
    onDeleteFollowering {
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
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower {
    onCreateFollower {
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
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower {
    onUpdateFollower {
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
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower {
    onDeleteFollower {
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
export const onCreateUserBlackList = /* GraphQL */ `
  subscription OnCreateUserBlackList {
    onCreateUserBlackList {
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
export const onUpdateUserBlackList = /* GraphQL */ `
  subscription OnUpdateUserBlackList {
    onUpdateUserBlackList {
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
export const onDeleteUserBlackList = /* GraphQL */ `
  subscription OnDeleteUserBlackList {
    onDeleteUserBlackList {
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
export const onCreateInterest = /* GraphQL */ `
  subscription OnCreateInterest {
    onCreateInterest {
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
export const onUpdateInterest = /* GraphQL */ `
  subscription OnUpdateInterest {
    onUpdateInterest {
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
export const onDeleteInterest = /* GraphQL */ `
  subscription OnDeleteInterest {
    onDeleteInterest {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
