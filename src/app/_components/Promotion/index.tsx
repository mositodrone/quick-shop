'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // const TimerComponent = () => {
  // const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 7)

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Calculate target date (current date + 7 days)

      const currentTime = new Date()
      // Calculate remaining time
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime))

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      // Update state with remaining time
      setTime({ days, hours, minutes, seconds })
    }

    // Update timer every second
    const intervalId = setInterval(calculateTimeLeft, 1000)

    // Clear interval on component unmount
    return () => clearInterval(intervalId)
  }, []) // Empty dependency array to run effect only once
  //}

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the month</h3>
        <p>
          Discover unbeatable savings this month at our tech store! Explore exclusive deals on top
          gadgets, accessories, and more. Don't miss out on the hottest tech trends at incredible
          prices! 🎁 🛒
        </p>

        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minuites" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
