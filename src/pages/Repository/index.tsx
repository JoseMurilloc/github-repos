import React, { useEffect, useState } from 'react';

import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImage from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface RepositoryTypes {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;

  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repositories, setRepositories] = useState<RepositoryTypes | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);


  useEffect(() => {
    api.get(`/repos/${params.repository}`).then(response => {
     setRepositories(response.data)
    });

    api.get(`/repos/${params.repository}/issues`).then(response => {
      setIssues(response.data)
    });
  }, [params.repository])

  return (
    <>
      <Header>
        <img
          src={logoImage}
          alt="Github Explorer"
        />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      { repositories && (
          <RepositoryInfo>
          <header>
            <img
              src={repositories.owner.avatar_url}
              alt={repositories.owner.login}
            />
            <div>
              <strong>{repositories.full_name}</strong>
              <p>{repositories.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repositories.stargazers_count}</strong>
              <span>Starts</span>
            </li>

            <li>
              <strong>{repositories.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repositories.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a  target="_blank" href={issue.html_url} key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <span>{issue.user.login}</span>
            </div>

            <FiChevronRight size={20} />
          </a>

        ))}
      </Issues>
    </>
  )
}

export default Repository;
