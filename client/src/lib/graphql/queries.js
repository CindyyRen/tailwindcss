import { gql } from '@apollo/client';
const jobDetailFragment = gql`
  fragment JobDetail on Job {
    id
    location
    postedAt
    salary
    title
    companyId
    company {
      name
    }
  }
`;
export const GET_JOBS = gql`
  query GET_JOBS {
    jobs {
      items {
        id
        description
        location
        postedAt
        salary
        title
        companyId
        company {
          name
        }
      }
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
