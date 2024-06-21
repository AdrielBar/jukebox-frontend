import { useEffect, useState } from 'react'

export function Clock({
  primaryColor = '#204246',
  secondaryColor = '#285257',
  textColor = '#ffffff',
  style = 'standard',
  format = '12-hour',
}) {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 90)

    return () => {
      clearInterval(timer)
    }
  }, [])

  if (format === '12-hour' || null) {
    return (
      <div
        className="clock"
        style={{ backgroundColor: primaryColor, color: textColor, left: '10%' }}
      >
        <span>
          {date.toLocaleTimeString('en-US', {
            hour12: true,
          })}
        </span>
      </div>
    )
  } else if (format === '24-hour') {
    return (
      <div
        className="clock"
        style={{ backgroundColor: primaryColor, color: textColor, left: '15%' }}
      >
        <span>
          {date.toLocaleTimeString('en-US', {
            hour12: false,
          })}
        </span>
      </div>
    )
  }
}
