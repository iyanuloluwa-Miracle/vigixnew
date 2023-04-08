import BreadCrumb from '../components/BreadCrumb';
import TransactionReportManualAuthorized from '../components/TransactionReportManualAuthorized';
import Welcome from '../components/Welcome';

export default function transactionreportmanualauthorized() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'reports'}
        location={[{ link: '#', location: 'reports' }]}
      />
      <TransactionReportManualAuthorized />
    </>
  );
}
