import BreadCrumb from '../components/BreadCrumb';
import TransactionReportAuthorized from '../components/TransactionReportAuthorized';
import Welcome from '../components/Welcome';

export default function transactionreportmanualauthorized() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'reports'}
        location={[{ link: '#', location: 'reports' }]}
      />
      <TransactionReportAuthorized />
    </>
  );
}
