import Link from 'next/link'
import classNames from 'classnames'
import { useSearchParams } from 'next/navigation'
import * as style from './category.css'

// 임시 데이터. 추후 수정 필요
const categories = [
  { title: '전체', href: 'community' },
  { title: '식집사일기', href: 'plant-diary' },
  { title: '식집사꿀팁', href: 'plant-tip' },
  { title: '플랜테리어', href: 'plant-interior' },
  { title: '식물상담', href: 'plant-counsel' },
  { title: '새식물자랑', href: 'new-plant-share' },
  { title: '식물후기', href: 'plant-review' },
  { title: '식물공방', href: 'plant-workshop' },
]

const Category = () => {
  const searchParams = useSearchParams()
  const isActive = searchParams.get('category') || 'community'

  const categoryClassNames = (href: string) =>
    classNames(style.categoryImg, {
      [style.selectedCategory]: isActive === href,
    })

  return (
    <ul className={style.categoryWrapper}>
      {categories.map((category, index) => (
        <Link
          key={index}
          href={category.title === '전체' ? category.href : `?category=${category.href}`}
          className={style.categoryLink}
        >
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
