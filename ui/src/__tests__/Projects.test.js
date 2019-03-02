import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Projects from '../components/elements/Projects';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// import { getProjects } from '../test_helpers/getProjects';

//Redux Config
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

//Sets up the match on the route
const match = {
  params: {
    id: 'google-oauth2%7C115591737006318112594',
  },
};

const mockStore = configureStore([thunk]);

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

//This mocks the function
console.error = jest.fn();

test('<Projects/>', async () => {
  let store = mockStore(initialState);

  const { debug, getByTestId } = render(
    <MemoryRouter>
      <Projects match={match} store={store} />
    </MemoryRouter>,
  );

  debug();
});
