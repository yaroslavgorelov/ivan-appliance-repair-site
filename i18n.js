// Basic client-side i18n dictionary (EN -> UK)
// The script scans text nodes and swaps matching phrases.
// Extend with more keys as needed.
window.I18N_DICTIONARY = {
  uk: {
    // Navigation
    'Home': 'Головна',
    'About': 'Про нас',
    'Services': 'Послуги',
    'Book Now': 'Записатися',
    'Testimonials': 'Відгуки',
    'Contact': 'Контакти',

    // Header blocks
    'Contact Us': 'Зв’яжіться з нами',
    'Business Hours': 'Години роботи',
    'Mon-Fri: 8am - 6pm': 'Пн–Пт: 8:00 – 18:00',
    'Sat: 9am - 3pm': 'Сб: 9:00 – 15:00',

    // Hero
    'Fast & Reliable Appliance Repair': 'Швидкий та надійний ремонт техніки',
    'Professional appliance repair services in the Tampa Bay Area': 'Професійний ремонт побутової техніки у районі Тампа-Бей',
    'Call Now': 'Подзвонити',

    // Sections common
    'Our Services': 'Наші послуги',
    'Brands We Service': 'Бренди, з якими працюємо',
    'Why Choose Us': 'Чому ми',
    'Ready to Get Your Appliances Fixed?': 'Готові полагодити вашу техніку?',
    'Book a service appointment today and get your appliances running like new!': 'Запишіться на сервіс сьогодні і ваша техніка працюватиме як нова!',

    // Cards on Home
    'Refrigerator Repair': 'Ремонт холодильників',
    'Expert repair for all refrigerator brands and models.': 'Професійний ремонт холодильників усіх брендів і моделей.',
    'Washer Repair': 'Ремонт пральних машин',
    'Quick and efficient washer repair services.': 'Швидкий та ефективний ремонт пральних машин.',
    'Dryer Repair': 'Ремонт сушильних машин',
    'Professional dryer repair and maintenance.': 'Професійний ремонт і обслуговування сушильних машин.',
    'Dishwasher Repair': 'Ремонт посудомийних машин',
    'Reliable dishwasher repair for all major brands.': 'Надійний ремонт посудомийних машин усіх відомих брендів.',
    'Oven Repair': 'Ремонт духових шаф та плит',
    'Comprehensive oven and range repair services.': 'Комплексний ремонт духовок і варильних поверхонь.',
    'Microwave Repair': 'Ремонт мікрохвильових печей',
    'Fast and effective microwave repair solutions.': 'Швидкий та ефективний ремонт мікрохвильових печей.',

    // Long paragraphs — About page
    "Welcome to Appliance Repair Professionals, the Tampa Bay Area's premier appliance repair service. With years of experience in the industry, we've built our reputation on providing reliable, efficient, and affordable appliance repair services to homeowners throughout the region.":
      "Ласкаво просимо до Appliance Repair Professionals — провідної служби ремонту побутової техніки у районі Тампа-Бей. Маємо багаторічний досвід та заслужили репутацію надійної, оперативної й доступної сервісної компанії для власників домівок по всьому регіону.",
    'Our team of certified technicians specializes in repairing all major household appliances, including refrigerators, washers, dryers, dishwashers, ovens, and microwaves. We pride ourselves on our technical expertise, prompt service, and commitment to customer satisfaction.':
      'Наша команда сертифікованих спеціалістів ремонтує всі основні види побутової техніки — холодильники, пральні та сушильні машини, посудомийні машини, духовки та мікрохвильові печі. Ми пишаємося технічною експертизою, оперативністю та відданістю задоволенню потреб клієнтів.',
    "At Appliance Repair Professionals, we understand that a malfunctioning appliance can disrupt your daily routine and cause unnecessary stress. That's why we strive to provide same-day service whenever possible and ensure that your appliances are back in working order as quickly as possible.":
      'У Appliance Repair Professionals ми розуміємо, що несправна техніка порушує звичний ритм життя та додає зайвого стресу. Тому ми намагаємося за можливості надавати послуги у той самий день і якнайшвидше повертати вашу техніку до робочого стану.',
    'Our mission is to provide the highest quality appliance repair services with integrity, honesty, and professionalism, ensuring that our customers\' appliances function efficiently and reliably for years to come.':
      'Наша місія — надавати послуги ремонту найвищої якості з чесністю, відкритістю та професіоналізмом, щоб ваша побутова техніка працювала ефективно й надійно протягом багатьох років.',

    // Team bios (About)
    'With over 15 years of experience in appliance repair, Ivan leads our team with expertise and dedication to quality service.':
      'Маючи понад 15 років досвіду ремонту техніки, Іван очолює нашу команду з високим професіоналізмом і відданістю якості сервісу.',
    'Michael specializes in refrigeration systems and has been solving complex appliance issues for over 10 years.':
      'Майкл спеціалізується на холодильних системах і понад 10 років вирішує складні проблеми з побутовою технікою.',
    'Sarah is our washing machine and dryer expert, with specialized training in all major brands.':
      'Сара — наш експерт з пральних і сушильних машин, має спеціалізовану підготовку за всіма провідними брендами.',
    'David excels at diagnosing and repairing kitchen appliances, including ovens and dishwashers.':
      'Девід чудово діагностує та ремонтує кухонну техніку, зокрема духові шафи та посудомийні машини.',

    // Long paragraphs — Services intro
    'At Appliance Repair Professionals, we specialize in repairing all major household appliances. Our certified technicians have the expertise and experience to diagnose and fix a wide range of appliance issues quickly and efficiently. Below are the main services we offer:':
      'У Appliance Repair Professionals ми спеціалізуємося на ремонті всіх основних видів побутової техніки. Наші сертифіковані техніки мають знання та досвід, щоб швидко й ефективно діагностувати та усувати широкий спектр несправностей. Нижче наведено основні послуги, які ми надаємо:',
    'Our refrigerator repair services cover all major brands and models. We can diagnose and fix common issues such as:':
      'Наш сервіс з ремонту холодильників охоплює всі основні бренди та моделі. Ми діагностуємо й усуваємо типові проблеми, зокрема:',
    'We understand how critical your refrigerator is to your daily life, which is why we prioritize these repairs and strive to provide same-day service whenever possible.':
      'Ми розуміємо, наскільки важливий холодильник у щоденному житті, тому надаємо таким заявкам пріоритет і за можливості виконуємо ремонт у той самий день.',
    'Is your washing machine leaking, making strange noises, or not completing cycles properly? Our technicians can diagnose and repair a variety of washer issues, including:':
      'Ваша пральна машина тече, дивно шумить або не завершує цикли? Наші техніки діагностують і ремонтують різні несправності пральних машин, зокрема:',
    'We service all types of washers, including top-loading, front-loading, and high-efficiency models from all major manufacturers.':
      'Ми обслуговуємо всі типи пральних машин — вертикальні, фронтальні та високоефективні моделі провідних виробників.',
    'A malfunctioning dryer can disrupt your laundry routine and potentially pose safety hazards. Our dryer repair services address issues such as:':
      'Несправна сушильна машина може зірвати ваш графік прання та навіть становити ризик безпеці. Наш сервіс ремонту сушильних машин вирішує такі проблеми:',
    'We repair both electric and gas dryers of all major brands, ensuring your dryer operates efficiently and safely.':
      'Ми ремонтуємо електричні та газові сушильні машини всіх відомих брендів, забезпечуючи їх ефективну та безпечну роботу.',
    'Is your dishwasher not cleaning properly, leaking, or making unusual noises? Our technicians can diagnose and fix issues such as:':
      'Посудомийна машина погано миє, протікає або видає незвичні звуки? Наші техніки діагностують і усувають такі проблеми:',
    'We service all major dishwasher brands and models, restoring your dishwasher to optimal performance.':
      'Ми обслуговуємо посудомийні машини всіх основних брендів і моделей, повертаючи їм оптимальну продуктивність.',
    "When your oven or range isn't working properly, it can disrupt your cooking routine. Our oven repair services address issues such as:":
      'Коли духовка або плита працює неправильно, це порушує ваші кулінарні плани. Наш сервіс ремонту духовок вирішує такі проблеми:',
    'We repair all types of ovens, including conventional, convection, gas, electric, and dual-fuel models from all major manufacturers.':
      'Ми ремонтуємо всі типи духових шаф: звичайні, конвекційні, газові, електричні та комбіновані моделі провідних виробників.',
    'Is your microwave not heating, making unusual noises, or experiencing other issues? Our technicians can diagnose and repair problems such as:':
      'Мікрохвильова піч не гріє, дивно шумить або має інші проблеми? Наші техніки діагностують і усувають такі несправності:',
    'We service both countertop and built-in microwaves from all major brands.':
      'Ми обслуговуємо як настільні, так і вбудовані мікрохвильові печі всіх відомих брендів.',

    // Process steps paragraphs
    'Call us or book an appointment online. Describe your appliance issue so we can prepare accordingly.':
      'Зателефонуйте або запишіться онлайн. Опишіть проблему з технікою, щоб ми могли підготуватися.',
    'Our technician will inspect your appliance and diagnose the problem, explaining the issue in clear terms.':
      'Наш технік огляне вашу техніку, виконає діагностику та зрозуміло пояснить суть проблеми.',
    "We'll provide a transparent quote for the necessary repairs before any work begins.":
      'Ми надамо прозору кошторисну вартість необхідного ремонту до початку робіт.',
    'Upon approval, our technician will complete the repair efficiently using quality parts.':
      'Після погодження наш технік оперативно виконає ремонт, використовуючи якісні запчастини.',
    "We'll test the appliance to ensure it's working properly before we leave.":
      'Перед від’їздом ми перевіримо техніку, щоб переконатися, що вона працює належним чином.',

    // Why choose us
    'Fast Response': 'Швидка реакція',
    'We respond quickly to all service requests in the Tampa Bay Area.': 'Швидко реагуємо на всі заявки у районі Тампа-Бей.',
    'Certified Technicians': 'Сертифіковані техніки',
    'Our technicians are fully certified and experienced.': 'Наші техніки сертифіковані та досвідчені.',
    'Competitive Pricing': 'Справедливі ціни',
    'We offer fair and transparent pricing for all our services.': 'Пропонуємо чесні та прозорі ціни на всі послуги.',
    'Guaranteed Work': 'Гарантія якості',
    'All our repairs come with a satisfaction guarantee.': 'На всі роботи ми надаємо гарантію задоволення.',

    // Footer
    'Appliance Repair Professionals': 'Appliance Repair Professionals',
    'Professional appliance repair services in the Tampa Bay Area.': 'Професійні послуги ремонту побутової техніки у районі Тампа-Бей.',
    'Monday - Friday: 8am - 6pm': 'Понеділок – П’ятниця: 8:00 – 18:00',
    'Saturday: 9am - 3pm': 'Субота: 9:00 – 15:00',
    'Sunday: Closed': 'Неділя: Вихідний',
    'Service Area': 'Зона обслуговування',
    'Tampa Bay Area': 'Район Тампа-Бей',

    // Page titles
    'About Us': 'Про нас',
    'Book a Service Appointment': 'Запис на сервіс',
    'Contact Us': 'Зв’яжіться з нами',
    'Customer Testimonials': 'Відгуки клієнтів',

    // Trust strip
    'Licensed & Insured': 'Ліцензовано та застраховано',
    'Same‑Day Service': 'Того ж дня',
    '90‑Day Warranty': 'Гарантія 90 днів',

    // Contact blocks
    'Get In Touch': 'Зв’яжіться з нами',
    'Phone': 'Телефон',
    'Email': 'Електронна пошта',
    'Send Us a Message': 'Надіслати повідомлення',

    // Booking labels
    'Service Type*': 'Тип послуги*',
    'Appliance Brand': 'Бренд техніки',
    'Appliance Model (if known)': 'Модель техніки (якщо відомо)',
    'Description of Issue*': 'Опис проблеми*',
    'Preferred Date and Time': 'Бажана дата та час',
    'Preferred Date*': 'Бажана дата*',
    'Preferred Time*': 'Бажаний час*',
    'Morning (8am - 12pm)': 'Ранок (8:00 – 12:00)',
    'Afternoon (12pm - 4pm)': 'День (12:00 – 16:00)',
    'Evening (4pm - 6pm)': 'Вечір (16:00 – 18:00)',
    'First Name*': 'Ім’я*',
    'Last Name*': 'Прізвище*',
    'Email*': 'Ел. пошта*',
    'Phone*': 'Телефон*',
    'Street Address*': 'Адреса*',
    'City*': 'Місто*',
    'ZIP Code*': 'Поштовий індекс*',
    'Additional Information (optional)': 'Додаткова інформація (необов’язково)',
    'I agree to the terms and conditions*': 'Я погоджуюся з умовами та положеннями*',
    'Book Appointment': 'Записатися',
  }
};

// Notify that dictionary is ready
window.dispatchEvent(new Event('i18n:ready'));
