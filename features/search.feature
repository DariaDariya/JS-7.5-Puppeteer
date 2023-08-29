Feature: Booking ticket- Tests

	Scenario: Book 1 seat
		Given user is on start page "http://qamid.tmweb.ru/client/index.php"
		When user chooses day "7" of the week
		When user chooses movie "2" and time "2"
		When user chooses seat "8" and "8"
		When user click on button 'Забронировать'
		When user click on button 'Получить код бронирования'
		Then user can see QR code
		Then user sees the header 'Электронный билет'

	
	Scenario: Book 2 seat
		Given user is on start page "http://qamid.tmweb.ru/client/index.php"
		When user chooses day "7" of the week
		When user chooses movie "2" and time "2"
		When user chooses seat "4" and "1"
		When user chooses seat "3" and "2"
		When user click on button 'Забронировать'
		When user click on button 'Получить код бронирования'
		Then user can see QR code
		Then user sees the header 'Электронный билет'

    Scenario: Book 3 seat
		Given user is on start page "http://qamid.tmweb.ru/client/index.php"
		When user chooses day "7" of the week
		When user chooses movie "2" and time "2"
		When user chooses seat "5" and "5"
		When user chooses seat "6" and "2"
		When user chooses seat "7" and "6"
		When user click on button 'Забронировать'
		When user click on button 'Получить код бронирования'
		Then user can see QR code
		Then user sees the header 'Электронный билет'

	Scenario: Book no seats
		Given user is on start page "http://qamid.tmweb.ru/client/index.php"
		When user chooses day "7" of the week
		When user chooses movie "2" and time "2"
		Then button 'Забронировать' not active