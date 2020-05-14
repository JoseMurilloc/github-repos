import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryInetrface {
  repository: string;
}

// React.FC => React function component
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryInetrface>();

  return <h1>Repository: {params.repository} </h1>;
}

export default Repository;
