# Brinks Group website rebuild

Responsive static HTML, CSS and JavaScript reconstruction of the Brinks Group website. This revision improves the footer layout, expands the About Us and Contact pages, adds ten company profiles, and slows homepage carousel autoplay to five seconds.

## Files
- `index.html` — homepage and company carousel
- `companies.html` / `companies.js` — directory of all eight group companies
- `company.html` — company-specific profiles selected through the `?company=` query string
- `about.html` — group overview, approach and values
- `contact.html` — enquiry information and a front-end enquiry form that prepares a local text file (it does not send email)
- `styles.css`, `script.js` — shared responsive styling and navigation/carousel behaviour

## Preview
Open `index.html` in a browser. Internet access is required for remote Unsplash photography.

## Before publishing
- Confirm official company names, service descriptions, contact details, legal details and operating coverage with Brinks Group.
- The company profile descriptions are introductory copy, not verified claims of licences, capacity or service availability.
- Replace remote stock photography with approved company images where available.
- Add official Kenyan address, telephone, email, logo and social links once supplied.
- Connect the enquiry form to an approved email/form service before launch.
- Add privacy/legal pages if required and test on the actual hosting environment and target devices.

## Deployment
Upload the folder contents to the site's web root on the selected hosting service. No build step is required.

## Company service content update
Company profile pages now present detailed service sections based on the readable original Brinks Zambia pages for Logistics & Forwarding, Air Cargo, Trucks & Spares, Protects Brinks Security and DICC. Investment & Financing and Insurance Brokers source pages could not be retrieved as readable pages; their profiles are explicitly marked as awaiting verification and avoid claiming specific financial products or insurance classes. Mining & Refinery is described at a high level only because a detailed original service page was not available. Confirm Kenyan operating scope, licensing, products, routes, availability and contact details before publication.


## Clickable company cards
The entire company card on the homepage carousel and Our Companies directory is clickable and opens the relevant company profile. The inner “Explore company” link remains available. Cards support keyboard activation (Enter/Space) and visible keyboard focus.

## Adding your photographs
You can provide a ZIP of photographs. Ideally, name the images by company (for example `logistics.jpg`, `air-cargo.jpg`, `investments.jpg`, `trucks.jpg`, `mining.jpg`, `insurance.jpg`, `security.jpg`, `dicc.jpg`) or place them in clearly named company folders. Include any preferred homepage/hero images in a folder named `homepage` or `hero`.


## WhatsApp and email enquiries setup

Open `contact-config.js` and fill in the two settings before publishing:

- `whatsappNumbers`: the two WhatsApp contacts are configured as `260968372323` and `260977430463` (international format, digits only).
- `enquiryEmail`: the email inbox that should receive contact form submissions.

Two floating WhatsApp contact links appear on every page and open pre-filled chats to the supplied numbers. The contact form uses FormSubmit (`https://formsubmit.co`) and submits directly to the configured email. On the first real submission, FormSubmit sends an activation email to that inbox; click its verification link to enable delivery. FormSubmit is a third-party service, so review its privacy terms before launch. Do not put passwords, API keys or other secrets in this file.

Until the two settings are filled, the WhatsApp button displays a setup notice and the contact form will not pretend to send.


## Official logo
The supplied Brinks logo is stored at `assets/brinks-logo.png` and is used in the site header, footer and as the browser favicon. Replace this file to update the logo site-wide while keeping the same filename.

## Brinks field-work photographs
The supplied photographs have been optimised to WebP and added to the homepage field-work feature and the About Us photo gallery. Captions describe only what is visible; no specific project type, client, location or subsidiary has been assumed. Images are stored in `assets/field-work/`.

## Brinks field-work photographs
The supplied photographs have been optimised to WebP and added to the homepage field-work feature and the About Us photo gallery. Captions describe only what is visible; no specific project type, client, location or subsidiary has been assumed. Images are stored in `assets/field-work/`.


### Field-work gallery update
The About page gallery includes additional project photographs covering landscaping, paved grounds, concrete block installation and the project entrance. An architectural concept rendering is captioned as a concept image, not as a completed building. Images that could not be confidently associated with a Brinks project were not added.

## Company project portfolios

Each company profile now includes an **Our Projects** section with In Progress and Past Projects tabs. Project cards support a title, location, status, description and multiple photographs. Empty states are shown where verified project records have not yet been supplied; this avoids presenting unverified work as completed projects.

The current field photographs support one published in-progress portfolio under Direct Initiative Credit Consultancy (DICC): **Infrastructure development and site works**. The photos show site preparation, paving, concrete block installation and landscaping, and the site signage references DICC and Brinks Group infrastructure development. No completed project has been added because no completion evidence or completion date was supplied.

To add projects for another company, add its `progress` and/or `past` arrays to the `projectPortfolio` object in `company.html`. Each project accepts `title`, `location`, `status`, `description`, and an `images` array of `[imagePath, altText]` pairs. Use verified company-specific project material before publishing.


## Company list update
The directory now includes all ten company names supplied by Brinks Group: Brinks Logistics & Forwarding Limited; Brinks Aust Mining & Refinery Limited; Brinks Air Cargo Limited; Brinks Insurance Brokers Limited; Brinks Investments & Financing Limited; Protects Brinks Security Limited; Brinks Technologies Limited; Brinks Trucks & Spares Limited; Brinks Petroleum Energies Limited; and Direct Initiative Credit Consultancy Limited. Technologies and Petroleum Energies profiles are enquiry-level introductions pending confirmed service catalogues.

## Brinks Logistics membership fee notice
The Brinks Logistics profile includes the US$35,000 non-refundable one-off Professional Consultancy and Membership Fee notice, separate service charges, and 100% upfront invoicing conditions. Confirm legal wording and applicable jurisdiction before launch.

## Current projects carousel
The homepage features the current-projects carousel. Project details are presented as supplied and should be reconfirmed before publication.
