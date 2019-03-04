import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/elements/NavBar';
// import configureStore from 'redux-mock-store';
import fetch from 'node-fetch';
import { debug } from 'util';
import { auth0Client } from '../components/elements/Auth';

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

// auth0Client.isAuthenticated = jest.fn();

describe('<Navbar />', () => {
  let user;
  let user_id = 'google-oauth2|115591737006318112594';

  test('Initial State Setup', async () => {
    const response = await fetch(`http://localhost:4000/user/${user_id}`, {
      method: 'GET',
    });

    user = await response.json();
  });

  // test('Logged in Users name', async () => {
  //   const { getByTestId } = render(
  //     <MemoryRouter>
  //       <Navbar match={match} />
  //     </MemoryRouter>,
  //   );

  //   await waitForElement(() => getByTestId('user-name'));
  //   expect(getByTestId('user-name').textContent).toBe(user.fullName);
  // });

  test('Site Title', () => {
    const { debug, getByTestId } = render(
      <MemoryRouter>
        <Navbar match={match} />
      </MemoryRouter>,
    );

    // debug();
    expect(getByTestId('site-title').textContent).toBe('Shopify Dashbaord');
  });

  test('Not Logged in', () => {
    const { debug, getByTestId } = render(
      <MemoryRouter>
        <Navbar match={match} />
      </MemoryRouter>,
    );
  });
});
