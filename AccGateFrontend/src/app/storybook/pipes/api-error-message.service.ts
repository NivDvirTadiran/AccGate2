import {Injectable} from "@angular/core";
import {first} from "rxjs/operators";


@Injectable()
export class ApiErrorMessageService {
  public languages = ['login-main', 'eng']

  public language  = 'login-main'

  private dictionary: { [key: string]: TranslationSet } = {
    'login-main': {
      languange: 'login-main',
      values: {
        "example": "Beispiel",
        "must be a well-formed email address": "must be a well-formed email address",
        "Error: A registry process should be made!": "Error: A registry process should be made!",
        "Error: A registry process un valid!": "Incorrect user name",
        "VALIDATION_FAILED": "* A registry process un valid!",
        "Bad credentials": "Incorrect user name or password",
        "Password matches one of %1$s previous passwords.": "Try again with a password you haven’t used before",
        "Passwords do not match!": "* Passwords do not match!"
      },
    },
    eng: {
      languange: 'eng',
      values: {
        "example": "Example",
      },
    },

  }

  constructor() {}

  apiErrorMessage(key: string): any {
    if (this.dictionary[this.language ] != null) {
      return this.dictionary[this.language ].values[key];
    }
  }
}


export class TranslationSet {
  public languange?: any;
  public values: { [key: string]: any } = {}
}
