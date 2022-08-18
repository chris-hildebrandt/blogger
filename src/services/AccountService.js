import { AppState } from '../AppState'
import { Account } from "../models/Account.js"
import { logger } from '../utils/Logger'
import { server as server } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await server.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(accountData){
    const res = await server.put('account', accountData)
    AppState.account = new Account(res.data)
  }
}

export const accountService = new AccountService()
