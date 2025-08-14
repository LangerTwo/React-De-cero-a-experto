import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPages = () => {

  const { id } = useParams();
  // console.log(params);

  const hero = getHeroById(id);
  // console.log(hero);

  if (!hero) {
    return <Navigate to="/" />
  }

  return (
    <h1>HeroPages</h1>
  )
}