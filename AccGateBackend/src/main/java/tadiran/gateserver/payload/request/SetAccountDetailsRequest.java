package tadiran.gateserver.payload.request;

import javax.validation.constraints.NotBlank;

public class SetAccountDetailsRequest {
    @NotBlank
    private String detail;

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }
}
