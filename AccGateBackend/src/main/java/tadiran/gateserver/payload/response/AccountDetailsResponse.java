package tadiran.gateserver.payload.response;

import lombok.*;

/**
 * <h2>BaseResponse</h2>
 *
 * @author aek
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AccountDetailsResponse {

    private String username;
    private String email;
    private String phone;
    private Boolean enableProfilePicture = true;
    private boolean error = true;

    public AccountDetailsResponse(String username, String email, String phone){
        this.username = username;
        this.email = email;
        this.phone = phone;
    }
}
