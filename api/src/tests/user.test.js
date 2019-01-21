const user = require('../user');

describe('User Tests', () => {
  it('should return the user object', () => {
    expect(user.getUser('google-oauth2|101062415965177315471')).toBe({
      id: 2,
      userId: 'google-oauth2|101062415965177315471',
      firstName: 'David',
      lastName: 'Budnick',
      fullName: 'David Budnick',
      nickName: 'david',
      picture:
        'https://lh5.googleusercontent.com/-qBpnZLwiRT0/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcZUGhAxms1-qw497V6c69BKPwCdUA/mo/photo.jpg',
      createdAt: '2019-01-19T23:09:34.351Z',
      updatedAt: '2019-01-19T23:09:34.351Z',
    });
  });
});
