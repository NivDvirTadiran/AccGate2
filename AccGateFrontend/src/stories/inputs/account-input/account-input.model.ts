export interface AccountInput {
  id: string;
  name: string;
  title: string;
  state: string;
  icon:  string;
  type:  'enable-profile-picture' | 'phone' | 'email' | 'password';
  placeholder: string;
  hide: boolean;

}
