import { ContractList } from './type';

export const mockedContractData: ContractList[] = [
  {
    contract_name: {
      img: '/assets/images/sample1.png',
      name: 'Aditya Toke',
    },
    type: 'Full Time',
    start_date: new Date(),
    amount: '$200 USD',
    status: {
      name: 'Active',
      id: 'active',
    },
  },
  {
    contract_name: {
      img: '/assets/images/sample2.png',
      name: 'Aditya Toke 2',
    },
    type: 'Full Time',
    start_date: new Date(),
    amount: '$200 USD',
    status: {
      name: 'Active',
      id: 'active',
    },
  },
  {
    contract_name: {
      img: '/assets/images/sample1.png',
      name: 'Aditya Toke 3',
    },
    type: 'Full Time',
    start_date: new Date(),
    amount: '$200 USD',
    status: {
      name: 'Signature Pending',
      id: 'signature_pending',
    },
  },
];
