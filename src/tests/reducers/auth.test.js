import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'USERid'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const action = {type: 'LOGOUT'};
    const state = authReducer({uid: 'USERid'}, action);
    expect(state).toEqual({});
});