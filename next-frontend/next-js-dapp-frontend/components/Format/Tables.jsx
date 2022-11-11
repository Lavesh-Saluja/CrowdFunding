import React from 'react'
import {Table,Avatar,Tag,SvgMoreVert} from "web3uikit"
function Tables() {
  return (
       <Table
  columnsConfig="80px 3fr 2fr 2fr 80px"
  data={[
    [
     
      <Avatar key={3} isRounded size={36} theme="image"/>,
      'Moralis Magi',
      <Tag key={3} color="blue" text="Nft Collection"/>,
      '0x18...130e',
      <SvgMoreVert key={2} fill="black" fontSize={32}/>
      
      
    ],
  ]}
  header={[
    '',
    <span key={5}>Name</span>,
    <span key={4}>Type</span>,
    <span key={10}>Module</span>,
    ''
  ]}
  isColumnSortable={[
    false,
    true,
    false,
    false
  ]}
  maxPages={3}
  onPageNumberChanged={function noRefCheck(){}}
  onRowClick={function noRefCheck(){}}
  pageSize={5}
/>
    
  );
}

export default Tables
