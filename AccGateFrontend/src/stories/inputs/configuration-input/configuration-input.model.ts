export interface ConfigurationInput {
  id: string;
  name: string;
  title: string;
  state: string;
  icon:  string;
  type:'tadiran.gate.PreviousAlertPassExpDays'        |
       'tadiran.gate.pass-exp-days'                   |
       'tadiran.gate.pin-code-length'                 |
       'tadiran.gate.pin-code-val-dura'               |
       'tel'                                          |
       'email'                                        |
       'password'                                     |
       'tadiran.gate.ACCServerAddress1'               |
       'tadiran.gate.jwtSecret'                       |
       'spring.jpa.properties.hibernate.dialect'      |
       'spring.datasource.userName'                   |
       'spring.datasource.password'                   |
       'spring.jpa.hibernate.ddl-auto'                |
       'spring.mvc.view.prefix'                       |
       'spring.datasource.driver-class-name'          |
       'tadiran.gate.TSV'                             |
       'tadiran.gate.accVersion'                      |
       'tadiran.gate.jwtExpirationMin'                |
       'spring.datasource.url'                        |
       'message-from-application-properties'          |
       'spring.mvc.servlet.load-on-startup'           |
       'tadiran.gate.jwtRefreshExpirationMin'         |
       'server.port'                                  |
       'tadiran.gate.MailServer'                      |
       'spring.mvc.view.suffix'                       |
       'greetings-message'                            |
       'tadiran.gate.ACCServerAddress2'               ;
  placeholder: string;
  hide: boolean;

}
