export const mapAccountFromApiToViewModel = (apiAccount) => {
  let { name, ...vmAccount } = apiAccount;
  vmAccount = {
    ...vmAccount,
    alias: name,
  };
  return vmAccount;
};

export const mapAccountFromViewModelToApi = (vmAccount) => {
  let { alias, ...apiAccount } = vmAccount;
  apiAccount = {
    ...apiAccount,
    name: alias,
  };
  return apiAccount;
};
