import {useState} from 'react'
import './App.css'

//  This is the list (static data) used in the application. You can move it to any component if needed.

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

// Replace your code here
const App = () => {
  const [countryList, setCountryList] = useState(initialCountriesList)

  const findCountry = id => {
    const revisedList = countryList.map(each => {
      if (id === each.id) {
        const updated = {...each, isVisited: !each.isVisited}
        return updated
      }
      return each
    })

    setCountryList(revisedList)
  }

  const updatedList = countryList.filter(each => each.isVisited === true)

  return (
    <div className="app-container">
      <h1 className="main-heading">Countries</h1>
      <ul className="list-container">
        {countryList.map(eachCountry => {
          const {name, id, isVisited} = eachCountry

          const changeStatus = () => {
            findCountry(id)
            console.log(id)
          }

          return (
            <li key={id} className="list">
              <p className="country">{name}</p>
              {isVisited ? (
                <p className="visited">Visited</p>
              ) : (
                <button
                  onClick={changeStatus}
                  type="button"
                  className="visit-button"
                >
                  Visit
                </button>
              )}
            </li>
          )
        })}
      </ul>
      <h1 className="main-heading">Visited Countries</h1>
      <ul className="visited-countries-container">
        {updatedList.length === 0 ? (
          <p>No Countries Visited Yet</p>
        ) : (
          updatedList.map(each => {
            const {id, imageUrl, name, isVisited} = each

            const removeVisited = () => {
              findCountry(id)
            }

            return isVisited === true ? (
              <li key={id} className="visited-country">
                <img src={imageUrl} alt="thumbnail" />
                <div className="bottom">
                  <p className="country-name">{name}</p>
                  <button type="button" onClick={removeVisited}>
                    Remove
                  </button>
                </div>
              </li>
            ) : null
          })
        )}
      </ul>
    </div>
  )
}

export default App
