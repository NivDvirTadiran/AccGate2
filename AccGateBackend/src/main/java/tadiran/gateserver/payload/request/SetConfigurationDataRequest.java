package tadiran.gateserver.payload.request;
import tadiran.gateserver.models.Prop;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class SetConfigurationDataRequest {
    @NotBlank
    private String prop;

    public String getProp() {
        return prop;
    }

    public void setProp(String prop) {
        this.prop = prop;
    }
}
