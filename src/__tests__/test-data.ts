import { Speaker, Session, StageValues } from "@/lib/airtable/types";

// Mock test data for smoke testing
export const mockSpeaker: Speaker = {
  id: "test-speaker-1",
  _name: "Trezoa Team",
  firstName: "Trezoa",
  lastName: "Team",
  jobTitle: "Senior Developer",
  company: "Trezoa Labs",
  bio: "Trezoa Team consists of passionate developers with 10+ years of experience in web technologies.",
  imageUrl: "https://example.com/trezoa-team.jpg",
  speakerCardUrl: "https://example.com/trezoa-team-card.jpg",
  xLink: "https://x.com/trezoa",
  xName: "@trezoa",
  slideDeckFile: undefined,
  lumaTicketSpeaker: undefined,
  lumaTicketPlusOne: undefined,
  invitationCode: undefined,
  discountCode: undefined,
  dietary: undefined,
  speakerPermitApproval: undefined,
  mcInfo: undefined,
  parkingTicket: undefined,
  youtubeVideoUrl: "https://youtube.com/watch?v=abc123, https://youtube.com/watch?v=def456",
  speakerPhotoLink:
    "https://photos.example.com/speaker1, https://photos.example.com/speaker2, https://photos.example.com/speaker3",
};

export const mockSessions: Session[] = [
  {
    id: "session-1",
    name: "Building Scalable Web Applications",
    description: "Learn how to build web applications that can handle millions of users.",
    startTime: "2027-01-15T10:00:00.000Z",
    endTime: "2027-01-15T11:00:00.000Z",
    stage: StageValues.Main,
    speakerIds: ["test-speaker-1"],
    moderatorIds: undefined,
    format: undefined,
    actionsDeckReceived: undefined,
    portalTelegramGroup: undefined,
    greenlightTime: undefined,
    webPublishingStatus: undefined,
  },
  {
    id: "session-2",
    name: "Advanced React Patterns",
    description: "Deep dive into advanced React patterns and best practices.",
    startTime: "2027-01-15T14:00:00.000Z",
    endTime: "2027-01-15T15:00:00.000Z",
    stage: StageValues.Side,
    speakerIds: ["test-speaker-1"],
    moderatorIds: undefined,
    format: undefined,
    actionsDeckReceived: undefined,
    portalTelegramGroup: undefined,
    greenlightTime: undefined,
    webPublishingStatus: undefined,
  },
];

// Mock Airtable records (raw format)
export const mockSpeakerRecord = {
  id: "test-speaker-1",
  fields: {
    Name: "Trezoa Team",
    "First Name": "Trezoa",
    "Last Name": "Team",
    "Role or Title": "Senior Developer",
    Company: "Trezoa Labs",
    Bio: "Trezoa Team consists of passionate developers with 10+ years of experience in web technologies.",
    "Headshot_For Web": [{ url: "https://example.com/trezoa-team.jpg" }],
    "Speaker Card": [{ url: "https://example.com/trezoa-team-card.jpg" }],
    Twitter: "https://x.com/trezoa",
    "YouTube Speaker Video": "https://youtube.com/watch?v=abc123, https://youtube.com/watch?v=def456",
    "Speaker Photo Link":
      "https://photos.example.com/speaker1, https://photos.example.com/speaker2, https://photos.example.com/speaker3",
  },
};

export const mockSessionRecords = [
  {
    id: "session-1",
    fields: {
      "⚙️ Session Name": "Building Scalable Web Applications",
      Description: "Learn how to build web applications that can handle millions of users.",
      "Start Time": "2027-01-15T10:00:00.000Z",
      "End Time": "2027-01-15T11:00:00.000Z",
      Stage: StageValues.Main,
      "Onboarded Speakers": ["Trezoa Team"],
    },
  },
  {
    id: "session-2",
    fields: {
      "⚙️ Session Name": "Advanced React Patterns",
      Description: "Deep dive into advanced React patterns and best practices.",
      "Start Time": "2027-01-15T14:00:00.000Z",
      "End Time": "2027-01-15T15:00:00.000Z",
      Stage: StageValues.Side,
      "Onboarded Speakers": ["Trezoa Team"],
    },
  },
];

// Test authentication key
export const testAuthKey = "test-secret-key";
