import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GidGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log({ images ,isLoading });

  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Loading...</h2> )
        }

        <div className='card-grid'>
            {
                images.map( (image) => (
                    <GifItem 
                        key={image.id}
                        { ...image } // Spread operator to pass all properties
                    />
                ))
            }
        </div>
    </>
  )
}
