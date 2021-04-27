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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFollowInfo = /* GraphQL */ `
  subscription OnCreateFollowInfo {
    onCreateFollowInfo {
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
export const onUpdateFollowInfo = /* GraphQL */ `
  subscription OnUpdateFollowInfo {
    onUpdateFollowInfo {
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
export const onDeleteFollowInfo = /* GraphQL */ `
  subscription OnDeleteFollowInfo {
    onDeleteFollowInfo {
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
export const onCreateInterest = /* GraphQL */ `
  subscription OnCreateInterest {
    onCreateInterest {
      id
      name
      profile
      userID
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
