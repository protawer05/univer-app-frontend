import React from 'react'
import StudentItem from './studentItem/StudentItem'
import s from './studentPage.module.scss'
export default function StudentPage() {
	const student1 = {
		fullName: 'Сычёв Антон Сергеевич',
		photo:
			'https://sun9-27.userapi.com/impf/c626430/v626430324/13cc2/jJwgRGzgWkY.jpg?size=1280x1280&quality=96&sign=b808b690fbe993e2ee5f197b495be0a1&type=album',
		number: '89191402161',
		email: 'sychiov2015@yandex.ru',
	}
	return (
		<div className={s.students__wrapper}>
			<StudentItem {...student1} />
		</div>
	)
}
