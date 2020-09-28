interface Events {
  id: string;
  Title?: string;
  Date?: date;
  Content?: string;
}
interface Email {
  id: string;
  companyname?: string;
  companymail?: string;
  message?: string;
  fullname?: string;
}

interface Employee {
  id: string;
  fullname?: string;
  role?: string;
  email?: string;
}
interface Task {
  id: string;
  content?: string;
  person?: string;
}
interface JobOffer {
  id: string;
  Title?: string;
  Location?: string;
}
interface Announcement {
  id: string;
  Content?: string;
  Title?: string;
}
