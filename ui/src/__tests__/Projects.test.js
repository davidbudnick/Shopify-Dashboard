import React from 'react';
import { render, cleanup, waitForElement, getByTestId } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Projects from '../components/elements/Projects';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetch from 'node-fetch';

//Redux Config
const mockStore = configureStore([thunk]);

//Redux state setup
const initialState = {
  projects: {
    project: [],
    projects: [],
  },
};

//match setup
const match = {
  params: {
    id: 'google-oauth2%7C115591737006318112594',
  },
};

//Jest Setup
afterEach(() => {
  cleanup();
  console.error.mockClear();
});

//Mocks Error logging
console.error = jest.fn();

describe('<Projects/>', async () => {
  let store = mockStore(initialState);

  test('Initial State Setup', async () => {
    const response = await fetch('http://localhost:4000/projects/all/google-oauth2%7C115591737006318112594', {
      method: 'GET',
    });

    initialState.projects.projects = await response.json();
  });

  test('Frist Project Link', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Projects match={match} store={store} />
      </MemoryRouter>,
    );
    await waitForElement(() => getByTestId('project-link'));
    expect(getByTestId('project-link').getAttribute('href')).toBe(
      `/project/${initialState.projects.projects[0].projectId}/dashboard`,
    );
  });

  test('New Project Link', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Projects match={match} store={store} />
      </MemoryRouter>,
    );
    await waitForElement(() => getByTestId('new-project-link'));
    expect(getByTestId('new-project-link').getAttribute('href')).toBe(`/newProject/${match.params.id}`);
  });

  test('First Project Link', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Projects match={match} store={store} />
      </MemoryRouter>,
    );

    await waitForElement(() => getByTestId('project-link'));
    expect(getByTestId('project-link').getAttribute('href')).toBe(
      `/project/${initialState.projects.projects[0].projectId}/dashboard`,
    );
  });

  test('First Project Name', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Projects match={match} store={store} />
      </MemoryRouter>,
    );

    await waitForElement(() => getByTestId('project-name'));
    expect(getByTestId('project-name').textContent).toBe(initialState.projects.projects[0].name);
  });

  test('First Project Domain', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Projects match={match} store={store} />
      </MemoryRouter>,
    );

    await waitForElement(() => getByTestId('project-domain'));
    expect(getByTestId('project-domain').textContent).toBe(initialState.projects.projects[0].domain);
  });

  test('Number of Projects', async () => {
    const { getByTestId, getAllByTestId } = render(
      <MemoryRouter>
        <Projects match={match} store={store} />
      </MemoryRouter>,
    );
    await waitForElement(() => getByTestId('project-domain'));
    expect(getAllByTestId('project-name').length).toBe(initialState.projects.projects.length);
  });
});
