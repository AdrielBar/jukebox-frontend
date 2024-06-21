import { ScrollQueue } from '../../components'
import { Clock } from '../components/Clock'

import './Board1.css'

export const Board1 = () => {
  return (
    <div>
      <header>
        <h1 className="center">Jukebox</h1>
      </header>

      <body>
        <Clock
          primaryColor={'#204246'}
          textColor={'#ffffff'}
          format={'24-hour'}
        ></Clock>
        <ScrollQueue></ScrollQueue>
      </body>
    </div>
  )
}
