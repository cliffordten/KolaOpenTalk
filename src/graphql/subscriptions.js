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
        createdAt
        updatedAt
      }
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
        createdAt
        updatedAt
      }
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
        createdAt
        updatedAt
      }
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
      isUserLikedID
      isLiked
      nLikes
      postImage
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      desc
      isUserLikedID
      isLiked
      nLikes
      postImage
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      desc
      isUserLikedID
      isLiked
      nLikes
      postImage
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
export const onCreateParentComment = /* GraphQL */ `
  subscription OnCreateParentComment {
    onCreateParentComment {
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
        isUserLikedID
        isLiked
        nLikes
        postImage
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
export const onUpdateParentComment = /* GraphQL */ `
  subscription OnUpdateParentComment {
    onUpdateParentComment {
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
        isUserLikedID
        isLiked
        nLikes
        postImage
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
export const onDeleteParentComment = /* GraphQL */ `
  subscription OnDeleteParentComment {
    onDeleteParentComment {
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
        isUserLikedID
        isLiked
        nLikes
        postImage
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
export const onCreateChildComment = /* GraphQL */ `
  subscription OnCreateChildComment {
    onCreateChildComment {
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
      pComment {
        id
        desc
        isUserLikedID
        isLiked
        nLikes
        postImage
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChildComment = /* GraphQL */ `
  subscription OnUpdateChildComment {
    onUpdateChildComment {
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
      pComment {
        id
        desc
        isUserLikedID
        isLiked
        nLikes
        postImage
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChildComment = /* GraphQL */ `
  subscription OnDeleteChildComment {
    onDeleteChildComment {
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
      pComment {
        id
        desc
        isUserLikedID
        isLiked
        nLikes
        postImage
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
