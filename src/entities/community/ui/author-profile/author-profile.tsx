import * as style from './author-profile.css'

const AuthorProfile = () => {
  return (
    <div className={style.profileWrap}>
      <div className={style.imgWrap}>
        <img
          className={style.profileImg}
          src="https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/753f6f04-b59e-4faa-a082-080e4651cafc.jpg"
          alt="profile"
        />
      </div>
      <div className={style.infoWrap}>
        <div className={style.nameWrap}>
          <p className={style.name}>민트초코단</p>
          <time className={style.sub}>20분 전</time>
        </div>
        <p className={style.sub}>2 그링 중</p>
      </div>
    </div>
  )
}

export default AuthorProfile
