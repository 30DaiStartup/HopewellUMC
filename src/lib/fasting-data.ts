import { Scripture, FastingTip, FastingEvent, PrayerSuggestion } from './fasting-types';

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
  {
    id: '1',
    reference: 'Matthew 6:16-18',
    text: 'When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting. Truly I tell you, they have received their reward in full. But when you fast, put oil on your head and wash your face, so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen; and your Father, who sees what is done in secret, will reward you.',
    theme: 'discipline',
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

// Prayer suggestions based on daily scriptures
export const PRAYER_SUGGESTIONS: PrayerSuggestion[] = [
  {
    id: '1',
    scriptureReference: 'Isaiah 58:6-7',
    prayer: 'Lord, give me the compassion and courage to be Your hands and feet in this world. Help me to see those who are oppressed and in need, and grant me the strength to act with justice and mercy, just as You have called me to do.',
  },
  {
    id: '2',
    scriptureReference: 'Joel 2:12',
    prayer: 'Father, I return to You with all my heart. Forgive me for the times I have strayed, and help me draw closer to You through this season of fasting, weeping, and repentance. Renew my spirit and restore my relationship with You.',
  },
  {
    id: '3',
    scriptureReference: 'Acts 13:2-3',
    prayer: 'Holy Spirit, speak to me as I worship and fast. Give me the clarity and conviction that Barnabas and Saul had when they were set apart for Your work. Grant me their strength, faith, and confidence to fulfill the calling You have placed on my life.',
  },
  {
    id: '4',
    scriptureReference: 'Psalm 35:13',
    prayer: 'Lord, teach me to humble myself through fasting and prayer, even when my prayers seem unanswered. Help me to trust in Your timing and to remain faithful in intercession for others, knowing that You hear every prayer.',
  },
  {
    id: '5',
    scriptureReference: 'Daniel 10:3',
    prayer: 'God, grant me the discipline and self-control that Daniel demonstrated. Help me to set aside worldly pleasures and distractions so that I can focus on seeking Your presence and hearing Your voice more clearly.',
  },
  {
    id: '6',
    scriptureReference: 'Matthew 4:1-2',
    prayer: 'Jesus, as You were led by the Spirit and remained faithful through 40 days of fasting, give me the spiritual strength to resist temptation and remain steadfast in my commitment to You during this time of fasting.',
  },
  {
    id: '7',
    scriptureReference: 'Nehemiah 1:4',
    prayer: 'Lord, break my heart for what breaks Yours. Give me Nehemiah\'s passion for Your people and Your purposes. Help me to mourn, fast, and pray with sincerity, seeking Your will and Your restoration in every situation.',
  },
  {
    id: '8',
    scriptureReference: 'Ezra 8:23',
    prayer: 'Heavenly Father, I fast and petition You with faith, believing that You hear and answer prayer. Just as You answered Ezra and the people, I trust that You will guide me, protect me, and provide for all my needs.',
  },
  {
    id: '9',
    scriptureReference: 'Luke 2:37',
    prayer: 'Lord, give me Anna\'s devotion and faithfulness. Help me to worship You continually, day and night, through fasting and prayer. May my life be marked by unwavering dedication to Your presence and service.',
  },
  {
    id: '10',
    scriptureReference: 'Matthew 6:16-18',
    prayer: 'Father, help me to fast with pure motives, seeking only Your approval and not the recognition of others. Teach me to practice spiritual disciplines in secret, knowing that You see what is done in private and will reward me accordingly.',
  },
];

// Helper function to get daily scripture
export function getDailyScripture(day: number): Scripture {
  // Handle day 0 or negative days (before fast starts)
  if (day <= 0) {
    return SCRIPTURES[0];
  }
  const index = (day - 1) % SCRIPTURES.length;
  return SCRIPTURES[index];
}

// Helper function to get daily tip
export function getDailyTip(day: number): FastingTip {
  const dayTip = FASTING_TIPS.find(tip => tip.day === day);
  if (dayTip) return dayTip;

  // Handle day 0 or negative days (before fast starts)
  if (day <= 0) {
    return FASTING_TIPS[0];
  }

  const index = (day - 1) % FASTING_TIPS.length;
  return FASTING_TIPS[index];
}

// Helper function to get daily prayer suggestion
export function getDailyPrayerSuggestion(day: number): PrayerSuggestion {
  const dayPrayer = PRAYER_SUGGESTIONS.find(prayer => prayer.day === day);
  if (dayPrayer) return dayPrayer;

  // Handle day 0 or negative days (before fast starts)
  if (day <= 0) {
    return PRAYER_SUGGESTIONS[0];
  }

  const index = (day - 1) % PRAYER_SUGGESTIONS.length;
  return PRAYER_SUGGESTIONS[index];
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
