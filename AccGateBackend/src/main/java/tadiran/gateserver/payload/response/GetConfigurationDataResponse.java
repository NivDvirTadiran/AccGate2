package tadiran.gateserver.payload.response;



import tadiran.gateserver.models.Prop;

import java.util.List;


/**
 * <h2>BaseResponse</h2>
 *
 * @author aek
 */

public class GetConfigurationDataResponse {

    private List<Prop> prop;

    public GetConfigurationDataResponse(List<Prop> prop){
        this.prop = prop;
    }

    public List<Prop> getProp() {
        return this.prop;
    }
    public void setProp(List<Prop> prop) {
        this.prop = prop;
    }
}
