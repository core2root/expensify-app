import moment from 'moment';

const expenses = [{
  id:'1',
  description:'Gum',
  note: '',
  amount:195,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},{
  id:'2',
  description:'Coffe',
  note: '',
  amount:225,
  createdAt: 10000
},{
  id:'3',
  description:'Rent',
  note: '',
  amount:30000,
  createdAt: 65000
},{
  id:'4',
  description:'TV',
  note: '',
  amount:55000,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

export default expenses;