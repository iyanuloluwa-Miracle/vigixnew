import BreadCrumb from '../components/BreadCrumb';
import Welcome from '../components/Welcome';

export default function partners() {
  return (
    <>
      <Welcome />
      <BreadCrumb
        tab={'adminMembers'}
        location={[{ link: '', location: 'Admin Members' }]}
      />
    </>
  );
}
