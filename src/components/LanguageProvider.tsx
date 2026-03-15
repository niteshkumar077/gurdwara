"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "EN" | "DE" | "PA";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navbar / Common
    "nav.home": "Home",
    "nav.schedule": "Schedule",
    "nav.sewa": "Sewa",
    "nav.education": "Education",
    "nav.about": "About",
    "nav.menu": "Main Menu",
    "nav.language": "Language",
    "common.learnMore": "Learn More",
    "common.readMore": "Read More",
    "common.inquire": "Inquire for sewa",
    "common.volunteer": "Volunteer for Sewa",
    "common.contactUs": "Contact Us",
    "common.sewadars": "Sacred Service",

    // Home Page
    "home.welcome": "Welcome to",
    "home.title": "Gurdwara Sahib Switzerland",
    "home.subtitle": "A Beacon of Peace, Equality, and Sewa",
    "home.discover": "Discover Our Heritage",
    "home.viewSchedule": "View Diwan Schedule",
    "home.hukamnama.title": "Today's Hukamnama",
    "home.hukamnama.subtitle": "Divine Order",
    "home.stats.kirtan": "Shabad Kirtan",
    "home.stats.sewadar": "Sewadar",
    "home.stats.activities": "Activities",
    "home.stats.school": "School Camp",
    "home.intro.label": "About the Gurdwara",
    "home.intro.title": "A Place of Peace and Equality",
    "home.intro.desc": "Gurdwara Sahib Switzerland is open to all, regardless of faith, background, or social status. It serves as a spiritual sanctuary for the Sikh community and a welcoming home for anyone seeking peace, community service (Sewa), and the divine teachings of the Sri Guru Granth Sahib Ji.",
    "home.services.label": "Community & Devotion",
    "home.services.title": "Religious Services & Sewa",
    "home.video.label": "Spiritual Glimpse",
    "home.video.title": "Official Gurdwara Video",
    "home.video.desc": "\"Experience the divine atmosphere and community spirit of Gurdwara Sahib Langenthal through this brief cinematic journey.\"",
    "home.edu.title": "Empowering the Next Generation",
    "home.edu.desc": "Gurmat School offers weekly classes for children to learn Punjabi, Gurbani Santhiya, and Sikh History, alongside our highly anticipated Annual Gurmat Camps.",
    "home.edu.btn": "Discover Education Programs",

    // About Page
    "about.header.title": "Our Heritage",
    "about.history.foundation": "The foundation stone of Gurdwara Sahib Switzerland was respectfully laid on January 11, 2001. The auspicious ceremony was led by the Panj Pyare, marking the beginning of a spiritual haven for the Sikh Sangat in Langenthal.",
    "about.history.desc": "Since then, it has blossomed into a vibrant center for devotion, community service, and cultural preservation. Our doors remain perpetually open to all, seeking to emulate the profound teachings of our Gurus.",
    "about.committee.label": "Selfless Service",
    "about.committee.title": "Management Committee & Sewadars",
    "about.committee.role.mukh": "Mukh Sewadar",
    "about.committee.role.member": "Committee Member",
    "about.contact.label": "Get in Touch",
    "about.contact.title": "Contact & Visit",
    "about.contact.desc": "We look forward to welcoming you to the Gurdwara Sahib.",
    "about.contact.address": "Address",
    "about.contact.phone": "Phone Numbers",
    "about.contact.email": "Email",
    "about.contact.form.title": "Send a Message",
    "about.contact.form.name": "Full Name",
    "about.contact.form.email": "Email Address",
    "about.contact.form.message": "Message",
    "about.contact.form.btn": "Send Message",
    "about.guidelines.title": "Visitor Guidelines",
    "about.guidelines.desc": "We welcome all visitors regardless of religion, caste, color, or creed. To maintain the sanctity of the Darbar Sahib (Prayer Hall), please observe the following respectful guidelines.",
    "about.guidelines.head.title": "Cover Your Head",
    "about.guidelines.head.desc": "Please cover your head before entering the Gurdwara premises. Head coverings (Rumals) are freely available near the entrance if you do not have one.",
    "about.guidelines.shoes.title": "Remove Your Shoes",
    "about.guidelines.shoes.desc": "Shoes must be removed and placed in the designated shoe racks before entering the main hall or dining area.",
    "about.guidelines.dress.title": "Dress Modestly",
    "about.guidelines.dress.desc": "Please wear conservative clothing. Shorts, short skirts, or sleeveless tops are not permitted. Shoulders and knees must be covered.",
    "about.guidelines.intox.title": "No Intoxicants",
    "about.guidelines.intox.desc": "Tobacco, alcohol, and any other intoxicants are strictly prohibited inside the Gurdwara premises.",
    "about.hours.title": "Opening Hours",
    "about.hours.days": "Every Day",
    "about.location.title": "Our Location",

    // Sewa Page
    "sewa.header.title": "Religious Services & Sewa",
    "sewa.header.quote": "\"One who performs selfless service, without thought of reward, shall find the Lord.\"",
    "sewa.service.path.title": "Sri Akhand Path Sewa",
    "sewa.service.path.desc": "Anybody who desires to do sewa for the Sri Akhand Path Sahib or Sehaj Path, it is humbly requested to please inform Gurdwara Sahib before one month so that Singhs can be arranged on time to recite Path Sahib.",
    "sewa.service.sukhmani.title": "Sukhmani Sahib Path",
    "sewa.service.sukhmani.desc": "Every Sunday anybody can do Sewa for Sri Sukhmani Sahib Ji Path. Please inform Gurdwara Sahib through an email or by phone call.",
    "sewa.service.samagam.title": "Samagam Sewa",
    "sewa.service.samagam.desc": "Every Sunday there is Samagam related to Gurpurabs, Shaheedi Diwas, Historic events etc. Contact us via email or phone to choose a Samagam for performing Sewa.",
    "sewa.service.langar.title": "Langar Sewa",
    "sewa.service.langar.desc": "Anybody can take the Sewa of Langar on Sunday. Please inform Gurdwara Sahib through an email or by phone call to arrange your contribution.",
    "sewa.service.class.title": "Gurmat Class",
    "sewa.service.class.desc": "Every Sunday there is Gurmat class. Please contact Gurdwara Sahib for any type of contribution or sewa you want to perform for the students.",
    "sewa.service.camp.title": "Gurmat Camp Sewa",
    "sewa.service.camp.desc": "Every year one big summer camp and two small camps are organised through Sangat contributions. Contact us to contribute or perform Sewa for these programs.",
    "sewa.cta.title": "Gift of Service",
    "sewa.cta.desc": "\"Through Sewa, the heart is purified and the soul finds true peace.\" We invite you to join our team of dedicated Sewadars.",

    // Education Page
    "edu.header.title": "Gurmat School & Youth Camps",
    "edu.header.subtitle": "Empowering the next generation with the profound heritage, language, and spiritual teachings of Sikhi.",
    "edu.weekend.label": "Punjabi & Gurbani",
    "edu.weekend.title": "Weekend Classes",
    "edu.weekend.desc": "Our Gurmat School offers weekly classes for children to learn Punjabi, Gurbani, and Sikh History every Sunday. If you wish to contribute or perform Sewa for the school sessions, please contact the Gurdwara Sahib directly.",
    "edu.weekend.item1": "Gurmukhi Alphabet & Reading",
    "edu.weekend.item2": "At Gurdwara Sahib Premises",
    "edu.weekend.item3": "Every Sunday Morning",
    "edu.weekend.btn": "View Curriculum",
    "edu.annual.label": "Youth Empowerment",
    "edu.annual.title": "Annual Gurmat Camps",
    "edu.annual.desc": "Every year, we organize one major summer camp and two smaller Gurmat camps. These programs are made possible through the generous contributions of the Sangat. We invite you to contact us for any type of contribution or sewa you wish to perform.",
    "edu.annual.item1": "Interactive Workshops",
    "edu.annual.item2": "Kirtan & Tabla Lessons",
    "edu.annual.item3": "Outdoor Activities & Leadership",
    "edu.cta.title": "Give Your Child the Gift of Heritage",
    "edu.cta.desc": "Admissions are open for the upcoming weekend sessions. Connect them with spirituality and community.",
    "edu.cta.btn": "Register Your Child",

    // Schedule Page
    "schedule.header.title": "Diwan Schedule",
    "schedule.header.quote": "\"The Congregation is the school of the soul, where one learns the divine virtues.\"",
    "schedule.showcase.label": "Divine Congregations",
    "schedule.showcase.title": "Weekly & Daily Schedule",
    "schedule.showcase.desc": "Explore our daily and weekly spiritual schedule. Please feel free to save these images for your reference.",
    "schedule.showcase.en": "English Version",
    "schedule.showcase.pa": "Punjabi Version",
    "schedule.cta.title": "Join the Sangat",
    "schedule.cta.desc": "We look forward to welcoming you to the house of the Guru. All are welcome regardless of background or faith.",
    "schedule.cta.btn": "Plan Your Visit",

    // Footer
    "footer.desc": "The spiritual home for the Sikh Sangat in Langenthal. Open to all, promoting peace, equality, and community service.",
    "footer.links.title": "Quick Links",
    "footer.contact.title": "Contact Us",
    "footer.rights": "All Rights Reserved."
  },
  DE: {
    // Navbar / Common
    "nav.home": "Startseite",
    "nav.schedule": "Zeitplan",
    "nav.sewa": "Sewa",
    "nav.education": "Bildung",
    "nav.about": "Über",
    "nav.menu": "Hauptmenü",
    "nav.language": "Sprache",
    "common.learnMore": "Mehr Erfahren",
    "common.readMore": "Weiterlesen",
    "common.inquire": "Sewa-Anfrage",
    "common.volunteer": "Freiwilliger für Sewa",
    "common.contactUs": "Kontaktiere Uns",
    "common.sewadars": "Heiliger Dienst",

    // Home Page
    "home.welcome": "Willkommen im",
    "home.title": "Gurdwara Sahib Schweiz",
    "home.subtitle": "Ein Leuchtfeuer des Friedens, der Gleichheit und des Sewa",
    "home.discover": "Entdecke unser Erbe",
    "home.viewSchedule": "Diwan-Zeitplan ansehen",
    "home.hukamnama.title": "Heutiges Hukamnama",
    "home.hukamnama.subtitle": "Göttliche Ordnung",
    "home.stats.kirtan": "Shabad Kirtan",
    "home.stats.sewadar": "Sewadar",
    "home.stats.activities": "Aktivitäten",
    "home.stats.school": "Schullager",
    "home.intro.label": "Über den Gurdwara",
    "home.intro.title": "Ein Ort des Friedens und der Gleichheit",
    "home.intro.desc": "Der Gurdwara Sahib Schweiz steht allen offen, unabhängig von Glauben, Hintergrund oder sozialem Status. Er dient als spirituelle Zuflucht für die Sikh-Gemeinschaft und als einladendes Zuhause für jeden, der Frieden, Gemeinnutz (Sewa) und die göttlichen Lehren des Sri Guru Granth Sahib Ji sucht.",
    "home.services.label": "Gemeinschaft & Hingabe",
    "home.services.title": "Religiöse Dienste & Sewa",
    "home.video.label": "Spiritueller Einblick",
    "home.video.title": "Offizielles Gurdwara-Video",
    "home.video.desc": "\"Erleben Sie die göttliche Atmosphäre und den Gemeinschaftsgeist des Gurdwara Sahib Langenthal durch diese kurze filmische Reise.\"",
    "home.edu.title": "Die nächste Generation stärken",
    "home.edu.desc": "Die Gurmat-Schule bietet wöchentliche Kurse für Kinder an, um Punjabi, Gurbani Santhiya und Sikh-Geschichte zu lernen, neben unseren mit Spannung erwarteten jährlichen Gurmat-Camps.",
    "home.edu.btn": "Bildungsprogramme entdecken",

    // About Page
    "about.header.title": "Unser Erbe",
    "about.history.foundation": "Der Grundstein des Gurdwara Sahib Schweiz wurde am 11. Januar 2001 feierlich gelegt. Die feierliche Zeremonie wurde von den Panj Pyare geleitet und markierte den Beginn einer spirituellen Zuflucht für die Sikh-Gemeinschaft in Langenthal.",
    "about.history.desc": "Seitdem hat er sich zu einem lebendigen Zentrum für Hingabe, Gemeinnutz und kulturelle Bewahrung entwickelt. Unsere Türen stehen allen stets offen, um den tiefgreifenden Lehren unserer Gurus nachzueifern.",
    "about.committee.label": "Selbstloser Dienst",
    "about.committee.title": "Vorstand & Sewadars",
    "about.committee.role.mukh": "Mukh Sewadar",
    "about.committee.role.member": "Vorsitizender",
    "about.contact.label": "Kontakt aufnehmen",
    "about.contact.title": "Kontakt & Besuch",
    "about.contact.desc": "Wir freuen uns darauf, Sie im Gurdwara Sahib begrüßen zu dürfen.",
    "about.contact.address": "Adresse",
    "about.contact.phone": "Telefonnummern",
    "about.contact.email": "E-Mail",
    "about.contact.form.title": "Nachricht senden",
    "about.contact.form.name": "Vollständiger Name",
    "about.contact.form.email": "E-Mail-Adresse",
    "about.contact.form.message": "Nachricht",
    "about.contact.form.btn": "Nachricht senden",
    "about.guidelines.title": "Besucherrichtlinien",
    "about.guidelines.desc": "Wir begrüßen alle Besucher unabhängig von Religion, Kaste, Hautfarbe oder Glauben. Um die Heiligkeit des Darbar Sahib (Gebetssaal) zu wahren, beachten Sie bitte die folgenden respektvollen Richtlinien.",
    "about.guidelines.head.title": "Kopf bedecken",
    "about.guidelines.head.desc": "Bitte bedecken Sie Ihren Kopf, bevor Sie das Gurdwara-Gelände betreten. Kopfbedeckungen (Rumals) are am Eingang frei verfügbar, falls Sie keine haben.",
    "about.guidelines.shoes.title": "Schuhe ausziehen",
    "about.guidelines.shoes.desc": "Schuhe müssen ausgezogen und in den dafür vorgesehenen Schuhregalen platziert werden, bevor Sie den Hauptsaal oder den Essbereich betreten.",
    "about.guidelines.dress.title": "Bescheiden kleiden",
    "about.guidelines.dress.desc": "Bitte tragen Sie konservative Kleidung. Shorts, kurze Röcke oder ärmellose Oberteile sind nicht gestattet. Schultern und Knie müssen bedeckt sein.",
    "about.guidelines.intox.title": "Keine Rauschmittel",
    "about.guidelines.intox.desc": "Tabak, Alkohol und andere Rauschmittel sind auf dem Gurdwara-Gelände strengstens verboten.",
    "about.hours.title": "Öffnungszeiten",
    "about.hours.days": "Jeden Tag",
    "about.location.title": "Unser Standort",

    // Sewa Page
    "sewa.header.title": "Religiöse Dienste & Sewa",
    "sewa.header.quote": "\"Wer selbstlosen Dienst leistet, ohne an Belohnung zu denken, wird den Herrn finden.\"",
    "sewa.service.path.title": "Sri Akhand Path Sewa",
    "sewa.service.path.desc": "Wer Sewa für den Sri Akhand Path Sahib oder Sehaj Path leisten möchte, wird höflich gebeten, den Gurdwara Sahib einen Monat im Voraus zu informieren, damit Singhs rechtzeitig für die Rezitation des Path Sahib arrangiert werden können.",
    "sewa.service.sukhmani.title": "Sukhmani Sahib Path",
    "sewa.service.sukhmani.desc": "Jeden Sonntag kann jeder Sewa für den Sri Sukhmani Sahib Ji Path leisten. Bitte informieren Sie den Gurdwara Sahib per E-Mail oder Telefonanruf.",
    "sewa.service.samagam.title": "Samagam Sewa",
    "sewa.service.samagam.desc": "Jeden Sonntag gibt es einen Samagam zu Gurpurabs, Shaheedi Diwas, historischen Ereignissen usw. Kontaktieren Sie uns per E-Mail oder Telefon, um einen Samagam für die Durchführung von Sewa auszuwählen.",
    "sewa.service.langar.title": "Langar Sewa",
    "sewa.service.langar.desc": "Jeder kann am Sonntag die Sewa des Langar übernehmen. Bitte informieren Sie den Gurdwara Sahib per E-Mail oder Telefonanruf, um Ihren Beitrag zu vereinbaren.",
    "sewa.service.class.title": "Gurmat-Kurs",
    "sewa.service.class.desc": "Jeden Sonntag findet ein Gurmat-Kurs statt. Bitte kontaktieren Sie den Gurdwara Sahib für jede Art von Beitrag oder Sewa, die Sie für die Schüler leisten möchten.",
    "sewa.service.camp.title": "Gurmat-Camp Sewa",
    "sewa.service.camp.desc": "Jedes Jahr werden ein großes Sommercamp und zwei kleine Camps durch Sangat-Beiträge organisiert. Kontaktieren Sie uns, um beizutragen oder Sewa für diese Programme zu leisten.",
    "sewa.cta.title": "Geschenk des Dienstes",
    "sewa.cta.desc": "\"Durch Sewa wird das Herz gereinigt und die Seele findet wahren Frieden.\" Wir laden Sie ein, sich unserem Team aus engagierten Sewadars anzuschließen.",

    // Education Page
    "edu.header.title": "Gurmat-Schule & Jugendcamps",
    "edu.header.subtitle": "Die nächste Generation mit dem tiefgreifenden Erbe, der Sprache und den spirituellen Lehren des Sikhi stärken.",
    "edu.weekend.label": "Punjabi & Gurbani",
    "edu.weekend.title": "Wochenendkurse",
    "edu.weekend.desc": "Unsere Gurmat-Schule bietet jeden Sonntag wöchentliche Kurse für Kinder an, um Punjabi, Gurbani und Sikh-Geschichte zu lernen. Wenn Sie zum Schulbetrieb beitragen oder Sewa leisten möchten, wenden Sie sich bitte direkt an den Gurdwara Sahib.",
    "edu.weekend.item1": "Gurmukhi Alphabet & Lesen",
    "edu.weekend.item2": "Auf dem Gurdwara-Gelände",
    "edu.weekend.item3": "Jeden Sonntagmorgen",
    "edu.weekend.btn": "Lehrplan ansehen",
    "edu.annual.label": "Jugendstärkung",
    "edu.annual.title": "Jährliche Gurmat-Camps",
    "edu.annual.desc": "Jedes Jahr organisieren wir ein großes Sommercamp und zwei kleinere Gurmat-Camps. Diese Programme werden durch die großzügigen Beiträge der Sangat ermöglicht. Wir laden Sie ein, uns für jede Art von Beitrag oder Sewa zu kontaktieren.",
    "edu.annual.item1": "Interaktive Workshops",
    "edu.annual.item2": "Kirtan- & Tabla-Unterricht",
    "edu.annual.item3": "Outdoor-Aktivitäten & Führung",
    "edu.cta.title": "Geben Sie Ihrem Kind das Geschenk des Erbes",
    "edu.cta.desc": "Die Anmeldungen für die kommenden Wochenendsitzungen sind offen. Verbinden Sie sie mit Spiritualität und Gemeinschaft.",
    "edu.cta.btn": "Kind anmelden",

    // Schedule Page
    "schedule.header.title": "Diwan-Zeitplan",
    "schedule.header.quote": "\"Die Gemeinde ist die Schule der Seele, in der man die göttlichen Tugenden lernt.\"",
    "schedule.showcase.label": "Göttliche Versammlungen",
    "schedule.showcase.title": "Wöchentlicher & Täglicher Zeitplan",
    "schedule.showcase.desc": "Erkunden Sie unseren täglichen und wöchentlichen spirituellen Zeitplan. Bitte speichern Sie diese Bilder gerne zu Ihrer Information.",
    "schedule.showcase.en": "Englische Version",
    "schedule.showcase.pa": "Punjabi Version",
    "schedule.cta.title": "Treten Sie der Sangat bei",
    "schedule.cta.desc": "Wir freuen uns darauf, Sie im Haus des Gurus begrüßen zu dürfen. Alle sind willkommen, unabhängig von Hintergrund oder Glauben.",
    "schedule.cta.btn": "Besuch planen",

    // Footer
    "footer.desc": "Das spirituelle Zuhause für die Sikh-Gemeinschaft in Langenthal. Offen für alle, Förderung von Frieden, Gleichheit und Gemeinnutz.",
    "footer.links.title": "Quick Links",
    "footer.contact.title": "Kontaktiere Uns",
    "footer.rights": "Alle Rechte vorbehalten."
  },
  PA: {
    // Navbar / Common
    "nav.home": "ਮੁੱਖ",
    "nav.schedule": "ਸਮਾਂ",
    "nav.sewa": "ਸੇਵਾ",
    "nav.education": "ਸਿੱਖਿਆ",
    "nav.about": "ਬਾਰੇ",
    "nav.menu": "ਮੁੱਖ ਮੀਨੂ",
    "nav.language": "ਭਾਸ਼ਾ",
    "common.learnMore": "ਹੋਰ ਜਾਣੋ",
    "common.readMore": "ਹੋਰ ਪੜ੍ਹੋ",
    "common.inquire": "ਸੇਵਾ ਲਈ ਪੁੱਛਗਿੱਛ ਕਰੋ",
    "common.volunteer": "ਸੇਵਾ ਲਈ ਵਾਲੰਟੀਅਰ ਕਰੋ",
    "common.contactUs": "ਸੰਪਰਕ ਕਰੋ",
    "common.sewadars": "ਪਵਿੱਤਰ ਸੇਵਾ",

    // Home Page
    "home.welcome": "ਜੀ ਆਇਆਂ ਨੂੰ",
    "home.title": "ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਸਵਿਟਜ਼ਰਲੈਂਡ",
    "home.subtitle": "ਸ਼ਾਂਤੀ, ਸਮਾਨਤਾ ਅਤੇ ਸੇਵਾ ਦਾ ਕੇਂਦਰ",
    "home.discover": "ਸਾਡੀ ਵਿਰਾਸਤ",
    "home.viewSchedule": "ਦੀਵਾਨ ਦਾ ਸਮਾਂ ਦੇਖੋ",
    "home.hukamnama.title": "ਅੱਜ ਦਾ ਹੁਕਮਨਾਮਾ",
    "home.hukamnama.subtitle": "ਧੁਰ ਕੀ ਬਾਣੀ",
    "home.stats.kirtan": "ਸ਼ਬਦ ਕੀਰਤਨ",
    "home.stats.sewadar": "ਸੇਵਾਦਾਰ",
    "home.stats.activities": "ਗਤੀਵਿਧੀਆਂ",
    "home.stats.school": "ਸਕੂਲ ਕੈਂਪ",
    "home.intro.label": "ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਬਾਰੇ",
    "home.intro.title": "ਸ਼ਾਂਤੀ ਅਤੇ ਸਮਾਨਤਾ ਦਾ ਸਥਾਨ",
    "home.intro.desc": "ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਸਵਿਟਜ਼ਰਲੈਂਡ ਸਾਰਿਆਂ ਲਈ ਖੁੱਲ੍ਹਾ ਹੈ, ਚਾਹੇ ਕੋਈ ਵੀ ਧਰਮ, ਪਿਛੋਕੜ ਜਾਂ ਸਮਾਜਿਕ ਰੁਤਬਾ ਹੋਵੇ। ਇਹ ਸਿੱਖ ਸੰਗਤ ਲਈ ਇੱਕ ਰੂਹਾਨੀ ਅਸਥਾਨ ਅਤੇ ਸ਼ਾਂਤੀ, ਸੇਵਾ ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀਆਂ ਪਵਿੱਤਰ ਸਿੱਖਿਆਵਾਂ ਦੀ ਭਾਲ ਕਰਨ ਵਾਲੇ ਹਰ ਵਿਅਕਤੀ ਲਈ ਇੱਕ ਸੁਆਗਤ ਕਰਨ ਵਾਲਾ ਘਰ ਹੈ।",
    "home.services.label": "ਸੰਗਤ ਅਤੇ ਭਗਤੀ",
    "home.services.title": "ਧਾਰਮਿਕ ਸੇਵਾਵਾਂ ਅਤੇ ਸੇਵਾ",
    "home.video.label": "ਰੂਹਾਨੀ ਝਲਕ",
    "home.video.title": "ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਦੀ ਵੀਡੀਓ",
    "home.video.desc": "\"ਇਸ ਛੋਟੀ ਜਿਹੀ ਸਿਨੇਮੈਟਿਕ ਯਾਤਰਾ ਰਾਹੀਂ ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਲੈਂਗਨਥਲ ਦੇ ਰੂਹਾਨੀ ਮਾਹੌਲ ਅਤੇ ਭਾਈਚਾਰਕ ਭਾਵਨਾ ਦਾ ਅਨੁਭਵ ਕਰੋ।\"",
    "home.edu.title": "ਅਗਲੀ ਪੀੜ੍ਹੀ ਨੂੰ ਸ਼ਕਤੀਮਾਨ ਕਰਨਾ",
    "home.edu.desc": "ਗੁਰਮਤਿ ਸਕੂਲ ਬੱਚਿਆਂ ਨੂੰ ਪੰਜਾਬੀ, ਗੁਰਬਾਣੀ ਸੰਥਿਆ ਅਤੇ ਸਿੱਖ ਇਤਿਹਾਸ ਸਿਖਾਉਣ ਲਈ ਹਫਤਾਵਾਰੀ ਕਲਾਸਾਂ ਦੇ ਨਾਲ-ਨਾਲ ਸਾਡੇ ਸਾਲਾਨਾ ਗੁਰਮਤਿ ਕੈਂਪ ਵੀ ਲਗਾਉਂਦਾ ਹੈ।",
    "home.edu.btn": "ਸਿੱਖਿਆ ਪ੍ਰੋਗਰਾਮਾਂ ਬਾਰੇ ਜਾਣੋ",

    // About Page
    "about.header.title": "ਸਾਡੀ ਵਿਰਾਸਤ",
    "about.history.foundation": "ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਸਵਿਟਜ਼ਰਲੈਂਡ ਦਾ ਨੀਂਹ ਪੱਥਰ 11 ਜਨਵਰੀ 2001 ਨੂੰ ਬੜੇ ਸਤਿਕਾਰ ਨਾਲ ਰੱਖਿਆ ਗਿਆ ਸੀ। ਸ਼ੁਭ ਸਮਾਗਮ ਦੀ ਅਗਵਾਈ ਪੰਜ ਪਿਆਰਿਆਂ ਨੇ ਕੀਤੀ ਸੀ, ਜੋ ਲੈਂਗਨਥਲ ਵਿੱਚ ਸਿੱਖ ਸੰਗਤ ਲਈ ਇੱਕ ਰੂਹਾਨੀ ਘਰ ਦੀ ਸ਼ੁਰੂਆਤ ਸੀ।",
    "about.history.desc": "ਉਦੋਂ ਤੋਂ, ਇਹ ਭਗਤੀ, ਭਾਈਚਾਰਕ ਸੇਵਾ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਸੰਭਾਲ ਲਈ ਇੱਕ ਜੀਵੰਤ ਕੇਂਦਰ ਵਜੋਂ ਉੱਭਰਿਆ ਹੈ। ਸਾਡੇ ਦਰਵਾਜ਼ੇ ਸਾਰਿਆਂ ਲਈ ਹਮੇਸ਼ਾ ਖੁੱਲ੍ਹੇ ਹਨ, ਜੋ ਸਾਡੇ ਗੁਰੂਆਂ ਦੀਆਂ ਡੂੰਘੀਆਂ ਸਿੱਖਿਆਵਾਂ 'ਤੇ ਚੱਲਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਨ।",
    "about.committee.label": "ਨਿਸ਼ਕਾਮ ਸੇਵਾ",
    "about.committee.title": "ਪ੍ਰਬੰਧਕ ਕਮੇਟੀ ਅਤੇ ਸੇਵਾਦਾਰ",
    "about.committee.role.mukh": "ਮੁੱਖ ਸੇਵਾਦਾਰ",
    "about.committee.role.member": "ਕਮੇਟੀ ਮੈਂਬਰ",
    "about.contact.label": "ਸੰਪਰਕ ਕਰੋ",
    "about.contact.title": "ਸੰਪਰਕ ਅਤੇ ਫੇਰੀ",
    "about.contact.desc": "ਅਸੀਂ ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਵਿਖੇ ਤੁਹਾਡਾ ਸਵਾਗਤ ਕਰਨ ਲਈ ਉਤਸੁਕ ਹਾਂ।",
    "about.contact.address": "ਪਤਾ",
    "about.contact.phone": "ਫੋਨ ਨੰਬਰ",
    "about.contact.email": "ਈਮੇਲ",
    "about.contact.form.title": "ਸੁਨੇਹਾ ਭੇਜੋ",
    "about.contact.form.name": "ਪੂਰਾ ਨਾਮ",
    "about.contact.form.email": "ਈਮੇਲ ਪਤਾ",
    "about.contact.form.message": "ਸੁਨੇਹਾ",
    "about.contact.form.btn": "ਸੁਨੇਹਾ ਭੇਜੋ",
    "about.guidelines.title": "ਸੰਗਤ ਲਈ ਹਦਾਇਤਾਂ",
    "about.guidelines.desc": "ਅਸੀਂ ਸਾਰਿਆਂ ਦਾ ਸਵਾਗਤ ਕਰਦੇ ਹਾਂ ਚਾਹੇ ਕੋਈ ਵੀ ਧਰਮ ਜਾਂ ਜਾਤ ਹੋਵੇ। ਦਰਬਾਰ ਸਾਹਿਬ ਦੀ ਮਰਯਾਦਾ ਨੂੰ ਬਣਾਈ ਰੱਖਣ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਹੇਠ ਲਿਖੀਆਂ ਹਦਾਇਤਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ।",
    "about.guidelines.head.title": "ਸਿਰ ਢੱਕੋ",
    "about.guidelines.head.desc": "ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਸਿਰ ਢੱਕੋ। ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਰੁਮਾਲ ਨਹੀਂ ਹੈ, ਤਾਂ ਗੇਟ ਦੇ ਕੋਲ ਰੁਮਾਲ ਉਪਲਬਧ ਹਨ।",
    "about.guidelines.shoes.title": "ਜੁੱਤੀਆਂ ਉਤਾਰੋ",
    "about.guidelines.shoes.desc": "ਮੁੱਖ ਹਾਲ ਜਾਂ ਲੰਗਰ ਹਾਲ ਵਿੱਚ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਜੁੱਤੀਆਂ ਉਤਾਰ ਕੇ ਜੁੱਤੀ ਘਰ ਵਿੱਚ ਰੱਖੋ।",
    "about.guidelines.dress.title": "ਮਰਯਾਦਾ ਅਨੁਸਾਰ ਕੱਪੜੇ",
    "about.guidelines.dress.desc": "ਕਿਰਪਾ ਕਰਕੇ ਸਾਦੇ ਅਤੇ ਮਰਯਾਦਾ ਅਨੁਸਾਰ ਕੱਪੜੇ ਪਹਿਨੋ। ਨਿੱਕਰਾਂ, ਛੋਟੀਆਂ ਸਕਰਟਾਂ ਜਾਂ ਬਿਨਾਂ ਬਾਹਾਂ ਵਾਲੀਆਂ ਕਮੀਜ਼ਾਂ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਹੈ। ਮੋਢੇ ਅਤੇ ਗੋਡੇ ਢੱਕੇ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ।",
    "about.guidelines.intox.title": "ਨਸ਼ਾ ਮੁਕਤ",
    "about.guidelines.intox.desc": "ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਦੇ ਅੰਦਰ ਤੰਬਾਕੂ, ਸ਼ਰਾਬ ਜਾਂ ਕਿਸੇ ਵੀ ਹੋਰ ਨਸ਼ੀਲੇ ਪਦਾਰਥ ਦੀ ਸਖਤ ਮਨਾਹੀ ਹੈ।",
    "about.hours.title": "ਖੁੱਲ੍ਹਣ ਦਾ ਸਮਾਂ",
    "about.hours.days": "ਹਰ ਰੋਜ਼",
    "about.location.title": "ਸਾਡਾ ਪਤਾ",

    // Sewa Page
    "sewa.header.title": "ਧਾਰਮਿਕ ਸੇਵਾਵਾਂ ਅਤੇ ਸੇਵਾ",
    "sewa.header.quote": "\"ਸੇਵਾ ਕਰਤ ਹੋਇ ਨਿਹਕਾਮੀ ॥ ਤਿਸ ਕਉ ਹੋਤ ਪਰਾਪਤਿ ਸੁਆਮੀ ॥\"",
    "sewa.service.path.title": "ਸ੍ਰੀ ਅਖੰਡ ਪਾਠ ਸੇਵਾ",
    "sewa.service.path.desc": "ਜਿਹੜਾ ਵੀ ਸ੍ਰੀ ਅਖੰਡ ਪਾਠ ਸਾਹਿਬ ਜਾਂ ਸਹਿਜ ਪਾਠ ਦੀ ਸੇਵਾ ਕਰਵਾਉਣਾ ਚਾਹੁੰਦਾ ਹੈ, ਉਨ੍ਹਾਂ ਨੂੰ ਬੇਨਤੀ ਹੈ ਕਿ ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਮਹੀਨਾ ਪਹਿਲਾਂ ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਨੂੰ ਸੂਚਿਤ ਕਰੋ ਤਾਂ ਜੋ ਪਾਠੀ ਸਿੰਘਾਂ ਦਾ ਪ੍ਰਬੰਧ ਸਮੇਂ ਸਿਰ ਕੀਤਾ ਜਾ ਸਕੇ।",
    "sewa.service.sukhmani.title": "ਸੁਖਮਨੀ ਸਾਹਿਬ ਪਾਠ",
    "sewa.service.sukhmani.desc": "ਹਰ ਐਤਵਾਰ ਕੋਈ ਵੀ ਸ੍ਰੀ ਸੁਖਮਨੀ ਸਾਹਿਬ ਜੀ ਦੇ ਪਾਠ ਦੀ ਸੇਵਾ ਕਰਵਾ ਸਕਦਾ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਬਾਰੇ ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਨੂੰ ਈਮੇਲ ਜਾਂ ਫੋਨ ਰਾਹੀਂ ਸੂਚਿਤ ਕਰੋ।",
    "sewa.service.samagam.title": "ਸਮਾਗਮ ਸੇਵਾ",
    "sewa.service.samagam.desc": "ਹਰ ਐਤਵਾਰ ਗੁਰਪੁਰਬਾਂ, ਸ਼ਹੀਦੀ ਦਿਹਾੜਿਆਂ ਜਾਂ ਇਤਿਹਾਸਕ ਸਮਾਗਮਾਂ ਨਾਲ ਸਬੰਧਤ ਸਮਾਗਮ ਹੁੰਦੇ ਹਨ। ਸੇਵਾ ਕਰਨ ਲਈ ਸੰਪਰਕ ਕਰੋ।",
    "sewa.service.langar.title": "ਲੰਗਰ ਸੇਵਾ",
    "sewa.service.langar.desc": "ਕੋਈ ਵੀ ਐਤਵਾਰ ਨੂੰ ਲੰਗਰ ਦੀ ਸੇਵਾ ਲੈ ਸਕਦਾ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਯੋਗਦਾਨ ਲਈ ਈਮੇਲ ਜਾਂ ਫੋਨ ਰਾਹੀਂ ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਨੂੰ ਸੂਚਿਤ ਕਰੋ।",
    "sewa.service.class.title": "ਗੁਰਮਤਿ ਕਲਾਸ",
    "sewa.service.class.desc": "ਹਰ ਐਤਵਾਰ ਗੁਰਮਤਿ ਕਲਾਸ ਹੁੰਦੀ ਹੈ। ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਕਿਸੇ ਵੀ ਤਰ੍ਹਾਂ ਦੇ ਯੋਗਦਾਨ ਜਾਂ ਸੇਵਾ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
    "sewa.service.camp.title": "ਗੁਰਮਤਿ ਕੈਂਪ ਸੇਵਾ",
    "sewa.service.camp.desc": "ਹਰ ਸਾਲ ਸੰਗਤ ਦੇ ਸਹਿਯੋਗ ਨਾਲ ਇੱਕ ਵੱਡਾ ਗਰਮੀਆਂ ਦਾ ਕੈਂਪ ਅਤੇ ਦੋ ਛੋਟੇ ਕੈਂਪ ਲਗਾਏ ਜਾਂਦੇ ਹਨ। ਯੋਗਦਾਨ ਪਾਉਣ ਲਈ ਸੰਪਰਕ ਕਰੋ।",
    "sewa.cta.title": "ਸੇਵਾ ਦੀ ਦਾਤ",
    "sewa.cta.desc": "\"ਸੇਵਾ ਰਾਹੀਂ ਹਿਰਦਾ ਸ਼ੁੱਧ ਹੁੰਦਾ ਹੈ ਅਤੇ ਆਤਮਾ ਨੂੰ ਸੱਚੀ ਸ਼ਾਂਤੀ ਮਿਲਦੀ ਹੈ।\" ਅਸੀਂ ਤੁਹਾਨੂੰ ਸੇਵਾਦਾਰਾਂ ਦੀ ਸਾਡੀ ਟੀਮ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਲਈ ਸੱਦਾ ਦਿੰਦੇ ਹਾਂ।",

    // Education Page
    "edu.header.title": "ਗੁਰਮਤਿ ਸਕੂਲ ਅਤੇ ਯੂਥ ਕੈਂਪ",
    "edu.header.subtitle": "ਅਗਲੀ ਪੀੜ੍ਹੀ ਨੂੰ ਸਿੱਖੀ ਦੀ ਅਮੀਰ ਵਿਰਾਸਤ, ਬੋਲੀ ਅਤੇ ਰੂਹਾਨੀ ਸਿੱਖਿਆਵਾਂ ਨਾਲ ਜੋੜਨਾ।",
    "edu.weekend.label": "ਪੰਜਾਬੀ ਅਤੇ ਗੁਰਬਾਣੀ",
    "edu.weekend.title": "ਹਫਤਾਵਾਰੀ ਕਲਾਸਾਂ",
    "edu.weekend.desc": "ਸਾਡਾ ਗੁਰਮਤਿ ਸਕੂਲ ਹਰ ਐਤਵਾਰ ਬੱਚਿਆਂ ਨੂੰ ਪੰਜਾਬੀ, ਗੁਰਬਾਣੀ ਅਤੇ ਸਿੱਖ ਇਤਿਹਾਸ ਸਿਖਾਉਣ ਲਈ ਕਲਾਸਾਂ ਲਗਾਉਂਦਾ ਹੈ। ਵਧੇਰੇ ਜਾਣਕਾਰੀ ਲਈ ਸੰਪਰਕ ਕਰੋ।",
    "edu.weekend.item1": "ਗੁਰਮੁਖੀ ਅੱਖਰ ਅਤੇ ਪੜ੍ਹਨਾ",
    "edu.weekend.item2": "ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਵਿਖੇ",
    "edu.weekend.item3": "ਹਰ ਐਤਵਾਰ ਸਵੇਰੇ",
    "edu.weekend.btn": "ਸਿਲੇਬਸ ਦੇਖੋ",
    "edu.annual.label": "ਯੂਥ ਪਾਵਰ",
    "edu.annual.title": "ਸਾਲਾਨਾ ਗੁਰਮਤਿ ਕੈਂਪ",
    "edu.annual.desc": "ਹਰ ਸਾਲ ਅਸੀਂ ਇੱਕ ਮੁੱਖ ਗਰਮੀਆਂ ਦਾ ਕੈਂਪ ਅਤੇ ਦੋ ਛੋਟੇ ਕੈਂਪ ਲਗਾਉਂਦੇ ਹਾਂ। ਇਹ ਪ੍ਰੋਗਰਾਮ ਸੰਗਤ ਦੇ ਸਹਿਯੋਗ ਨਾਲ ਚਲਾਏ ਜਾਂਦੇ ਹਨ।",
    "edu.annual.item1": "ਵਰਕਸ਼ਾਪਾਂ",
    "edu.annual.item2": "ਕੀਰਤਨ ਅਤੇ ਤਬਲਾ ਸਿੱਖਿਆ",
    "edu.annual.item3": "ਬਾਹਰੀ ਗਤੀਵਿਧੀਆਂ ਅਤੇ ਲੀਡਰਸ਼ਿਪ",
    "edu.cta.title": "ਆਪਣੇ ਬੱਚੇ ਨੂੰ ਵਿਰਾਸਤ ਦੀ ਦਾਤ ਦਿਓ",
    "edu.cta.desc": "ਆਉਣ ਵਾਲੇ ਸੈਸ਼ਨਾਂ ਲਈ ਦਾਖਲੇ ਖੁੱਲ੍ਹੇ ਹਨ। ਉਨ੍ਹਾਂ ਨੂੰ ਰੂਹਾਨੀਅਤ ਅਤੇ ਸੰਗਤ ਨਾਲ ਜੋੜੋ।",
    "edu.cta.btn": "ਬੱਚੇ ਦਾ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕਰੋ",

    // Schedule Page
    "schedule.header.title": "ਦੀਵਾਨ ਦਾ ਸਮਾਂ",
    "schedule.header.quote": "\"ਵਿਚਿ ਸੰਗਤਿ ਹਰਿ ਪ੍ਰਭੁ ਵਸੈ ਜੀਉ ॥\"",
    "schedule.showcase.label": "ਦੀਵਾਨ ਸਮਾਗਮ",
    "schedule.showcase.title": "ਹਫਤਾਵਾਰੀ ਅਤੇ ਰੋਜ਼ਾਨਾ ਸਮਾਂ",
    "schedule.showcase.desc": "ਸਾਡਾ ਰੋਜ਼ਾਨਾ ਅਤੇ ਹਫਤਾਵਾਰੀ ਰੂਹਾਨੀ ਸਮਾਂ ਦੇਖੋ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਜਾਣਕਾਰੀ ਲਈ ਇਹ ਤਸਵੀਰਾਂ ਸੇਵ ਕਰ ਲਓ।",
    "schedule.showcase.en": "ਅੰਗਰੇਜ਼ੀ ਵਰਜਨ",
    "schedule.showcase.pa": "ਪੰਜਾਬੀ ਵਰਜਨ",
    "schedule.cta.title": "ਸੰਗਤ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",
    "schedule.cta.desc": "ਅਸੀਂ ਗੁਰੂ ਦੇ ਘਰ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਕਰਦੇ ਹਾਂ। ਸਾਰਿਆਂ ਲਈ ਜੀ ਆਇਆਂ ਨੂੰ।",
    "schedule.cta.btn": "ਆਪਣੀ ਫੇਰੀ ਦੀ ਯੋਜਨਾ ਬਣਾਓ",

    // Footer
    "footer.desc": "ਲੈਂਗਨਥਲ ਵਿੱਚ ਸਿੱਖ ਸੰਗਤ ਦਾ ਰੂਹਾਨੀ ਘਰ। ਸ਼ਾਂਤੀ, ਸਮਾਨਤਾ ਅਤੇ ਸੇਵਾ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਦਾ ਹੈ।",
    "footer.links.title": "ਜ਼ਰੂਰੀ ਲਿੰਕ",
    "footer.contact.title": "ਸੰਪਰਕ ਕਰੋ",
    "footer.rights": "ਸਭ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("EN");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as Language;
    if (saved && ["EN", "DE", "PA"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    const langCodeMap = { EN: "en", DE: "de", PA: "pa" };
    document.documentElement.lang = langCodeMap[lang];
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("preferred_lang", newLang);
  };

  const t = (key: string) => {
    return translations[lang]?.[key] || translations["EN"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
