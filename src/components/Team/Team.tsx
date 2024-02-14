import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import './Team.css'

export default function Team() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.screen.width > 1024) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [window.screen.width]);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "center end"]
  });
  const yRange = useTransform(scrollYProgress, [1, 0], [400, 0]);
  const yRangeRev = useTransform(scrollYProgress, [1, 0], [-400, 0]);

  const style = isMobile ? {translateX: 0} : {translateX: yRange}
  const styleRev = isMobile ? {translateX: 0} : {translateX: yRangeRev}

  return (
    <section className='team' ref={ref} id='team'>
      <div className='team__members'>
        <div className='team__line'>  
          <div className='team__header'>
            <h2 className='title team__title'>Team</h2>
            <p className='desc team__desc'>
              The master of multiple programming languages and frameworks, always ready to adapt and overcome any obstacles may arise. Multiple programming languages and frameworks.
            </p>
          </div>
          <motion.div style={style} className='team__line'>  
            <div className='team__member'>
              <div className='member__info'>
                <p className='member__name'>Vasily Sumanov</p>
                <p className='member__nickname'>@reat</p>
              </div>
              <p className='desc member__desc'>
                Crypto-native researcher Ph.D. token engineer. Simulations of AMMs and Defy products tokens value capturing.
              </p>
            </div>
            <div className='team__member'>
              <div className='member__info'>
                <p className='member__name'>Leeroy Oshiya</p>
                <p className='member__nickname'>@hopper</p>
              </div>
              <p className='desc member__desc'>
                Several decades of experience with top strategy consiltancies, consulting to institutional investment managers.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div style={styleRev} className='team__line'>
          <div className='team__member'>
            <div className='member__info'>
              <p className='member__name'>August Mosh</p>
              <p className='member__nickname'>@databrain</p>
            </div>
            <p className='desc member__desc'>
            Several decades of experience with top strategy consiltancies, consulting to institutional investment managers.
            </p>
          </div>
          <div className='team__member'>
            <div className='member__info'>
              <p className='member__name'>Mark Lia</p>
              <p className='member__nickname'>@markli</p>
            </div>
            <p className='desc member__desc'>
              Junior Penguin. Master's student in physics engineer and full time crypto nerd. Meets deadlines with a couple of beers.
            </p>
          </div>
          <div className='team__member'>
            <div className='member__info'>
              <p className='member__name'>Grigory Popov</p>
              <p className='member__nickname'>@gpopov</p>
            </div>
            <p className='desc member__desc'>
              Data Scientist Data Engineer Data pasteyourcodehere Crypto and Venture Enthusiast, Patrolled and Real Human Bean.
            </p>
          </div>
          </motion.div>
      </div>
    </section>
  )
}
