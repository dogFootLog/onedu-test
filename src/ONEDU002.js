import { useLocation } from 'react-router-dom';

const ONEDU002 = () => {
  const location = useLocation();
  console.log('infooo', location.state);
  const { info } = location.state;
  return (
    <div>
      {' '}
      <img alt="thumbnail" src={info.imageFile} />
      <p>{info.name}</p>
      <p>{info.message}</p>
    </div>
  );
};

export default ONEDU002;
