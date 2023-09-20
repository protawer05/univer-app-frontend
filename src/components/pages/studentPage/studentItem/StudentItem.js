import React from 'react'
import s from './studentItem.module.scss'
export default function StudentItem({ fullName, photo, number, email }) {
	let availablePhoto = false
	if (photo) {
		availablePhoto = true
	}
	photo = photo
		? photo
		: 'https://cdn-icons-png.flaticon.com/512/208/208985.png'
	return (
		<div className={s.wrapper}>
			<div className={s.student__info}>
				<div className={s.student__fullName}>{fullName}</div>
				<div className={s.student__photo}>
					<img
						className={s.student__photo_item}
						width={300}
						height={300}
						style={
							availablePhoto ? null : { borderRadius: '25%', marginRight: 25 }
						}
						src={photo}
						alt={fullName}
					/>
				</div>
			</div>
			<div className={s.student__contacts}>
				<div className={s.student__number}>Телефон: {number}</div>
				<div className={s.student__email}>Email: {email}</div>
			</div>
		</div>
	)
}
