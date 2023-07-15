import styles from './main.module.scss'

export function Preloader() {


  return <div className={styles.preloader}>
    <p className={styles.title}>
      YumeTune
    </p>
    <audio src={`${import.meta.env.VITE_APP_API}/songs/__preloader__/pan-paka-pan.mp3`} autoPlay></audio>
  </div>
}