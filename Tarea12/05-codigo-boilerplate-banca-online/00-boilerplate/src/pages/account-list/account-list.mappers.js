export const mapAccountListApiToVm = accountList => {
    return accountList.map(account => mapAccountApiToVm(account));
};

const mapAccountApiToVm = account => {
    return {
        id: account.id,
        iban: account.iban,
        name: account.name,
        balance: `${account.balance} €`,
        lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),}
};