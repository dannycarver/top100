import React from 'react';
import Top100 from './Top100';

const Top100List = ({Top100s, updateTop100, deleteTop100 }) => (
    <div className="row">
   
        { Top100s.map( top100 => {
        
            <Top100
                key={top100.id}
                {...top100}
                updateTop100={updateTop100}
                deleteTop100={deleteTop100}
            />
        })
        }
    </div>
)

export default Top100List;