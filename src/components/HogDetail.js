import React from 'react';

const HogDetail = ({ hog }) => {
	const { greased } = hog
	const medal = hog['highest medal achieved']
  const weight = hog.weight

	return (
		<div className="description">
			<strong>{greased ? 'Greased' : 'Nongreased'}</strong>
			<p>
				Highest medal achived: <strong>{medal}</strong>
			</p>
			<p>
				Weight: <strong>{weight}</strong>
			</p>
		</div>
	)
}
export default HogDetail