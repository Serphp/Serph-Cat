/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useEffect, useState } from 'react';

type Cat = {
  id: string;
  url: string;
};

export default function Cat() {
  const [cats, setCats] = useState<Cat[]>([
    {
        id: '',
        url: '',
    },
  ]);

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=5&mime_types=gif')
      .then((response) => {
        const data = response.data;
        const extractedCats: Cat[] = data.map((cat: any) => ({
          id: cat.id,
          url: cat.url,
        }));
        setCats(extractedCats);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className='container2'>

      <div className='container'>
        <button className='itembutton'>Like</button>
        <button className='itembutton'>Dislike</button>
      </div>

      {cats.map((cat) => (
        
        <div className='indexcontainer' key={cat.id}>
            <div className=''>
              <img src={cat.url} alt="cat" width={300} height={200}/>
            </div>
            <div className='itemop'>
              <button className='itembutton'>Like</button>
              <button className='itembutton'>Dislike</button>
            </div>
        </div>

      ))}


      </section>
    </>
  );
}
