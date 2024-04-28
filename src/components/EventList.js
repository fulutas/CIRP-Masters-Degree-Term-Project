import React from 'react';
import correctIcon from "../assets/correct-icon.svg"
import inCorrectIcon from "../assets/wrong-icon.svg"
import arrowDown from "../assets/arrow-long-down-l.svg"


const EventList = () => {
	return (
		<div id="event-list" className="wrapper">
			<section className="event-list">
				<div className="event-item">
					<h2 className="title">
						<span className="index-event">1. Olay: </span>
						Fidye saldırısına karşı ne yapılmalı?
					</h2>
					<p className="content">
						Kurum Çalışanı Z.A PTT'den gelen kargosu olduğunu ve adreste bulunamadığı için adresi güncellemesi yönünde bağlantı linki içeren
						bir mail alır. Z.A maildeki linkin  (https://www.ptttt.gov.tr/) doğruluğunu kontrol etmeden linke tıklar ve PC'deki dosyalar bir anda
						şifrelenir açılması için ise 2. mail gelerek bir ücret talep edilir. Z.A 2. maile cevap vermese dahi PC virüs yiyerek dosyalar
						erişilemez hale gelmiştir.
					</p>
					<div className="unit-steps">
						<h2 className="title">Nelere dikkat edilmeliydi?</h2>
						<div className="unit-step-item">
							<h3 className="step-title">Kullanıcı</h3>
							<div className="event-plan">
								<div className="event correct-event">
									Z.A maildeki linke tıklamadan linki kontrol etmeliydi.
									IT'ye maili yönlendirerek kontrolünü sağlamasını yapmalıydı
									<div className="icon">
										<img src={correctIcon} width="50px" className='icon' alt="icon" />
									</div>
								</div>
								<div className="event incorrect-event">
									Lorem ipsum dolor sit amet..
									<div className="icon">
										<img src={inCorrectIcon} width="50px" className='icon' alt="icon" />
									</div>
								</div>
							</div>
						</div>
						<div className="arrow">
							<img src={arrowDown} width="50px" height="50px" className='icon' alt="icon" />
						</div>
						<div className="unit-step-item">
							<h3 className="step-title">Kullanıcı</h3>
							<div className="event-plan">
								<div className="event correct-event">
									Z.A maildeki linke tıklamadan linki kontrol etmeliydi.
									IT'ye maili yönlendirerek kontrolünü sağlamasını yapmalıydı
									<div className="icon">
										<img src={correctIcon} width="50px" className='icon' alt="icon" />
									</div>
								</div>
								<div className="event incorrect-event">
									Lorem ipsum dolor sit amet..
									<div className="icon">
										<img src={inCorrectIcon} width="50px" className='icon' alt="icon" />
									</div>
								</div>
							</div>
						</div>
						<div className="arrow">
							<img src={arrowDown} width="50px" height="auto" className='icon' alt="icon" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default EventList;
