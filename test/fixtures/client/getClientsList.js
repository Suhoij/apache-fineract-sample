module.exports = {
  totalFilteredRecords: 2,
  pageItems: [
    {
      id: 1,
      accountNo: '000000001',
      status: {
        id: 300,
        code: 'clientStatusType.active',
        value: 'Active',
      },
      active: true,
      activationDate: [
        2013,
        3,
        1,
      ],
      fullname: 'Small shop',
      displayName: 'Small shop',
      officeId: 1,
      officeName: 'Head Office',
    },
    {
      id: 2,
      accountNo: '000000002',
      status: {
        id: 100,
        code: 'clientStatusType.pending',
        value: 'Pending',
      },
      active: false,
      fullname: 'Home Farm Produce',
      displayName: 'Home Farm Produce',
      officeId: 1,
      officeName: 'Head Office',
    },
  ],
};
