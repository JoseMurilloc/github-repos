import React, { useState } from 'react';

import { Title, Form, Repositories } from './styles';
import logoImage from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

// React.FC => React function component
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  function handleAddrepositories() {
    console.log('New repository');
  }

  return (
    <>
      <img src={logoImage} alt="Giyhub Explorer"/>
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">

          <img
            src="https://avatars2.githubusercontent.com/u/43470555?s=460&u=b0e3b8728787100fd42e85fbc2b67b275f0e51af&v=4"
            alt=""
          />

          <div>
            <strong>Rocketseat/unform</strong>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate</span>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
