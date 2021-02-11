//NB: Everytime a prop or state changes, the component is re-rendered.

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../9-customHooks/useFetch';

const url = 'https://api.github.com/users';

const MemoIndex = () => {

  const { users } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);


  /* useCallback prevents a re-render if the props used in the function isn't called. */
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  return (
    <div
      style={{ marginTop: '4rem', alignItems: 'center' }}
    >
      <h1>Count: {count}</h1>
      <button className='btn btn-primary btn-lg' onClick={() => setCount(count + 1)}>Count Up</button>
      <h3 style={{ marginTop: '3rem' }}> Cart Value: {cart}</h3>

      <BigList users={users} addToCart={addToCart} />

    </div >
  )
}


/* react.memo checks if the value of the props changed... if it didn't it prevents a re-render */
const BigList = React.memo(({ users, addToCart }) => {

  useEffect(() => {
    console.log('biglist called');
  })

  return (
    <section>
      {
        users.map((user) => {
          return (
            <SingleProduct key={user.id} {...user} addToCart={addToCart}></SingleProduct>
          )
        })
      }
    </section>
  )
});

const SingleProduct = ({ login, avatar_url, addToCart }) => {

  useEffect(() => {
    console.count('single Item called');
  })
  return (
    <article className='jumbotron' style={{ marginTop: '4rem' }}>
      <img className='rounded' src={avatar_url} alt={login} className='rounded'
        height='150'
        width='130'
        style={{ marginBottom: '9px' }} />
      <h4>{login}</h4>
      <button className='btn btn-primary' onClick={() => addToCart()}>Add to Cart</button>
    </article>
  )
}

export default MemoIndex;