import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Projects from '../components/elements/Projects';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import { getProjects } from '../__helpers__/getProjects';
// import { getUser } from '../';

//Redux Config
const mockStore = configureStore([thunk]);

const initialState = {
  projects: {
    project: [],
    projects: [
      {
        id: 1,
        projectId: 'project-x9zu1ccjrprg7xf',
        userId: 'google-oauth2|115591737006318112594',
        name: 'Budnick Shop!',
        apiKey: 'a956c6a8bea9af1c64838bdb90fddf6f',
        password: 'f7fd2c7c65147f58e3ebebe9d56384f2',
        domain: 'https://budnick1.myshopify.com/',
        createdAt: '2019-02-04T03:13:21.698Z',
        updatedAt: '2019-02-04T03:26:30.286Z',
      },
    ],
  },
};

//Sets up the match on the route for a user
const match = {
  params: {
    id: 'google-oauth2%7C115591737006318112594',
  },
};

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

//Mocks Error logging
console.error = jest.fn();

describe('<Projects/>', async () => {
  let store = mockStore(initialState);

  test('Frist Project Link', async () => {
    const { debug, getByTestId } = render(
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
    const { debug, getByTestId } = render(
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
