import { Scripture, FastingTip, FastingEvent } from './fasting-types';

// Event configuration
export const FASTING_EVENT: FastingEvent = {
  startDate: new Date('2025-11-11T00:00:00-05:00'), // November 11, 2025, EST
  endDate: new Date('2025-11-16T12:00:00-05:00'),   // November 16, 2025, 12:00 PM EST
  name: 'Church Group Fast',
  description: 'Join our congregation in a spiritual journey of fasting, prayer, and community support.',
};

// Bible scriptures focused on fasting
export const SCRIPTURES: Scripture[] = [
  {
    id: '1',
    reference: 'Matthew 6:16-18',
    text: 'When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting. Truly I tell you, they have received their reward in full. But when you fast, put oil on your head and wash your face, so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen; and your Father, who sees what is done in secret, will reward you.',
    theme: 'discipline',
  },
  {
    id: '2',
    reference: 'Isaiah 58:6-7',
    text: 'Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter—when you see the naked, to clothe them, and not to turn away from your own flesh and blood?',
    theme: 'sacrifice',
  },
  {
    id: '3',
    reference: 'Joel 2:12',
    text: '"Even now," declares the LORD, "return to me with all your heart, with fasting and weeping and mourning."',
    theme: 'faith',
  },
  {
    id: '4',
    reference: 'Acts 13:2-3',
    text: 'While they were worshiping the Lord and fasting, the Holy Spirit said, "Set apart for me Barnabas and Saul for the work to which I have called them." So after they had fasted and prayed, they placed their hands on them and sent them off.',
    theme: 'prayer',
  },
  {
    id: '5',
    reference: 'Psalm 35:13',
    text: 'Yet when they were ill, I put on sackcloth and humbled myself with fasting. When my prayers returned to me unanswered.',
    theme: 'prayer',
  },
  {
    id: '6',
    reference: 'Daniel 10:3',
    text: 'I ate no choice food; no meat or wine touched my lips; and I used no lotions at all until the three weeks were over.',
    theme: 'discipline',
  },
  {
    id: '7',
    reference: 'Matthew 4:1-2',
    text: 'Then Jesus was led by the Spirit into the wilderness to be tempted by the devil. After fasting forty days and forty nights, he was hungry.',
    theme: 'faith',
  },
  {
    id: '8',
    reference: 'Nehemiah 1:4',
    text: 'When I heard these things, I sat down and wept. For some days I mourned and fasted and prayed before the God of heaven.',
    theme: 'prayer',
  },
  {
    id: '9',
    reference: 'Ezra 8:23',
    text: 'So we fasted and petitioned our God about this, and he answered our prayer.',
    theme: 'prayer',
  },
  {
    id: '10',
    reference: 'Luke 2:37',
    text: 'And then was a widow until she was eighty-four. She never left the temple but worshiped night and day, fasting and praying.',
    theme: 'faith',
  },
];

// Fasting tips and guidance
export const FASTING_TIPS: FastingTip[] = [
  {
    id: '1',
    title: 'Start with Prayer',
    content: 'Begin your fast with intentional prayer. Set your spiritual goals and surrender your journey to God.',
    day: 1,
  },
  {
    id: '2',
    title: 'Stay Hydrated',
    content: 'Drink plenty of water throughout your fast. Proper hydration supports your body and helps maintain focus on spiritual matters.',
  },
  {
    id: '3',
    title: 'Embrace the Quiet',
    content: 'Use moments of hunger as reminders to turn to God in prayer. Let discomfort draw you closer to the divine.',
  },
  {
    id: '4',
    title: 'Journal Your Journey',
    content: 'Document your spiritual insights, prayers, and reflections. These will be precious reminders of God\'s faithfulness.',
  },
  {
    id: '5',
    title: 'Read Scripture Daily',
    content: 'Feed your spirit with God\'s Word. Let scripture nourish you when physical food cannot.',
  },
  {
    id: '6',
    title: 'Find Community',
    content: 'Share your journey with fellow believers. Encourage one another and pray together.',
  },
  {
    id: '7',
    title: 'Listen for God',
    content: 'Create space in your day for silence and listening. Fasting clears the noise so we can hear God\'s voice.',
  },
  {
    id: '8',
    title: 'Be Gentle with Yourself',
    content: 'Fasting is a spiritual discipline, not a competition. Honor your body\'s limits while pursuing spiritual growth.',
  },
  {
    id: '9',
    title: 'Break Your Fast Mindfully',
    content: 'When ending your fast, do so gradually and prayerfully. Thank God for sustaining you.',
  },
  {
    id: '10',
    title: 'Reflect on Growth',
    content: 'Consider how God has spoken to you during this time. What has changed in your heart?',
  },
];

// Helper function to get daily scripture
export function getDailyScripture(day: number): Scripture {
  const index = (day - 1) % SCRIPTURES.length;
  return SCRIPTURES[index];
}

// Helper function to get daily tip
export function getDailyTip(day: number): FastingTip {
  const dayTip = FASTING_TIPS.find(tip => tip.day === day);
  if (dayTip) return dayTip;

  const index = (day - 1) % FASTING_TIPS.length;
  return FASTING_TIPS[index];
}

// Helper function to calculate current day of fast
export function getCurrentFastDay(): number {
  const now = new Date();
  const start = FASTING_EVENT.startDate;

  if (now < start) return 0;

  const diffTime = Math.abs(now.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
