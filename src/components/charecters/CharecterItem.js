import React from 'react'


// card divided into front and back part here
const CharecterItem = ({ item }) => {
  return (
    <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
                <img src={item.img} alt='charecte photo'/>
            </div>
            <div className='card-back'>
                <h1>{item.name}</h1>
                <ul>
                    <li>
                        <strong>Artist:</strong> {item.portrayed}
                    </li>
                    <li>
                        <strong>Nickname:</strong> {item.nickname}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {item.occupation[0]}
                    </li>
                    <li>
                        <strong>Birthday:</strong> {item.birthday}
                    </li>
                    <li>
                        <strong>Status:</strong> {item.status}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CharecterItem