import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetcher from './fetcher';

const ONEDU001 = () => {
  const [value, setValue] = useState('');
  const [recentSearched, setRecentSearched] = useState(
    window.localStorage.getItem('recentSearched')
  );

  const [classList, setClassList] = useState([]);
  const [showList, setShowList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    if (!!value) {
      if (window.localStorage.getItem('recentSearched')) {
        const temp =
          window.localStorage.getItem('recentSearched') + `, ${value}`;
        window.localStorage.setItem('recentSearched', temp);
      } else {
        window.localStorage.setItem('recentSearched', value);
      }

      setShowList(
        classList.filter((item) => item.name.toLowerCase().includes(value))
      );
    }
    setRecentSearched(window.localStorage.getItem('recentSearched'));
  };

  const handleDelete = () => {
    window.localStorage.setItem('recentSearched', '');
    setRecentSearched('');
  };

  // postman json 응답 형식 확인
  const getTotalApi = async () => {
    const res = await fetcher('get', '/sakura');
    console.log(res);
    setClassList(res.list);
    setShowList(res.list);
  };

  const navigate = useNavigate();

  const getDetailApi = async (id) => {
    const res = await fetcher('get', `/sakura/${id}`);
    console.log(typeof res, res);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    navigate('/ONEDU002', { state: res });
  };

  useEffect(() => {
    getTotalApi();
  }, []);

  const handleDetail = (e, id) => {
    getDetailApi(id);
  };

  return (
    <div>
      <h1>강좌목록리스트</h1>
      <div>
        <input type="text" value={value} onChange={handleChange}></input>
        <button type="button" onClick={handleSearch}>
          검색
        </button>
      </div>
      <div>
        {recentSearched && (
          <>
            <span>{recentSearched}</span>
            <img alt="delete" src="delete.jpeg" onClick={handleDelete} />
          </>
        )}
      </div>
      <div>
        {showList &&
          showList.length > 0 &&
          showList.map((item, idx) => (
            <div key={idx} onClick={(e) => handleDetail(e, item.id)}>
              <img alt="thumbnail" src={item.imageFile} />
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ONEDU001;
