import { useEffect, useState } from 'react'

const initialDate = new Date()
const formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'Asia/Manila',
})

export default function LiveDateLabel() {
  const [date, setDate] = useState(initialDate)

  useEffect(() => {
    const update = () => setDate(new Date())
    const timer = window.setInterval(update, 60_000)
    return () => window.clearInterval(timer)
  }, [])

  return <>{formatter.format(date).toUpperCase()}</>
}
