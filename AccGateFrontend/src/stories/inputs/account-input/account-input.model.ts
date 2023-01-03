export interface AccountInput {
  id: string;
  title: string;
  state: string;
  icon:  string;
  type:  'enable-profile-picture' | 'tel' | 'email' | 'password';
  placeholder: string;
  hide: boolean;

}
