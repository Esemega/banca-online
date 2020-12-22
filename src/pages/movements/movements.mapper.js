const mapMovementFromApiToViewModel = (movement) => {
  return {
    ...movement,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
  };
};

export const mapMovementsListFromApiToViewModelById = (movements) => {
  return movements
    .map((movement) => mapMovementFromApiToViewModel(movement));
};

export const mapAccountFromApiToViewModel = (account) => {
  return {
    ...account,
    balance: `${account.balance} €`,
    alias: account.name,
  };
};
