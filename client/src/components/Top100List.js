import React from 'react';
import Top100 from './Top100';

const Top100List = ({ top100s, updateTop100, deleteTop100 }) => (
    <div className="row">
   
        { top100s.map( top100 => {
            return (
                <Top100
                    key={top100.id}
                    id={top100.id}
                    name={top100.name}
                    complete={top100.complete}
                    updateTop100={updateTop100}
                    deleteTop100={deleteTop100}
                />
            )
        })
        }
    </div>
)

export default Top100List;