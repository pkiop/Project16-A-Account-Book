import { makeAutoObservable, runInAction } from 'mobx';
import MethodAPI from 'apis/method';
import { IMethod } from 'types';
import { TransactionStore } from '../Transaction';

const initiState: { methodList: IMethod[] } = {
  methodList: [],
};
export const MethodStore = makeAutoObservable({
  methodList: initiState.methodList,

  async loadMethods() {
    const methods = await MethodAPI.getMethods(TransactionStore.accountObjId);
    runInAction(() => {
      this.methodList = methods;
    });
  },
});

export default {};
