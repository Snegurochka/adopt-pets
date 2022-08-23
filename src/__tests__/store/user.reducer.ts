import userReducer from './../../store/reducers/user';

describe('Reducer: user', () => {
    it('without additional parameters should return initial state', () => {
        expect(userReducer(undefined, {type: 'UNKNOWN_ACTION'}))
          .toEqual( {user: null} );
    }
});
