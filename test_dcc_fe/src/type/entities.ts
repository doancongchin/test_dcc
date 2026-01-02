export type Entity = {
  id: number;
  createdTime: string;
  name: string;
  profile: string;
  label: string;
  customer: string;
  public: boolean;
  state?: string; 
  gateway?: boolean; 
};