export const Account_Info = (accountInfo) => {
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    accounts.push(accountInfo);
    localStorage.setItem('accounts', JSON.stringify(accounts));
  };
  
  export const getAccounts = () => {
    return JSON.parse(localStorage.getItem('accounts')) || [];
  };
  
  export const getAccountByEmail = (email) => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    return accounts.find(account => account.email === email);
  };
  
  export const authenticateUser = (email, password) => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    return accounts.find(account => account.email === email && account.password === password);
  };