import BreadCrumb from '../components/BreadCrumb';
import TransactionReportManual from '../components/TransactionReportManual';
import Welcome from '../components/Welcome';

export default function transactionreportmanual() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'reports'}
        location={[{ link: '#', location: 'reports' }]}
      />
      <TransactionReportManual />
    </>
  );
}
