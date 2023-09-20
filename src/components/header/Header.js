import s from './header.module.scss'
export default function Header() {
	return (
		<div className={s.header}>
			<div className={s.header__wrapper}>
				<div className={s.header__container}>
					<a href='/#' className={s.link} alt='students'>
						Студенты
					</a>
					<a href='/#' className={s.link} alt='students'>
						Преподователи
					</a>
				</div>
				<a href='/#' className={s.logo__container}>
					<img src='./images/favicon.svg' alt='logo' className={s.logo} />
				</a>
				<div className={s.header__container}>
					<a href='/#' className={s.link} alt='students'>
						Коспекты и фото
					</a>
					<a href='/#' className={s.link} alt='students'>
						Заметки
					</a>
				</div>
			</div>
		</div>
	)
}
