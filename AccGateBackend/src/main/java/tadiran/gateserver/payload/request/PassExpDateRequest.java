package tadiran.gateserver.payload.request;
import javax.validation.constraints.NotBlank;

public class PassExpDateRequest {
    @NotBlank
    private String accessToken;

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
