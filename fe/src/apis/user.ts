import { IInvitaion } from 'components/organisms/InvitationList';
import axios from './axios';
import urls from './urls';

export default {
  getTitleById(accountObjId: string) {
    return axios.get(`${urls.userTitle}${accountObjId}`);
  },
  getUserInvitation(): Promise<IInvitaion[]> {
    return axios.get(urls.getUserInvitation());
  },
};
