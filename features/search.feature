Feature: Booking ticket- Tests

	Scenario: Book 1 seat
		Given user is on start page "http://qamid.tmweb.ru/client/index.php"
		When user chooses day "7" of the week
		When user chooses movie "2" and time "2"
		When user chooses seat "1" and "1"
		When user click on button 'Забронировать'
		When user click on button 'Получить код бронирования'
		Then user can see QR code
		Then user sees the header 'Электронный билет'

	
	Scenario: Book 2 seat
		Given user is on start page "http://qamid.tmweb.ru/client/index.php"
		When user chooses day "7" of the week
		When user chooses movie "2" and time "2"
		When user chooses seat "2" and "9"
		When user chooses seat "2" and "10"
		When user click on button 'Забронировать'
		When user click on button 'Получить код бронирования'
		Then user can see QR code
		Then user sees the header 'Электронный билет'

    Scenario: Book 3 seat
		Given user is on start page "http://qamid.tmweb.ru/client/index.php"
		When user chooses day "7" of the week
		When user chooses movie "2" and time "2"
		When user chooses seat "11" and "1"
		When user chooses seat "11" and "2"
		When user chooses seat "11" and "3"
		When user click on button 'Забронировать'
		When user click on button 'Получить код бронирования'
		Then user can see QR code
		Then user sees the header 'Электронный билет'

	Scenario: Book no seats
		Given user is on start page "http://qamid.tmweb.ru/client/index.php"
		When user chooses day "7" of the week
		When user chooses movie "2" and time "2"
		Then button 'Забронировать' not active