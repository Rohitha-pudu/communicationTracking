

  // types/adminTypes.ts
export interface Company {
  id: string;
  name: string;
  location: string;
  linkedin: string;
  emails: string[];
  phoneNumbers: string[];
  comments: string;
  periodicity: '1 week' | '2 weeks' | '1 month';
}
export interface CommunicationMethod {
  id: string;
  name: string;
  description?: string;
  sequence: number;
  mandatoryFlag: boolean;
}


  
  