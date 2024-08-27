import { gql } from '@apollo/client';
// const jobDetailFragment = gql`
//   fragment JobDetail on Job {
//     id
//     location
//     postedAt
//     salary
//     title
//     companyId
//     company {
//       name
//     }
//   }
// `;
export const GET_JOBS = gql`
  query GetJobs($limit: Int = 10, $offset: Int = 0) {
    jobs(limit: $limit, offset: $offset) {
      items {
        id
        title
        description
        location
        postedAt
        salary
        companyId
        company {
          name
        }
      }
      totalCount
    }
  }
`;
export const jobByIdQuery = gql`
  query Job($jobId: Int!) {
    job(id: $jobId) {
      companyId
      description
      location
      postedAt
      salary
      title
      id
      company {
        name
        description
      }
    }
  }
`;
