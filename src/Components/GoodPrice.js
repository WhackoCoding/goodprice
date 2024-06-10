import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GoodPrice = () => {

  const [allData, setData] = useState(null);
  const [JeCheonData, setJeCheonData] = useState([]);

  let url = "https://apis.data.go.kr/6430000/citizenGoodPriceService/getCitizenGoodPrice?serviceKey=xBaKOPkcaWC%2BLfr9jBMDkor%2FtIcjB8J9wWdbdq2YFShZhDys650%2FU5x171nOeyF84xjYwPv2XCm5pDAGnx0EVQ%3D%3D&currentPage=1&perPage=200";

  useEffect(() => { // 버튼 click없이 자동으로 실행
    // async를 사용하는 다른 함수 선언
   const fetchData = async () => {
    const response = await axios.get(url);
      console.log('조회된 전체 데이터');
      console.log(response.data.body);

      // 전체 데이터 - 내림차순 정렬
      const allData=response.data.body
      .sort((a,b) => a.BSSH > b.BSSH ? -1 : a.BSSH > b.BSSH ? 1 : 0) // 내림차순 정렬
      .map(
          (item)=>{
              return(
                  // list item일 때 key props 넣어야 함. 없으면 warning 나옴
                  <tr key={item.BSSH} className="stripe">
                    <td>{item.BSSH}</td>
                    <td>{item.RPRSNTV}</td>
                    <td>{item.SIGNGU}</td>
                  </tr>
              );
          }
      )
      setData(allData);

      // filter() test
      const searchWord = '제천시'; 
      const test=response.data.body
      .filter(
        (item) => item.SIGNGU === searchWord)
      console.log(`filter() testing ... searchWord is ${searchWord}`); 
      console.log(test);  

      // 제천시 데이터 - 오름차순 정렬
      //const searchWord = '제천시'; 
      const JeCheonData=response.data.body
        .filter(
          //(item) => item.SIGNGU.toString().toLowerCase().includes(searchWord.toString().toLowerCase()))
          (item) => item.SIGNGU === searchWord)
        .sort((a,b) => a.BSSH < b.BSSH ? -1 : a.BSSH > b.BSSH ? 1 : 0) // 오름차순 정렬
        .map(
          (item)=>{
            return(
                // list item일 때 key props 넣어야 함. 없으면 warning 나옴
                // 가격에 comma 넣기 // replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
                <tr key={item.BSSH} className="stripe">
                  <td className='name'>{item.BSSH}</td>
                  <td className='industry'>{item.INDUTY}</td>
                  <td className='president'>{item.RPRSNTV}</td>
                  <td className='product'>{item.PRDLST}</td>
                  <td className='price' >{item.PC.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}</td>
                  <td className='address'>{item.ADRES}</td>
                </tr>
            );
          }
        )
      setJeCheonData(JeCheonData);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // 데이터 체크 (마지막으로)
  console.log("전체 데이터 - 내림차순 정렬", allData);
  console.log('제천시 데이터 - 오름차순 정렬', JeCheonData);
  /*
      <h2>JSON 데이터 보기</h2>
      {JeCheonData && <textarea rows={7} value={JSON.stringify(JeCheonData, null, 2)} readOnly={true}/>}
  */
  return (
    <div>
      <div className='table-display'>
          <table className="table-striped">
          <thead>
            <tr>
              <th>업소명</th>
              <th>업종</th>
              <th>대표자</th>
              <th>품목</th>
              <th className='price'>가격</th>
              <th>주소</th>
            </tr>
          </thead>
          <tbody>
            {JeCheonData}   
          </tbody>
        </table> 
      </div>
    </div>
  )
}

export default GoodPrice;
