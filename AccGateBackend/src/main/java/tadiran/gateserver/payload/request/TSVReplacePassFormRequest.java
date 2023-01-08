package tadiran.gateserver.payload.request;

import lombok.*;
import tadiran.gateserver.annotation.PasswordValueMatch;
import tadiran.gateserver.annotation.ValidPassword;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


/**
 * <h2>ReplacePassFormRequest</h2>
 *
 * @author aek
 */
@PasswordValueMatch.List({
        @PasswordValueMatch(
                field = "password",
                fieldMatch = "confirmPassword",
                message = "Passwords do not match!"
        )
})
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class TSVReplacePassFormRequest {

    @NonNull
    @NotBlank(message = "Username is mandatory")
    private String username;

    @NotBlank(message = "Current Password is mandatory")
    private String oldPassword;

    @ValidPassword
    @NonNull
    @NotBlank(message = "New password is mandatory")
    private String password;


    @ValidPassword
    @NonNull
    @NotBlank(message = "Confirm Password is mandatory")
    private String confirmPassword;


    private String pinCodeToken;

}

