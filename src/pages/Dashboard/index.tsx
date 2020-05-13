import React, { useState, FormEvent } from 'react';

import { Title, Form, Repositories, Error } from './styles';
import logoImage from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';


interface InterfaceRespository {
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
  const [repositories, setRepositories] = useState<InterfaceRespository[]>([]);

  async function handleAddrepositories(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(!newRepo) {
      setInputError('Digite o author/nome do repositorio');
      return;
    }

    try {
      const [onwer, repository] = newRepo.split('/');
      console.log(`Owner: ${onwer} / Respository: ${repository}`);

      const response = await api.get<InterfaceRespository>(`/repos/${onwer}/${repository}`);

      setRepositories([ ...repositories, response.data ]);
      setNewRepo('');
      setInputError('');
    } catch(err) {
      setInputError('Erro na busca por esse repositorio');
    }

    console.log(repositories);

  }

  return (
    <>
      <img src={logoImage} alt="Giyhub Explorer"/>
      <Title>Explore repositorios no Github</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddrepositories}>
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
          <a href="/" key={repository.full_name}>

          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />

          <div>
            <strong>{repository.full_name}</strong>
            <span>{repository.description}</span>
          </div>

          <FiChevronRight size={20} />
        </a>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;
