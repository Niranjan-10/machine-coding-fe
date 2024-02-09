import React from 'react'

const ExplorerCard = ({file}) => {
  return (
    <>
        <div style={{
            display: 'flex',
            // justifyContent: 'center',
            // backgroundColor: '#ccc',
            
            gap: '10px'
        }}>
            <div>{file?.isFolder? '🗂️': '📁'}</div>
            <div>{file?.name}</div>
        </div>
        <div style={{marginLeft: '18px', marginTop: '10px'}}>
            {file?.items.map((item) => 
                <ExplorerCard file={item} key={item?.id}/>
            )}
        </div>
    </>
  )
}

export default ExplorerCard