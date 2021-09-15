import React, { useState, FormEvent, useEffect } from 'react';

import { Title, Form, Repositories, Error } from './styles';
import logoImage from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import { Link } from 'react-router-dom';


interface InterfaceRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// React.FC => React function component
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<InterfaceRepository[]>(
    () => {
      const storageRepositories = localStorage.getItem(
        '@GithubExplorer:repositories'
      );

      if(storageRepositories) {
        return JSON.parse(storageRepositories);
      } else {
        return [];
      }
    }
  );

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories]);

  async function handleAddRepositories(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(!newRepo) {
      setInputError('Digite o author/nome do repositório');
      return;
    }

    try {
      const [onwer, repository] = newRepo.split('/');
      console.log(`Owner: ${onwer} / Repository: ${repository}`);

      const response = await api.get<InterfaceRepository>(`/repos/${onwer}/${repository}`);

      setRepositories([ ...repositories, response.data ]);
      setNewRepo('');
      setInputError('');
    } catch(err) {
      setInputError('Erro na busca por esse repositório');
    }

    console.log(repositories);

  }

  return (
    <>
      <img src={logoImage} alt="Github Explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepositories}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
          />
        <button type="submit">Pesquisar</button>
      </Form>

      { inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link to={`/repositories/${repository.full_name}`}key={repository.full_name}>

          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />

          <div>
            <strong>{repository.full_name}</strong>
            <span>{repository.description}</span>
          </div>

          <FiChevronRight size={20} />
        </Link>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;
