import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useHook from './utils';

const Container = styled.div`
    .products {
        margin: 20px;
        padding: 0;
        list-style-type: none;
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
    }
  
  .products__single {
    height: 250px;
    list-style: none;
    padding: 20px;
    background-color: rgb(220, 220, 220);
    text-align: center;
    border-radius: 5px;
    cursor: pointer; /* Imp on clickables */
  }
  
  .products__single > img{
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 3px;
  }
  
  .pagination {
    padding: 10px;
    margin: 15px 0;
    display: flex;
    justify-content: center;
  }
  
  .pagination > span{
    padding: 15px 20px;
    border: 1px solid gray;
    cursor: pointer;
  }
  
  .pagination__disable{
    opacity: 0;
  }
  
  .pagination__selected{
    background-color: rgb(220, 220, 220);
  }

`

const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const  status = useHook();

    async function loadData(){
      const response  = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page-1)*10}`)
      const data = await response.json()
  
      if(data&& data.products) {
        setProducts(data.products)
        setTotalPages(data.total)
      }
    }

    useEffect(()=> {
        loadData();
    }, [page])

    const onClickPaginationButton = (pageNumber) => {
        setPage(pageNumber)
    }

    console.log(status)

  return (
    <Container>
        {products.length > 0 && 
        (<div className="products">
            {products.map((prod) => {
            return <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} /> {/* alt is imp */}
                <span>
                {prod.title}
                </span>
            </span>
            })}
      </div>)}
      {products.length > 0 && (
        <div className='pagination'>
            <span 
                className={page > 1 ? "" : "pagination__disable"}
                onClick={() => page<1? null:onClickPaginationButton(page-1)}>◀</span>

            {Array(10).fill(1).map((item, i)=>{
                return <span key={i} 
                    className={page === i + 1 ? "pagination__selected" : ""}
                    onClick={() => onClickPaginationButton(i+1)}>{i + 1}</span>
            })}
            <span 
                className={page < (totalPages/products.length) ? "" : "pagination__disable"}
                onClick={() => page<1? null:onClickPaginationButton(page+1)}
            >▶</span>
        </div>
      )}
    </Container>
  )
}

export default Pagination