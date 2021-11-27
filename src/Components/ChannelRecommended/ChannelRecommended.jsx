import './ChannelRecommended.scss';

import RecommendedChannels1 from '../../Assets/Images/recommended_channels1.png';
import RecommendedChannels2 from '../../Assets/Images/recommended_channels2.png';
import RecommendedChannels3 from '../../Assets/Images/recommended_channels3.png';

function ChannelRecommended() {
	return (
		<>
			<div className='channel-recommended'>
				<h4 className='channel-recommended__heading'>
					Recommended channel
				</h4>

				<ul className='channel-recommended__users'>
					<li className='channel-recommended__user'>
						<img
							src={RecommendedChannels1}
							alt='Recommended user img'
							width='50'
							height='50'
						/>

						<strong className='channel-recommended__user-name'>
							Flora Benson
						</strong>
					</li>

					<li className='channel-recommended__user'>
						<img
							src={RecommendedChannels2}
							alt='Recommended user img'
							width='50'
							height='50'
						/>

						<strong className='channel-recommended__user-name'>
							Violet Cobb
						</strong>
					</li>

					<li className='channel-recommended__user'>
						<img
							src={RecommendedChannels3}
							alt='Recommended user img'
							width='50'
							height='50'
						/>

						<strong className='channel-recommended__user-name'>
							Phillip Mullins
						</strong>
					</li>
				</ul>
			</div>
		</>
	);
}

export default ChannelRecommended;
