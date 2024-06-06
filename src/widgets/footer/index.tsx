import * as style from './style.css'

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.details}>
      <p>
        Built with{' '}
        <a className={style.link} target="_blank" href="https://nextjs.org" rel="noreferrer">
          Next.js
        </a>{' '}
        and{' '}
        <a className={style.link} target="_blank" href="https://vanilla-extract.style/" rel="noreferrer">
          Vanilla Extract
        </a>{' '}
      </p>
    </div>
  </footer>
)
export default Footer
