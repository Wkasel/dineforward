// @ts-nocheck

import gql from 'graphql-tag';

// import { Business } from '../../types/Business.types';

const BusinessAll = gql`
  query allBusinessQuery(
    $where: BusinessWhereInput
    $orderBy: String
    $search: String
    $first: Int
    $skip: Int
  ) {
    name
    description
    owner {
      name
    }
    staffMembers {
      name
      position

      useraccount {
        name
        id
      }
    }
    _staffMembersMeta {
      count
    }
    profileImage {
      id
      path
      filename
      mimetype
      encoding
      publicUrl
      publicUrlTransformed
    }
    heroImage {
      id
      path
      filename
      mimetype
      encoding
      publicUrl
      publicUrlTransformed
    }
    location {
      googlePlaceID
      formattedAddress
      lat
      lng
    }
    backers {
      name
      id
      image {
        id
        path
        filename
        mimetype
        encoding
        publicUrl
        publicUrlTransformed
      }
      username
      userSlug
      _backingMeta {
        count
      }
    }
    status
  }
`;

export default BusinessAll;

// owner{
//           username
//         userSlug
//         image {
//       id
//       path
//       filename
//       mimetype
//       encoding
//       publicUrl
//       publicUrlTransformed
//         }
