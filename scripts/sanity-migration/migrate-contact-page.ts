/**
 * Migration script to populate Contact Us page in Sanity
 * This script migrates data from constants/menus.tsx
 *
 * Run: npx tsx scripts/sanity-migration/migrate-contact-page.ts
 */

import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Contact page data
const contactPageData = {
  _id: 'contactPage',
  _type: 'contactPage',
  contactInfo: {
    address: {
      am: 'Ծիծեռնակաբերդի խճուղի ½, 303, Երևան, 0082, Հայաստան',
      en: 'Tsitsernakaberd Highway, ½, 303 , Yerevan, Armenia 0082',
      ru: 'Цицернакабердское шоссе, ½, 303, Ереван, 0082, Армения',
    },
    email: 'info@cardiolab.am',
    phoneNumbers: ['+374 11991180', '+374 33991188', '+374 44991188'],
  },
  contactForm: {
    successMessage: {
      am: 'Շնորհակալ ենք «ԿարդիոԼաբ» Բժշկական Կենտրոնին վստահելու համար։\n\nՁեր գրանցման հայտը հաջողությամբ ուղարկվել է։ Մեր օպերատորները կապ կհաստատեն Ձեզ հետ հնարավորինս շուտ՝ այցի օրն ու ժամը հաստատելու համար։\n\n📞 Եթե ցանկանում եք ավելի շուտ կապ հաստատել կամ ունեք հարցեր, կարող եք զանգահարել մեզ հետևյալ համարներով՝\n044 99 11 88, 033 99 11 88, 011 99 11 80',
      en: 'Thank you for trusting CardioLab Medical Center.\n\nYour registration request has been successfully submitted. Our operators will contact you as soon as possible to confirm the date and time of your visit.\n\n📞 If you would like to get in touch sooner or have any questions, you can call us at:\n044 99 11 88, 033 99 11 88, 011 99 11 80',
      ru: 'Спасибо за доверие к Медицинскому центру CardioLab.\n\nВаш запрос на регистрацию успешно отправлен. Наши операторы свяжутся с вами как можно скорее, чтобы подтвердить дату и время вашего визита.\n\n📞 Если вы хотите связаться с нами раньше или у вас есть вопросы, вы можете позвонить нам по телефонам:\n044 99 11 88, 033 99 11 88, 011 99 11 80',
    },
    sliderImages: [
      // Note: This will create placeholder references
      // You'll need to manually upload the actual image in Sanity Studio
      // Image URL: https://x41q9wll8l.ufs.sh/f/kPqN7718CWluga5tUTviePapmd4fjRNBXFSt1CEhgvq2b0rM
    ],
  },
  mapSection: {
    title: {
      am: 'Գտեք մեզ քարտեզի վրա',
      en: 'Find Us On Map',
      ru: 'Найдите нас на карте',
    },
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011.1713805387996!2d44.4892700995798!3d40.178709741018636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406ab92d0a44c263%3A0xa55dafc31955e32c!2sCardioLab%20Medical%20Center!5e0!3m2!1sen!2sam!4v1744544127491!5m2!1sen!2sam',
  },
};

async function migrateContactPage() {
  console.log('🚀 Starting Contact Us page migration to Sanity...\n');

  try {
    // Create or update the contact page document
    const result = await client.createOrReplace(contactPageData);

    console.log('✅ Successfully created Contact Us page in Sanity!\n');
    console.log(`📄 Document ID: ${result._id}`);
    console.log('📝 Document created with the following sections:');
    console.log('   • Contact Information (address, email, phone numbers)');
    console.log('   • Contact Form Settings (success message)');
    console.log('   • Map Section (title, embed URL)');
    console.log(
      '\n📌 Note: You need to upload slider images manually in Sanity Studio'
    );
    console.log(
      '   Image URL: https://x41q9wll8l.ufs.sh/f/kPqN7718CWluga5tUTviePapmd4fjRNBXFSt1CEhgvq2b0rM'
    );
    console.log('\n🎉 Migration complete!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run the migration
migrateContactPage();
