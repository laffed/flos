import {
  hookstate, State, useHookstate
} from '@hookstate/core';


export type UserInfoState = {
  tag: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export type UserInfoKey = keyof UserInfoState;

const userInfoState = hookstate({
  tag: 'asdf',
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'janedoe@aol.com',
  phoneNumber: '+123456789999',
});

const wrapState = (state: State<UserInfoState>) => ({
  get: (k: UserInfoKey): UserInfoState[typeof k] => state[k].value,
  set: (k: UserInfoKey, v: UserInfoState[typeof k]) => state[k].set(v),
});

export const useUserInfoState = () => wrapState(useHookstate(userInfoState));
