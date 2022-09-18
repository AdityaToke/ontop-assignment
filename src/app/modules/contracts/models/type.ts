export type ContractList = {
  contract_name: {
    img: string;
    name: string;
  };
  type: string;
  start_date: Date;
  amount: string;
  status: {
    name: string;
    id: string;
  };
};
