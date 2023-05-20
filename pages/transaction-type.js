import BreadCrumb from '../components/BreadCrumb';
import TransactionType from '../components/TransactionType';
import Welcome from '../components/Welcome';

export default function transactiontype() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'reports'}
        location={[{ link: '#', location: 'reports' }]}
      />
      <TransactionType />
    </>
  );
}
