import React from 'react';
import correctIcon from "../assets/correct-icon.svg"
import inCorrectIcon from "../assets/wrong-icon.svg"
import { eventList } from '../data/eventList';
import arrowDown from "../assets/arrow-long-down-l.svg"
import { Link } from 'react-router-dom';


const EventList = () => {
	return (
		<div id="event-list" className="wrapper">
			<section className="item-list">
				{eventList.map((event, index) => {
					return (
						<div key={index} className="event-item">
							<h2 className="title">
								<span className="index-event">{event.eventId}. Olay: </span>
								{event.title}
							</h2>
							<p className="content">
								{event.content}
							</p>
							<div className="unit-steps">
								<h2 className="step-title">Nelere dikkat edilmeliydi?</h2>
								{event.eventSteps.map((step, stepIndex) => {
									return (
										<>
											<div key={stepIndex} className="unit-step-item">
												<h3 className="step-title">{step.unitName}</h3>
												<div className="event-plan">
													<div className="event correct-event">
														{step.correctEvent}
														<div className="icon">
															<img src={correctIcon} width="50px" className='icon' alt="icon" />
														</div>
													</div>
													<div className="event incorrect-event">
														{step.incorrectEvent}
														<div className="icon">
															<img src={inCorrectIcon} width="50px" className='icon' alt="icon" />
														</div>
													</div>
												</div>
											</div>
											{stepIndex !== event.eventSteps.length - 1 && (
												<div className="arrow">
													<img src={arrowDown} width="50px" height="auto" className='icon' alt="icon" />
												</div>
											)}
										</>
									)
								})}

							</div>
						</div>
					)
				})}

				<div className='horizontal-center'>
					<button className='button light' type='button'>
						<Link className='route-link' to="/">Anasayfaya Geri Dön</Link>
					</button>
				</div>

			</section>
		</div>
	);
}

export default EventList;
