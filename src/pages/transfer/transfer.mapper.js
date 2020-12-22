export const mapTransferFromViewModelToApi = (transfer) => {
  return {
    accountId: transfer.accountId,
    iban: transfer.iban,
    name: transfer.name,
    amount: transfer.amount,
    description: transfer.concept,
    notes: transfer.notes,
    transactionDate: transfer.date,
    email: transfer.email,
  };
};
