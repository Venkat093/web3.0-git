import Graph from '../assets/images/Graph-1.png';
import { FaFileInvoice } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai';
import left from '../assets/images/Plaque_Left.png';
import buyback from '../assets/logo/BuyBack.png';
import reward from '../assets/logo/BUSDRewards.png';
import graphbottom from '../assets/images/Graph_Bottom.png';
import liquidity from '../assets/logo/AutoLiquidity.png';
const EverGrowTheame = () => {
	return (
		<div className='themebody'>
			<div className='theam-content'>
				<div className=' row'>
					<div className='theam-contenr col-md-5'>
						<h1>HYPER DEFLATIONARY TOKEN WITH $BUSD REFLECTIONS</h1>
						<p>
							EverGrow works on an autonomous, frictionless, yield farming and
							liquidity generation protocol. Simply hold $EGC tokens in your
							wallet and earn passive income in Binance pegged USD ($BUSD) – a
							regulated stable-coin pegged 1-1 to the US dollar. Accumulating
							Wealth Has Never Been This Simple!
						</p>
						<div className='row gap-3'>
							<div className='col-md-1'>
								<FaFileInvoice size={50} />
							</div>
							<div className='col-md-4 mt-3'>
								<span style={{ fontWeight: '26px' }}> Smart Contract</span>
							</div>

							<div className='col-md-1'>
								<AiFillPlayCircle size={50} />
							</div>
							<div className='col-md-4 mt-2'>
								<span style={{ fontWeight: '26px' }}> How to Buy $EGC</span>
							</div>
						</div>
						<div className='detailbuttons'>
							<button className='but1'>White paper</button>
							<button className='but2'>Price Chart</button>
							<button className='but3'> Chinease White paper</button>
						</div>
					</div>

					<div className='theam-contenr col-md-6 mt-3'>
						<img className='grap-img' src={Graph} alt='' />
					</div>
				</div>

				<div className='row'>
					<div className='col-sm-1 imgg align-items-center'>
						<img className='left-img' src={left} alt='' />
					</div>
					<div className='col-sm-10'>
						<h1>
							<b>ABOUT</b>
						</h1>
						<p>
							EverGrow Coin ($EGC) is a deflationary token designed to become
							scarcer over time. Eligible Holders* of $EGC will earn an 8%
							reward from every Buy/Transfer/Sell Transaction in Binance pegged
							USD ($BUSD), which is automatically sent to your wallet. This
							generates a stable passive income.
						</p>
						<h1>
							<b>WHY HOLD EVERGROWCOIN?</b>
						</h1>
						<p>
							There are various strategies in place to decrease the supply of
							EverGrow Coin over time, meaning individual holdings will become
							more valuable and receive a higher proportion of rewards.
						</p>
						<p>
							Via BuyBack & Burn, 2% $EGC is collected from every transaction
							and converted to BNB, which are stored in the contract. When
							BuyBack & Burn is enabled, the contract purchases $EGC directly
							from exchanges, driving the price up, and immediately and
							permanently removes those purchased tokens from circulating supply
							by sending them to the contract ‘Burn’ address. This means less
							circulating supply, so a higher share of rewards paid to holders.
						</p>
						<p>
							EverGrow are also launching a series of utilities and platforms
							over the coming months, which will all generate revenue
							independently. Rather than this revenue going to the EverGrow
							founders and staff, all profits will be used for further BuyBack &
							Burn, generating positive price action, and removing more tokens
							from circulating supply and rewards eligibility.
						</p>
						<p>
							The founders and team can only generate income and operating
							revenue via the same rewards system investors benefit from, fully
							aligning investors and those running the project with one common
							goal.
						</p>
					</div>
				</div>
				<div className='row mt-4 '>
					<div className='col-sm-2 d-flex flex-column icons   '>
						<img className=' reward-icons ' src={buyback} alt='' />
						<span>$BUSD Reward</span>
					</div>
					<div className=' col-sm-2 d-flex flex-column icons '>
						<img className='l reward-icons ' src={reward} alt='' />
						<span>$BUSD Reward</span>
					</div>
					<div className='col-sm-2 d-flex flex-column icons '>
						<img className=' reward-icons ' src={liquidity} alt='' />
						<span>$BUSD Reward</span>
					</div>

					<div className='col-md-6'>
						<img className='graph-bottom  ' src={graphbottom} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EverGrowTheame;
