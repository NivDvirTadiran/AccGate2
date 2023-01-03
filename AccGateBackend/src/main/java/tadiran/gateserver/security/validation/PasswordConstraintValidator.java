package tadiran.gateserver.security.validation;


import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

//import org.passay.AlphabeticalSequenceRule;
//import org.passay.DigitCharacterRule;
import lombok.SneakyThrows;
import org.passay.*;
import org.cryptacular.bean.EncodingHashBean;
import org.cryptacular.spec.CodecSpec;
import org.cryptacular.spec.DigestSpec;
//import org.passay.NumericalSequenceRule;
//import org.passay.QwertySequenceRule;
//import org.passay.SpecialCharacterRule;
//import org.passay.UppercaseCharacterRule;

import tadiran.gateserver.annotation.ValidPassword;




public class PasswordConstraintValidator implements ConstraintValidator<ValidPassword, String> {

    @Override
    public void initialize(final ValidPassword arg0) {

    }



    @SneakyThrows
    @Override
    public boolean isValid(final String password, final ConstraintValidatorContext context) {

        List<PasswordData.Reference> history = Arrays.asList(
                // Password=P@ssword1
                new PasswordData.HistoricalReference(
                        "SHA256",
                        "j93vuQDT5ZpZ5L9FxSfeh87zznS3CM8govlLNHU8GRWG/9LjUhtbFp7Jp1Z4yS7t"),

                // Password=P@ssword2
                new PasswordData.HistoricalReference(
                        "SHA256",
                        "mhR+BHzcQXt2fOUWCy4f903AHA6LzNYKlSOQ7r9np02G/9LjUhtbFp7Jp1Z4yS7t"),

                // Password=P@ssword3
                new PasswordData.HistoricalReference(
                        "SHA256",
                        "BDr/pEo1eMmJoeP6gRKh6QMmiGAyGcddvfAHH+VJ05iG/9LjUhtbFp7Jp1Z4yS7t")
        );

        EncodingHashBean hasher = new EncodingHashBean(
                new CodecSpec("Base64"), // Handles base64 encoding
                new DigestSpec("SHA256"), // Digest algorithm
                1, // Number of hash rounds
                false); // Salted hash == false

        //customizing validation messages
        Properties props = new Properties();
        InputStream inputStream = getClass()
                .getClassLoader().getResourceAsStream("passay.properties");
        props.load(inputStream);
        MessageResolver resolver = new PropertiesMessageResolver(props);

        // @formatter:off
        final PasswordValidator validator = new PasswordValidator(Arrays.asList(

                // length between 8 and 16 characters
                new LengthRule(8, 16),

                // length between 8 and 16 characters
                new LengthRule(8, 16),

                // at least one upper-case character
                new CharacterRule(EnglishCharacterData.UpperCase, 1),

                // at least one lower-case character
                new CharacterRule(EnglishCharacterData.LowerCase, 1),

                // at least one digit character
                new CharacterRule(EnglishCharacterData.Digit, 1),

                // at least one symbol (special character)
                new CharacterRule(EnglishCharacterData.Special, 1),

                // no whitespace
                new WhitespaceRule(),

                // rejects passwords that contain a sequence of >= 5 characters alphabetical  (e.g. abcdef)
                new IllegalSequenceRule(EnglishSequenceData.Alphabetical, 5, false),

                // rejects passwords that contain a sequence of >= 5 characters numerical   (e.g. 12345)
                new IllegalSequenceRule(EnglishSequenceData.Numerical, 5, false),

                // the following rules support enforcement of unique passwords in the context of password history
                new DigestHistoryRule(hasher)
              ));

        PasswordData data = new PasswordData(password);
        data.setPasswordReferences(history);
        final RuleResult result = validator.validate(data);
        if (result.isValid()) {
            return true;
        }


        List<String> messages = validator.getMessages(result);
        String messageTemplate = String.join(",", messages);
        context.buildConstraintViolationWithTemplate(messageTemplate)
                .addConstraintViolation()
                .disableDefaultConstraintViolation();
        return false;
    }

}
