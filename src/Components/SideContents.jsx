import React from 'react';

function SideContents(props) {
  return (
    <section className='SideContents_section' style={{height : '100%', backgroundColor: 'white', width: '300px'}}>
      <div style={{height : '120px', border : '1px solid violet', marginBottom : "8px"}}>
        로그인
      </div>
      <div style={{height : '120px', border : '1px solid violet', marginBottom : "8px"}}>
        광고
      </div>
      <div style={{ border : '1px solid violet', padding : '4px', marginBottom : '8px'}}>
        <div style={{height : '42px', border  : "1px solid lightgrey"}}>
          쇼핑
        </div>
        <div style={{height : '70px', border  : "1px solid lightgrey"}}>
          키워드
        </div>
        <div className="row" style={{gap : '4px', paddingBottom : '4px'}}>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
        </div>
        <div className="row" style={{gap : '4px', paddingBottom : '4px'}}>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
        </div>
        <div className="row" style={{gap : '4px', paddingBottom : '4px'}}>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
        </div>
        <div className="row" style={{gap : '4px', paddingBottom : '4px'}}>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '146px', flex : '1'}}></div>
        </div>
      </div>
      <div style={{marginBottom : "20px", border : '1px solid violet', padding : '4px'}}>
        품절주의!역대급 핫딜
        <div className="row" style={{gap : '4px', paddingBottom : '4px'}}>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '60px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '60px', flex : '2'}}></div>
        </div>
        <div className="row" style={{gap : '4px', paddingBottom : '4px'}}>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '60px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '60px', flex : '2'}}></div>
        </div>
        <div className="row" style={{gap : '4px', paddingBottom : '4px'}}>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '60px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '60px', flex : '2'}}></div>
        </div>
        <div className="row" style={{gap : '4px', paddingBottom : '4px'}}>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '60px', flex : '1'}}></div>
          <div className="col-4" style={{backgroundColor : 'lightgrey', height : '60px', flex : '2'}}></div>
        </div>
        <div className="row" style={{border : '1px solid lightGrey', textAlign : 'center'}}>
          <div className="col-4" style={{borderRight : '1px solid lightGrey', flex: '1'}}>쇼핑홈</div>
          <div className="col-4" style={{borderRight : '1px solid lightGrey',flex: '1'}}>핫딜</div>
          <div className="col-4" style={{flex: '1'}}>가을맞이</div>
        </div>
      </div>
      <div className="row" style={{border : '1px solid lightGrey', textAlign : 'center', height : '196px'}}>
        광고
      </div>
    </section>
  );
}

export default SideContents;