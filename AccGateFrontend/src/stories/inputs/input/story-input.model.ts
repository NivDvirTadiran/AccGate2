export interface StoryInput {
  id: string;
  title: string;
  state: string;
  icon:  string;
  type:  'text' | 'password' | 'phone' | 'email';
  placeholder: string;
  hide: boolean;

}
