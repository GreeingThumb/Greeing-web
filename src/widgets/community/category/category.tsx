import Link from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import * as style from './category.css'

const Category = () => {
  const path = usePathname()
  const isActive = (href: string) => path === href

  // 임시 데이터. 추후 수정 필요
  const categories = [
    { title: '전체', href: '/community' },
    { title: '식집사일기', href: '/community/plant-diary' },
    { title: '식집사꿀팁', href: '/community/plant-tip' },
    { title: '플랜테리어', href: '/community/plant-interior' },
    { title: '식물상담', href: '/community/plant-counsel' },
    { title: '새식물자랑', href: '/community/new-plant-share' },
    { title: '식물후기', href: '/community/plant-review' },
    { title: '식물공방', href: '/community/plant-workshop' },
  ]

  const categoryClassNames = (href: string) =>
    classNames(style.categoryImg, {
      [style.selectedCategory]: isActive(href),
    })

  return (
    <ul className={style.categoryWrapper}>
      {categories.map((category, index) => (
        <Link key={index} href={category.href} className={style.categoryLink}>
          <div className={categoryClassNames(category.href)}>
            <img src="/assets/icon/kakao.svg" alt="category" width={30} height={30} />
          </div>
          <p>{category.title}</p>
        </Link>
      ))}
    </ul>
  )
}

export default Category
