export const mapTransferFromViewModelToApi = (transfer) => {
  return {
    ...transfer,
    description: transfer.concept,
    transaction: new Date(transfer.year, transfer.month, transfer.day)
  };
};