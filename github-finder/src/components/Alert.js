import React from 'react'

export default function Alert({type, msg}) {
	return (
		alert !== null && (
			<div className={`alert alert-${type}`}>
				{msg}
			</div>
		)
	)
}
