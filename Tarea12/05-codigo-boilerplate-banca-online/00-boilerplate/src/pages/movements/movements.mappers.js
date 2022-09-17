export const mapMovementsListFromApiToVm = (movementsList) => {
    return movementsList.map((account) => mapMovementsFromApiToVm(account));
  };
  
  const mapMovementsFromApiToVm = (movement) => {
    return {
      transaction: new Date(movement.transaction).toLocaleDateString(),
      realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
      description: movement.description,
      amount: `${movement.amount} €`,
      balance: `${movement.balance} €`,
    };
  };
  
  export const mapUsersListFromApiToVm = (usersList) => {
    return usersList.map((account) => mapUsersFromApiToVm(account));
  };
  
  const mapUsersFromApiToVm = (account) => {
    return {
      balance:`${account.balance} €`,
      iban: account.iban,
      alias: account.name,
    };
  };